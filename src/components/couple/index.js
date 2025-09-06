import React from "react";
import { Link } from "react-router-dom";
import Sectiontitle from "../section-title";
import couple1 from "../../images/couple/img-1.jpg";
import couple2 from "../../images/couple/img-2.jpg";
import couple3 from "../../images/couple/2.png";
import "./style.css";

const Couple = () => {
  return (
    <div id="couple" className="about-wrap">
      <div className="couple-area section-padding pb-70">
        <Sectiontitle section={"Feliz Pareja"} />
        <div className="container">
          <div className="couple-wrap">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-2">
                  <div className="couple-img">
                    <img src={couple1} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Litzy Arcos</h3>
                      <p>
                        Desde que dijimos “sí” mi corazón late con más fuerza.
                        Estoy tan ilusionada con este día tan especial y
                        agradecida por compartir mi vida con Luis Jesús. Cada
                        detalle de nuestra boda es un sueño hecho realidad y no
                        puedo esperar para comenzar esta nueva etapa a su lado,
                        con todo el amor que nos une.
                      </p>
                    </div>

                    <div className="social-icon">
                      <ul className="d-flex">
                        <li>
                          <Link to="/">
                            <span className="fa fa-facebook"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span className="fa fa-twitter"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span className="fa fa-google-plus"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span className="fa fa-linkedin"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 couple-single">
                <div className="couple-shape">
                  <img src={couple3} alt="shape" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-3">
                  <div className="couple-img couple-img-2">
                    <img src={couple2} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Jesús Carmona</h3>
                      <p>
                        Desde que conocí a Litzy supe que mi vida cambiaría para
                        siempre. Hoy me siento el hombre más afortunado y feliz
                        de poder caminar a su lado. Estoy profundamente
                        enamorado y emocionado por comenzar esta nueva etapa
                        juntos, construyendo un futuro lleno de amor, alegría y
                        bendiciones.
                      </p>
                    </div>

                    <div className="social-icon">
                      <ul className="d-flex">
                        <li>
                          <Link to="/">
                            <span className="fa fa-facebook"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span className="fa fa-twitter"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span className="fa fa-google-plus"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span className="fa fa-linkedin"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
