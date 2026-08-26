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

      {/* Botón de Iniciar Sesión / Perfil (Derecha) */}
      <div className="user-top-right-btn">
        {usuario ? (
          <div className="user-logged-menu">
            <span>👤 {usuario.nombre}</span>
            <button onClick={cerrarSesion} className="btn-logout-small">Salir</button>
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
          <h2>GameStore</h2>
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