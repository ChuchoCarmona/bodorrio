import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Tooltip, SvgIcon } from "@mui/material";
import classes from "../../css/BackgroundVideo.module.css";
import videoSource from "../../images/fotosPaginaBoda/SVD.mov";

// Íconos inline (evitamos @mui/icons-material)
const VolumeOffRoundedIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M16.5 12c0-.88-.39-1.67-1-2.2v4.4c.61-.53 1-1.32 1-2.2zM12 4.41 8.71 7.7H5c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3.71L12 18.59c.63.63 1.71.19 1.71-.71V5.12c0-.89-1.08-1.34-1.71-.71zM19 12c0 1.8-.76 3.42-2 4.56v-9.1A6.49 6.49 0 0 1 19 12z"/>
  </SvgIcon>
);
const VolumeUpRoundedIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-.88-.39-1.67-1-2.2v4.4c.61-.53 1-1.32 1-2.2zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </SvgIcon>
);

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // inicia silenciado para permitir autoplay
  const [showUnmuteHint, setShowUnmuteHint] = useState(true);

  useEffect(() => {
    // Intentar reproducir automáticamente (silenciado) al montar
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch (e) {
        // Si falla el autoplay, mostramos pista para tocar
        setShowUnmuteHint(true);
      }
    };
    tryPlay();
  }, []);

  const handleEnableSound = async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setIsMuted(false);
    setShowUnmuteHint(false);
    try {
      await v.play();
    } catch {
      // Si aún requiere interacción, un segundo click lo logra
    }
  };

  const toggleMute = async () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !isMuted;
    v.muted = next;
    setIsMuted(next);
    try {
      await v.play();
    } catch {}
  };

  return (
    <div className="video-area" id="inicio">
      <div className={classes.Container}>
        <video
          ref={videoRef}
          className={classes.Video}
          // sin controles visibles
          controls={false}
          // reproducción automática en loop
          autoPlay
          loop
          // inicia silenciado para permitir autoplay; luego se desactiva con el botón
          muted={isMuted}
          // mejora el autoplay en iOS y evita fullscreen forzado
          playsInline
          // opcional: evita descargas/velocidad desde menú contextual en algunos navegadores
          controlsList="nodownload noplaybackrate noremoteplayback"
        >
          {/* Dejo igual que tu versión que sí funciona */}
          <source src={videoSource} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* Botón MUI (toggle) en esquina inferior izquierda, pequeño y elegante */}
        <Box sx={{ position: "absolute", left: 12, bottom: 12, zIndex: 2 }}>
          <Tooltip title={isMuted ? "Activar sonido" : "Silenciar sonido"} arrow>
            <IconButton
              onClick={toggleMute}
              aria-label={isMuted ? "Activar sonido del video" : "Silenciar sonido del video"}
              size="small"
              sx={{
                bgcolor: "rgba(0,0,0,0.35)",
                color: "#fff",
                backdropFilter: "blur(4px)",
                borderRadius: "999px",
                p: "6px",
                "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              {isMuted ? <VolumeOffRoundedIcon fontSize="small" /> : <VolumeUpRoundedIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Si quieres mantener también tu hint inicial para activar sonido */}
        {showUnmuteHint && isMuted && (
          <Box sx={{ position: "absolute", left: 56, bottom: 12, zIndex: 2, color: "#fff", fontSize: 12, opacity: 0.9 }}>
            Toca el ícono para activar sonido
          </Box>
        )}
      </div>
    </div>
  );
};

export default BackgroundVideo;
