import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const savedUser = localStorage.getItem('gamestore_user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      // Elimina los 2 juegos viejos de prueba si siguen en el storage
      const comprasLimpias = (parsed.compras || []).filter(
        (j) => j.id !== 'uncharted-4' && j.id !== 'elden-ring'
      );
      return { ...parsed, compras: comprasLimpias };
    }
    return {
      nombre: 'Emiliano Flores',
      email: 'emiliano@ejemplo.com',
      compras: [] // Inicialmente vacío
    };
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('gamestore_user', JSON.stringify(usuario));
    } else {
      localStorage.removeItem('gamestore_user');
    }
  }, [usuario]);

  const iniciarSesion = (datos) => {
    const nuevoUsuario = {
      nombre: datos.nombre || 'Emiliano Flores',
      email: datos.email || 'emiliano@ejemplo.com',
      compras: usuario?.compras || []
    };
    setUsuario(nuevoUsuario);
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  const agregarCompras = (nuevosJuegos) => {
    if (!usuario) return;

    setUsuario((prev) => {
      const juegosExistentes = prev?.compras || [];
      const juegosFiltrados = nuevosJuegos.filter(
        (nuevo) => !juegosExistentes.some((item) => item.id === nuevo.id)
      );

      return {
        ...prev,
        compras: [...juegosExistentes, ...juegosFiltrados]
      };
    });
  };

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion, agregarCompras }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 