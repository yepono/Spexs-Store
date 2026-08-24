import { createContext, useState, useContext, useCallback } from 'react';
import './Notificacion.css';

const NotificacionContext = createContext();

export const useNotificacion = () => {
  return useContext(NotificacionContext);
};

export const NotificacionProvider = ({ children }) => {
  const [notificacion, setNotificacion] = useState(null);

  const mostrarNotificacion = useCallback((titulo, mensaje) => {
    setNotificacion({ titulo, mensaje });

    setTimeout(() => {
      // Primero disparamos la animación de salida
      setNotificacion((prev) => prev ? { ...prev, saliendo: true } : null);
      
      // Luego desmontamos el componente
      setTimeout(() => setNotificacion(null), 300);
    }, 3000);
  }, []);

  return (
    <NotificacionContext.Provider value={{ mostrarNotificacion }}>
      {children}
      
      {notificacion && (
        <div className={`toast-notificacion ${notificacion.saliendo ? 'saliendo' : ''}`}>
          
          <div className="toast-icon-wrapper">
            <svg className="toast-icon" fill="currentColor" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
          </div>

          <div className="toast-textos">
            <p className="toast-titulo">{notificacion.titulo}</p>
            <p className="toast-mensaje">{notificacion.mensaje}</p>
          </div>

        </div>
      )}
    </NotificacionContext.Provider>
  );
};