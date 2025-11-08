import React, { Fragment } from "react";

import { Dialog, Grid } from "@mui/material";

const LocationMap2 = ({ maxWidth, button, buttonClass }) => {
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
        {button}
        Salon
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.1515098487909!2d-99.72281528164054!3d17.093339490697936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbb3d6abbe2239%3A0x9f3d7bb4afae0755!2sFRAGA!5e0!3m2!1ses-419!2smx!4v1757124205999!5m2!1ses-419!2smx"
            ></iframe>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default LocationMap2;
