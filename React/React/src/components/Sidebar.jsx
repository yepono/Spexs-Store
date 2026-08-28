import React, { useState } from 'react';
import './Sidebar.css';
import CategoriasMenu from './CategoriasMenu';
import TranslatorWidget from './TranslatorWidget';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';

function Sidebar({ abierto, onToggle, onCerrar, categoriaActiva, onSeleccionar }) {
  const [modalAuthAbierto, setModalAuthAbierto] = useState(false);
  const { usuario, cerrarSesion } = useAuth();

  return (
    <>
      {/* Botón Hamburguesa (Izquierda) */}
      <button
        className={`hamburguesa-btn ${abierto ? 'abierto' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Botón de Iniciar Sesión / Perfil Expandible (Derecha) */}
      <div className="user-top-right-btn">
        {usuario ? (
          <div className="perfil-hover-container" onClick={cerrarSesion}>
            <img
              src={usuario.avatar_url || 'https://via.placeholder.com/150'}
              alt={usuario.nombre}
              className="perfil-avatar-spin"
            />
            <span className="btn-logout-expand">Salir</span>
          </div>
        ) : (
          <button
            className="btn-auth-top-right"
            onClick={() => setModalAuthAbierto(true)}
          >
            Iniciar Sesión / Registrarse
          </button>
        )}
      </div>

      {/* Overlay translúcido */}
      <div
        className={`sidebar-overlay ${abierto ? 'visible' : ''}`}
        onClick={onCerrar}
      />

      {/* Sidebar Drawer */}
      <aside className={`sidebar ${abierto ? 'abierto' : ''}`}>
        <div className="sidebar-header">
          <h2>SPEXS</h2>
          <button className="sidebar-close" onClick={onCerrar} aria-label="Cerrar menú">
            ✕
          </button>
        </div>

        <CategoriasMenu
          categoriaSeleccionada={categoriaActiva}
          onSelectCategoria={onSeleccionar}
        />

        <TranslatorWidget />
      </aside>

      {/* Modal de Autenticación */}
      <AuthModal
        isOpen={modalAuthAbierto}
        onClose={() => setModalAuthAbierto(false)}
      />
    </>
  );
}

export default Sidebar;