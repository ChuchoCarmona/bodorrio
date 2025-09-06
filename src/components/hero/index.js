import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
    return (
      <Slider {...settings}>
      <div id="home" className="item1">
        <div className="container">
        <div className="slide-content">
          <div className="slide-subtitle">
          <h4>¡NOS VAMOS A CASAR!</h4>
          </div>
          <div className="slide-title">
          <h2>Guarda la Fecha</h2>
          </div>
          <div className="slide-text">
          <p>17 de Enero 2026</p>
          </div>
          <div className="slide-names">
          <h3 style={{ color: "#fff" }}>
            Jesús Carmona & Litzy Arcos
          </h3>
          </div>
        </div>
        </div>
      </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
