// MobileMenuES.jsx
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import './style.css';

export default class MobileMenuES extends Component {
  state = {
    isMenuShow: false,
  };

  // Abre/cierra el menú
  toggleMenu = () => {
    this.setState((s) => ({ isMenuShow: !s.isMenuShow }));
  };

  // Cierra el menú (al hacer clic en una opción)
  closeMenu = () => {
    this.setState({ isMenuShow: false });
  };

  render() {
    const { isMenuShow } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
          <div className="close" onClick={this.toggleMenu}>
            <i className="fa fa-close"></i>
          </div>

          <div className="logo2">
            {/* Puedes mantener el Link a / si tu home está ahí */}
            <h2>
              <Link to="/" onClick={this.closeMenu}>
                Litzy &amp; Jesús
              </Link>
            </h2>
          </div>

          <ul className="responsivemenu">
            <li>
              <AnchorLink href="#couple" onClick={this.closeMenu}>
                Pareja
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#story" onClick={this.closeMenu}>
                Historia
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#event" onClick={this.closeMenu}>
                Evento
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#gallery" onClick={this.closeMenu}>
                Galería
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#rsvp" onClick={this.closeMenu}>
                Confirmación
              </AnchorLink>
            </li>
          </ul>
        </div>

        {/* Botón hamburguesa para mostrar/ocultar el menú */}
        <div className="showmenu" onClick={this.toggleMenu}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
