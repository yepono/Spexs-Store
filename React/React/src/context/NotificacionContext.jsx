import { createContext, useState, useContext, useCallback } from 'react';
import './Notificacion.css';

const NotificacionContext = createContext();

export const useNotificacion = () => {
  return useContext(NotificacionContext);
};

export const NotificacionProvider = ({ children }) => {
  const [notificacion, setNotificacion] = useState(null);

  const mostrarNotificacion = useCallback((titulo, mensaje, logo = null) => {
    setNotificacion({ titulo, mensaje, logo, saliendo: false });

    setTimeout(() => {
      // Primero disparamos la animación de salida
      setNotificacion((prev) => prev ? { ...prev, saliendo: true } : null);

      // Luego desmontamos el componente
      setTimeout(() => setNotificacion(null), 400);
    }, 3500);
  }, []);

  return (
    <NotificacionContext.Provider value={{ mostrarNotificacion }}>
      {children}

      {notificacion && (
        <div className={`toast-notificacion ${notificacion.saliendo ? 'saliendo' : ''}`}>

          {/* Logo */}
          <div className='toast-logo-wrapper'>
            {notificacion.logo ? (
              <img
                src={notificacion.logo}
                alt={notificacion.titulo}
                className='toast-logo'
              />
            ) : (
              <div className='toast-logo-placeholder'>
                <svg
                  className="toast-icon"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              </div>
            )}
          </div>

          {/* Texto */}

          {/* Texto */}
          <div className='toast-textos'>
            <span className='toast-label'>
              {notificacion.titulo.toUpperCase()}
            </span>

            <p className='toast-mensaje'>
              {notificacion.mensaje}
            </p>
          </div>

          <div className='toast-acento' />

        </div>
      )}
    </NotificacionContext.Provider>
  );
};