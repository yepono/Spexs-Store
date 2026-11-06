import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Revisar si ya hay una sesión activa al abrir la página
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) cargarPerfil(session.user.id);
      else setCargando(false);
    });

    // Escuchar cualquier cambio de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) cargarPerfil(session.user.id);
      else {
        setUsuario(null);
        setCargando(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const cargarPerfil = async (userId) => {
    try {
      // 1. Obtener datos del perfil
      const { data: perfil, error: perfilError } = await supabase
        .from('perfiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (perfilError) throw perfilError;

      // 2. Obtener el historial de compras del usuario
      const { data: comprasUsuario, error: comprasError } = await supabase
        .from('compras')
        .select('juego_id, version_comprada, fecha_compra')
        .eq('usuario_id', userId);

      if (comprasError) throw comprasError;

      if (perfil) {
        setUsuario({
          id: perfil.id,
          nombre: perfil.nombre,
          email: perfil.email,
          avatar_url: perfil.avatar_url,
          metodos_pago: perfil.metodos_pago || [],
          domicilio: perfil.domicilio || {},
          compras: comprasUsuario || []
        });
      }
    } catch (error) {
      console.error("Error al cargar el perfil:", error.message);
    } finally {
      setCargando(false);
    }
  };

  // Función para manejar el registro completo con archivo y JSON
  const registrarUsuarioCompleto = async (datosRegistro) => {
    const { email, password, nombre, archivoFoto, metodos_pago, domicilio } = datosRegistro;

    // A. Registrar en el sistema privado de Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
    if (authError) throw authError;

    if (authData.user?.identities?.length === 0) {
      throw new Error("Este correo ya se encuentra registrado. Por favor, inicia sesión.");
    }

    if (authData.user) {
      let finalAvatarUrl = null;

      // B. Si hay un archivo físico, subirlo al Storage
      if (archivoFoto) {
        const nombreArchivo = `${authData.user.id}-${Date.now()}-${archivoFoto.name}`;

        const { error: uploadError } = await supabase.storage
          .from('avatares')
          .upload(nombreArchivo, archivoFoto);

        if (!uploadError) {
          const { data: publicUrlData } = supabase.storage
            .from('avatares')
            .getPublicUrl(nombreArchivo);

          finalAvatarUrl = publicUrlData.publicUrl;
        }
      }

      // C. Insertar toda la información en la tabla perfiles
      const { error: insertError } = await supabase.from('perfiles').insert([
        {
          id: authData.user.id,
          nombre: nombre,
          email: email,
          avatar_url: finalAvatarUrl,
          metodos_pago: metodos_pago || [],
          domicilio: domicilio || {}
        }
      ]);

      if (insertError) throw insertError;
      await cargarPerfil(authData.user.id);
    }
  };

  const iniciarSesion = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const cerrarSesion = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      usuario,
      iniciarSesion,
      registrarUsuarioCompleto,
      cerrarSesion,
      cargando
    }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);