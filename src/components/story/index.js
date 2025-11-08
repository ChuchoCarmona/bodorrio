import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Button } from "@mui/material";
import historiaVideo from "../../images/fotosPaginaBoda/videoMometnos1.mp4";
import historiaVideo2 from "../../images/fotosPaginaBoda/remember3.mp4";
import strory2 from "../../images/fotosPaginaBoda/remember1.jpg";
import historiaVideo3 from "../../images/fotosPaginaBoda/pedida4.mp4";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./style.css";

const Story = () => {
  // Referencias y estados por cada video
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const videoRef3 = useRef(null);
  const [isMuted3, setIsMuted3] = useState(true);
  const [openHistoria, setOpenHistoria] = useState(false);
  const [openHistoria2, setOpenHistoria2] = useState(false);
  const [openHistoria3, setOpenHistoria3] = useState(false);
  const [openHistoria4, setOpenHistoria4] = useState(false);

  // autoplay silencioso inicial
  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (v1) {
      v1.muted = true;
      v1.play().catch(() => {});
    }
    if (v2) {
      v2.muted = true;
      v2.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    const v3 = videoRef3.current;
    [v1, v2, v3].forEach((v) => {
      if (v) {
        v.muted = true;
        v.play().catch(() => {});
      }
    });
  }, []);

  // función genérica para alternar sonido
  const handleToggleAudio = async (ref, mutedSetter, currentMuted) => {
    const v = ref.current;
    if (!v) return;
    const next = !currentMuted;
    v.muted = next;
    mutedSetter(next);
    try {
      await v.play();
    } catch {
      // en iOS puede requerir un segundo toque
    }
  };

  return (
    <div id="story" className="story-area section-padding">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>Nuestra Historia</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="story clearfix">
              <div className="story-top"></div>
              <div className="content-wrapper">
                {/* === Primer VIDEO === */}
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            cursor: "pointer",
                            overflow: "hidden",
                          }}
                          onClick={() =>
                            handleToggleAudio(videoRef1, setIsMuted1, isMuted1)
                          }
                          aria-label={
                            isMuted1
                              ? "Activar sonido del video"
                              : "Silenciar sonido del video"
                          }
                          title={
                            isMuted1
                              ? "Toca para activar sonido"
                              : "Toca para silenciar"
                          }
                        >
                          <video
                            ref={videoRef1}
                            style={{
                              width: "100%",
                              height: "auto", // 🔥 se ajusta automáticamente
                              display: "block",
                              border: 0,
                              objectFit: "contain", // mantiene el video completo visible
                              borderRadius: "10px", // opcional para suavizar bordes
                            }}
                            src={historiaVideo}
                            autoPlay
                            loop
                            muted={isMuted1}
                            playsInline
                            controls={false}
                            controlsList="nodownload noplaybackrate noremoteplayback"
                            preload="metadata"
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 8,
                              left: 8,
                              fontSize: 12,
                              color: "#fff",
                              background: "rgba(0,0,0,0.35)",
                              padding: "4px 8px",
                              borderRadius: 6,
                              userSelect: "none",
                              pointerEvents: "none",
                            }}
                          >
                            {isMuted1
                              ? "🔇 Toca para activar sonido"
                              : "🔊 Toca para silenciar"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2>Desde que nos conocimos</h2>
                    <p>
                      Hay momentos que marcan nuestra vida, y uno de ellos fue
                      el día en que nos cruzamos por primera vez.
                    </p>

                    <Collapse in={openHistoria}>
                      <p style={{ marginTop: "1rem" }}>
                        Nos conocimos en un mes de agosto pero nuestros corazones se
                        unieron un 22 de noviembre, despues de casi tres año de haber cruzado miradas
                        por primera vez y desde ese instante
                        sentimos que Dios había puesto algo especial en nuestro
                        camino. Empezamos a compartir momentos que jamás
                        imaginamos vivir, llenos de risas, complicidad y sueños
                        compartidos. El 8 de enero tuvimos nuestra primera cita,
                        y a partir de ahí nacieron incontables planes que nos
                        unieron aún más. Con el tiempo comprendimos que
                        estábamos hechos el uno para el otro, porque aprendimos
                        a entregarnos sin medida y con todo el amor del corazón.
                        Un 18 de febrero comenzamos oficialmente nuestra
                        historia como pareja, y desde entonces el tiempo ha
                        seguido su curso, trayendo consigo recuerdos, aventuras
                        y la certeza de que cada día seguimos eligiéndonos con
                        la misma ilusión del primer día.
                      </p>
                    </Collapse>

                    <Button
                      onClick={() => setOpenHistoria(!openHistoria)}
                      endIcon={
                        openHistoria ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                      sx={{
                        mt: 1,
                        textTransform: "none",
                        color: "#b48c60",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "rgba(180,140,96,0.08)" },
                      }}
                    >
                      {openHistoria ? "Cerrar historia" : "Nuestra historia"}
                    </Button>
                  </div>
                </div>

                {/* === Imagen === */}
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory2} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Nuestra vida juntos</h2>
                    <p>
                      Hay momentos que se sienten como casa, y el nuestro empezó
                      así.
                    </p>

                    <Collapse in={openHistoria2}>
                      <p style={{ marginTop: "1rem" }}>
                        Sabíamos que estábamos en el lugar correcto cuando
                        podíamos hacernos compañía sin sentir las horas. No
                        había planes absurdos: daba igual si un día cenábamos en
                        un restaurante de lujo en la ciudad o si al siguiente
                        nos comíamos unos taquitos modestos en la banqueta.
                        Nuestras risas y nuestro cariño le daban vida a
                        cualquier cosa que hacíamos. Somos felices el uno con el
                        otro; sin importar las circunstancias, siempre salimos
                        adelante. Es cierto, a veces nos sacudimos el polvo,
                        pero siempre regresamos con una sonrisa a tomarnos de la
                        mano y continuar nuestro paso.
                      </p>
                    </Collapse>

                    <Button
                      onClick={() => setOpenHistoria2(!openHistoria2)}
                      endIcon={
                        openHistoria2 ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                      sx={{
                        mt: 1,
                        textTransform: "none",
                        color: "#b48c60",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "rgba(180,140,96,0.08)" },
                      }}
                    >
                      {openHistoria2 ? "Cerrar historia" : "Nuestra historia"}
                    </Button>
                  </div>
                </div>

                {/* === Tercer VIDEO === */}
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            cursor: "pointer",
                            overflow: "hidden",
                          }}
                          onClick={() =>
                            handleToggleAudio(videoRef3, setIsMuted3, isMuted3)
                          }
                          aria-label={
                            isMuted3
                              ? "Activar sonido del video"
                              : "Silenciar sonido del video"
                          }
                          title={
                            isMuted3
                              ? "Toca para activar sonido"
                              : "Toca para silenciar"
                          }
                        >
                          <video
                            ref={videoRef3}
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                              border: 0,
                              objectFit: "contain", // 🔥 para videos verticales o variados
                              borderRadius: "10px",
                            }}
                            src={historiaVideo3}
                            autoPlay
                            loop
                            muted={isMuted3}
                            playsInline
                            controls={false}
                            controlsList="nodownload noplaybackrate noremoteplayback"
                            preload="metadata"
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 8,
                              left: 8,
                              fontSize: 12,
                              color: "#fff",
                              background: "rgba(0,0,0,0.35)",
                              padding: "4px 8px",
                              borderRadius: 6,
                              userSelect: "none",
                              pointerEvents: "none",
                            }}
                          >
                            {isMuted3
                              ? "🔇 Toca para activar sonido"
                              : "🔊 Toca para silenciar"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2>Nuestra propuesta de matrimonio</h2>
                    <span className="date">18 de enero</span>
                    <p>
                      Hay días que simplemente se sienten mágicos, y ese fue el
                      nuestro.
                    </p>

                    <Collapse in={openHistoria3}>
                      <p style={{ marginTop: "1rem" }}>
                        Un buen 18 de enero, entre nervios y sonrisas, llegó ese
                        momento que siempre soñamos. La idea era simple: cerrar
                        una etapa de nuestras vidas, dejar atrás la universidad
                        y celebrar todo lo que habíamos logrado… pero sin
                        saberlo, ese día iba a significar mucho más.
                        <br />
                        <br />
                        Al día siguiente de la clausura, en casa de la novia, el
                        ambiente se llenó de música de viento, comida, cerveza y
                        esa alegría que solo se siente cuando te rodea la gente
                        que más amas. Entre bromas, abrazos y miradas cómplices,
                        todo se detuvo por un instante. Nos miramos, y supimos
                        que el siguiente paso era inevitable: queríamos
                        compartir la vida entera.
                        <br />
                        <br />
                        No fue una pedida de película, pero fue nuestra, y eso
                        la hizo perfecta. Fue sincera, llena de emoción, con las
                        manos temblando y los corazones acelerados. Recuerdo que
                        nos reímos, lloramos y luego reímos otra vez, como si el
                        mundo solo existiera para nosotros dos.
                        <br />
                        <br />
                        Ese día celebramos más que una promesa: festejamos el
                        inicio de una historia que seguimos escribiendo cada
                        día, con los mismos sueños, las mismas ganas y ese mismo
                        amor que, contra todo pronóstico, sigue creciendo y
                        haciéndose más fuerte con el tiempo.
                      </p>
                    </Collapse>

                    <Button
                      onClick={() => setOpenHistoria3(!openHistoria3)}
                      endIcon={
                        openHistoria3 ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                      sx={{
                        mt: 1,
                        textTransform: "none",
                        color: "#b48c60",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "rgba(180,140,96,0.08)" },
                      }}
                    >
                      {openHistoria3 ? "Cerrar historia" : "Nuestra historia"}
                    </Button>
                  </div>
                </div>

                {/* === Segundo VIDEO === */}
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            cursor: "pointer",
                            overflow: "hidden",
                          }}
                          onClick={() =>
                            handleToggleAudio(videoRef2, setIsMuted2, isMuted2)
                          }
                          aria-label={
                            isMuted2
                              ? "Activar sonido del video"
                              : "Silenciar sonido del video"
                          }
                          title={
                            isMuted2
                              ? "Toca para activar sonido"
                              : "Toca para silenciar"
                          }
                        >
                          <video
                            ref={videoRef2}
                            style={{
                              width: "100%",
                              height: "auto", // 🔥 deja que la altura se ajuste sola
                              display: "block",
                              border: 0,
                              objectFit: "contain", // mantiene proporción sin recortar
                              borderRadius: "10px", // opcional, por estética
                            }}
                            src={historiaVideo2}
                            autoPlay
                            loop
                            muted={isMuted2}
                            playsInline
                            controls={false}
                            controlsList="nodownload noplaybackrate noremoteplayback"
                            preload="metadata"
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 8,
                              left: 8,
                              fontSize: 12,
                              color: "#fff",
                              background: "rgba(0,0,0,0.35)",
                              padding: "4px 8px",
                              borderRadius: 6,
                              userSelect: "none",
                              pointerEvents: "none",
                            }}
                          >
                            {isMuted2
                              ? "🔇 Toca para activar sonido"
                              : "🔊 Toca para silenciar"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2>Nuestra hermosa familia</h2>
                    <p>
                      De los sueños compartidos nacen las historias más lindas,
                      y la nuestra sigue creciendo cada día.
                    </p>

                    <Collapse in={openHistoria4}>
                      <p style={{ marginTop: "1rem" }}>
                        Hoy en día formamos una familia hermosa, de esas que se
                        construyen con abrazos, paciencia y risas que se cuelan
                        por cada rincón del hogar. Nuestra pequeña Kayla llegó
                        para darle un nuevo sentido a todo, para enseñarnos que
                        el amor se puede multiplicar y que los corazones, cuando
                        aman de verdad, siempre tienen espacio para más. Ella es
                        nuestro motorcito, nuestra razón de levantarnos cada día
                        con una sonrisa y de seguir soñando juntos.
                        <br />
                        <br />
                        Aprendimos que no hace falta tenerlo todo, que basta con
                        estar unidos, compartir lo que somos y mirar hacia
                        adelante tomados de la mano. Nuestra idea es clara:
                        queremos una familia que tal vez sea pequeña, pero
                        sólida, fuerte, guiada por valores, respeto y, sobre
                        todo, por un amor inmenso.
                        <br />
                        <br />
                        En cada risa de Kayla, en cada mirada cómplice entre
                        nosotros, encontramos la confirmación de que todo valió
                        la pena. Que cada paso, cada decisión y cada sueño
                        compartido nos trajeron hasta aquí, donde la vida es más
                        bella porque la vivimos juntos.
                        <br />
                        <br />
                        Nuestra familia es la prueba viva de que el amor, cuando
                        es sincero y se cuida con ternura, puede construir un
                        hogar lleno de luz, esperanza y felicidad. Y si algo
                        tenemos claro, es que seguiremos escribiendo nuestra
                        historia, día tras día, con el corazón lleno de amor… y
                        con Kayla recordándonos lo afortunados que somos de
                        tenernos los unos a los otros.
                      </p>
                    </Collapse>

                    <Button
                      onClick={() => setOpenHistoria4(!openHistoria4)}
                      endIcon={
                        openHistoria4 ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                      sx={{
                        mt: 1,
                        textTransform: "none",
                        color: "#b48c60",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "rgba(180,140,96,0.08)" },
                      }}
                    >
                      {openHistoria4 ? "Cerrar historia" : "Nuestra historia"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="story-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
