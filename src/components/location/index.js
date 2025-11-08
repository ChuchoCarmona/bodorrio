import { Grid } from "@mui/material";

import Sectiontitle from "../section-title";
import strory1 from "../../images/fotosPaginaBoda/iglesia.jpg";
import strory2 from "../../images/events/2.jpg";
import strory3 from "../../images/fotosPaginaBoda/freaga.jpg";
import LocationMap from "../LocationModal/LocationModal";
import LocationMap2 from "../LocationModal/LocationModal2";
import LocationMap3 from "../LocationModal/LocationModal3";

import "./style.css";

const Location = () => {
  return (
    <div id="event" className="service-area section-padding">
      <div className="container">
        <Sectiontitle section={"Donde y cuando"} />
        <div className="service-area-menu">
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img src={strory1} alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div class="ceromony-content p-2">
                  <h3>Misa en la Parroquia de San Isidro Labrador</h3>
                  <span>Sabado 17 de enero, 5:00 – 7:00 PM</span>
                  <span>
                    Isabel la Católica s/n, 39910 Xaltianguis, Guerrero
                  </span>
                  <p>
                    La comunidad de Xaltianguis tiene como corazón espiritual a
                    la Parroquia de San Isidro Labrador, patrono del pueblo.
                    Desde hace décadas, la vida religiosa y las celebraciones
                    del calendario giran en torno a este templo. La fiesta
                    patronal es la más importante de la localidad y se celebra
                    cada mayo, con peregrinaciones, danzas, feria y música que
                    reúnen a familias y visitantes de toda la región.
                  </p>
                  <p>
                    La parroquia pertenece a la Arquidiócesis de Acapulco y se
                    ubica en Isabel la Católica s/n, en el centro de
                    Xaltianguis. A lo largo del tiempo ha recibido mejoras
                    impulsadas por sus feligreses, reflejo del cariño que la
                    comunidad le tiene. Hoy, con su reciente remodelación, el
                    templo nos recibe con los brazos abiertos: bancas renovadas,
                    espacios más luminosos y una casa de oración lista para ser
                    el marco perfecto de nuestra celebración.
                  </p>
                  <LocationMap buttonClass={"location-btn"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-7 p-2">
              <div className="ceromony-content ceromony-content2">
                <h3>Recorrido a la Fiesta</h3>
                <span>Al terminar la ceremonia en la iglesia</span>
                <span>
                  Destino: Salón Fraga · Vicente Guerrero, 39910 Xaltianguis,
                  Gro.
                </span>
                <p>
                  Al concluir la misa en la Parroquia de San Isidro Labrador,
                  nos dirigiremos juntos al <strong>Salón Fraga</strong> para
                  continuar la celebración. El trayecto es corto (aprox.
                  1.4&nbsp;km, 3&nbsp;min en auto), así que te invitamos a
                  seguir la caravana. ¡La música, el
                  brindis y la pista de baile nos esperan!
                </p>

                <LocationMap3 buttonClass={"location-btn"} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ceromony-map">
                <iframe
                  title="Recorrido"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3813.559293873977!2d-99.71964440699354!3d17.094196393026913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x85cbb300512e68cb%3A0x3fa204f0ddcfce90!2sIglesia%20San%20Isidro%20Labrador%2C%20Isabel%20la%20Cat%C3%B3lica%2C%20Centro%2C%20Xaltianguis%2C%20Guerrero!3m2!1d17.098429499999998!2d-99.7147596!4m5!1s0x85cbb3d6abbe2239%3A0x9f3d7bb4afae0755!2sFRAGA%2C%20Vicente%20Guerrero%2C%2039910%20Xaltianguis%2C%20Gro.!3m2!1d17.0930896!2d-99.7225386!5e0!3m2!1ses-419!2smx!4v1762578813368!5m2!1ses-419!2smx"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-5">
              <div className="ceromony-img">
                <img src={strory3} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ceromony-content">
                <h3>Recepción en Salón Fraga</h3>
                <span>Sabado 17 de enero</span>
                <span>Fraga, Vicente Guerrero, 39910 Xaltianguis, Gro.</span>
                <p>
                  En el corazón de Xaltianguis, el <strong>Salón Fraga</strong>{" "}
                  se distingue por su ambiente cálido y elegante, ideal para
                  celebrar los momentos más memorables. Su amplio espacio,
                  cuidadosamente decorado, combina la esencia tradicional de la
                  región con detalles modernos que realzan cada rincón.
                </p>
                <LocationMap2 buttonClass={"location-btn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
