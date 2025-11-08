import React, { Fragment } from "react";

import { Dialog, Grid } from "@mui/material";

const LocationMap3 = ({ maxWidth, button, buttonClass }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
        {button}Recorrido
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <button onClick={handleClose} className="event-close-btn">
          <i className="fa fa-close"></i>
        </button>
        <Grid className="modalBody modal-body">
          <Grid className="modalBody modal-body">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3813.5366065452345!2d-99.71986564994445!3d17.09530473898655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x85cbb3d6abbe2239%3A0x9f3d7bb4afae0755!2sFRAGA%2C%20Vicente%20Guerrero%2C%20Xaltianguis%2C%20Guerrero!3m2!1d17.0930896!2d-99.7225386!4m5!1s0x85cbb300512e68cb%3A0x3fa204f0ddcfce90!2sIglesia%20San%20Isidro%20Labrador%2C%20Isabel%20la%20Cat%C3%B3lica%2C%20Centro%2C%2039910%20Xaltianguis%2C%20Gro.!3m2!1d17.098429499999998!2d-99.7147596!5e0!3m2!1ses-419!2smx!4v1762576550374!5m2!1ses-419!2smx"
            ></iframe>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default LocationMap3;
