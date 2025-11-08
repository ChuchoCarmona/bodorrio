import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LocationMap from "../LocationModal/LocationModal";
import LocationMap2 from "../LocationModal/LocationModal2";

const Welcome = () => {
  return (
    <div className="welcome-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-content">
              <h2>Bienvenidos a nuestro gran día</h2>
              <p>
                Nos llena de alegría compartir con ustedes este momento tan
                especial en nuestras vidas. El 17 de enero del 2026 uniremos
                nuestras almas y corazones para siempre, rodeados del amor de
                nuestra familia y amigos. Gracias por acompañarnos en el inicio
                de esta hermosa historia juntos.
              </p>
              <div className="btn">
                <LocationMap2 buttonClass={"location-btn"} />
              </div>
              <LocationMap buttonClass={"location-btn"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
