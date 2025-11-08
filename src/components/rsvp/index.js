// RSVPWhatsAppMX.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Snackbar,
  Alert,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import "./style.css"; // opcional: conserva tu fondo/identidad visual

// Teléfono de destino (WA en MX: 52 + 10 dígitos, sin +, espacios ni guiones)
const PHONE = "5217443778058";

const RSVPWhatsAppMX = () => {
  const [form, setForm] = useState({
    nombre: "",
    asistencia: "", // "si" | "no"
    personas: "", // "1".."6" (solo si asistencia = "si")
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    open: false,
    msg: "",
    severity: "success",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const er = {};
    if (!form.nombre.trim()) er.nombre = "Escribe tu nombre";
    if (!form.asistencia) er.asistencia = "Indica si asistirás";
    if (form.asistencia === "si" && !form.personas)
      er.personas = "Selecciona cuántas personas asistirán";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const buildMessage = () => {
    const asistir = form.asistencia === "si";
    const partes = [
      `Hola, soy ${form.nombre}.`,
      asistir ? "Confirmo que SÍ asistiré." : "Confirmo que NO podré asistir.",
      asistir && form.personas
        ? `Asistiremos ${form.personas} ${
            Number(form.personas) === 1 ? "persona" : "personas"
          } (incluyéndome).`
        : "",
      form.mensaje?.trim() ? `Mensaje: ${form.mensaje.trim()}` : "",
      asistir ? "¡Gracias! Nos vemos" : "¡Gracias por la invitación!",
    ].filter(Boolean);
    return partes.join(" ");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setToast({
        open: true,
        msg: "Revisa los campos marcados",
        severity: "error",
      });
      return;
    }
    const text = encodeURIComponent(buildMessage());
    window.open(
      `https://wa.me/${PHONE}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <Paper
              elevation={3}
              className="rsvp-wrap"
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(3px)",
              }}
            >
              <div className="section-title section-title4 text-center">
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontFamily: "'Great Vibes','Cormorant Garamond',serif",
                    fontWeight: 500,
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    mb: 1,
                  }}
                >
                  Confirmación de Asistencia
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Cuéntanos si asistirás y cuántas personas te acompañarán.
                </Typography>
              </div>

              <Box component="form" noValidate onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Tu nombre*"
                      name="nombre"
                      value={form.nombre}
                      onChange={change}
                      error={!!errors.nombre}
                      helperText={errors.nombre}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      error={!!errors.asistencia}
                      sx={{ width: "100%" }}
                    >
                      <Typography sx={{ mb: 1 }}>¿Asistirás?*</Typography>
                      <RadioGroup
                        row
                        name="asistencia"
                        value={form.asistencia}
                        onChange={change}
                      >
                        <FormControlLabel
                          value="si"
                          control={<Radio />}
                          label="Sí"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                      {!!errors.asistencia && (
                        <FormHelperText>{errors.asistencia}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  {form.asistencia === "si" && (
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.personas}>
                        <InputLabel id="personas-label">
                          ¿Cuántas personas?*
                        </InputLabel>
                        <Select
                          labelId="personas-label"
                          label="¿Cuántas personas?*"
                          name="personas"
                          value={form.personas}
                          onChange={change}
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <MenuItem key={n} value={String(n)}>
                              {n}
                            </MenuItem>
                          ))}
                        </Select>
                        {!!errors.personas && (
                          <FormHelperText>{errors.personas}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje adicional (opcional)"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={change}
                      multiline
                      minRows={3}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="center" sx={{ mt: 1 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      className="submit"
                      sx={{
                        px: 4,
                        py: 1.2,
                        borderRadius: 999,
                        textTransform: "none",
                      }}
                    >
                      Enviar confirmación por WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </div>
        </div>
      </div>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={toast.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RSVPWhatsAppMX;
