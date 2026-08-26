import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      {/* Botón Inicio de página */}
      <button className="footer-back-to-top" onClick={scrollToTop}>
        Inicio de página
      </button>

      {/* Secciones de enlaces */}
      <div className="footer-links-grid">
        <div className="footer-col">
          <h4>Conócenos</h4>
          <ul>
            <li><Link to="/acerca-de">Acerca de Spexs Store</Link></li>
            <li><Link to="/prensa">Información corporativa</Link></li>
            <li><Link to="/empleos">Trabaja con nosotros</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Comunidad y Desarrolladores</h4>
          <ul>
            <li><Link to="/publicar-juego">Publica tu juego</Link></li>
            <li><Link to="/afiliados">Programa de afiliados</Link></li>
            <li><Link to="/desarrolladores">API y Herramientas</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Podemos ayudarte</h4>
          <ul>
            <li><Link to="/ayuda">Soporte técnico y Ayuda</Link></li>
            <li><Link to="/devoluciones">Devoluciones y Reembolsos</Link></li>
            <li><Link to="/gestion-cuenta">Gestionar cuenta</Link></li>
            <li><Link to="/seguridad">Centro de seguridad</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Métodos de pago</h4>
          <ul>
            <li><span> Tarjetas de crédito y débito</span></li>
            <li><span> Tarjetas de regalo</span></li>
            
          </ul>
        </div>
      </div>

      <div className="footer-divider" />

      {/* Marca / País */}
      <div className="footer-brand-section">
        <span className="footer-logo"> Spexs Store</span>
        <div className="footer-country-badge">
          <span>🇲🇽 México</span>
        </div>
      </div>

      {/* Copyright, Políticas y Privacidad */}
      <div className="footer-legal-bar">
        <div className="footer-legal-links">
          <Link to="/condiciones">Condiciones de uso</Link>
          <Link to="/privacidad">Aviso de privacidad</Link>
          <Link to="/cookies">Preferencias de cookies</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <p className="footer-copyright">
          © 1996-{new Date().getFullYear()}, Spexs Store, Inc. o sus afiliados.
        </p>
      </div>
    </footer>
  );
}