import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';
import './Biblioteca.css';

export default function Biblioteca() {
  const navigate = useNavigate();
  const { usuario, cerrarSesion } = useAuth();

  const [juegosComprados, setJuegosComprados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerInventario = async () => {
      if (!usuario) {
        setCargando(false);
        return;
      }

      // Join entre compras y juegos
      const { data, error } = await supabase
        .from('compras')
        .select(`
          fecha_compra,
          version_comprada,
          juegos (
            id,
            nombre,
            imagenes,
            imagen_juego
          )
        `)
        .eq('usuario_id', usuario.id)
        .order('fecha_compra', { ascending: false });

      if (!error && data) {
        const inventario = data.map(item => ({
          id: item.juegos.id,
          titulo: item.juegos.nombre,
          imagen: item.juegos.imagenes?.poster || item.juegos.imagen_juego,
          fechaCompra: item.fecha_compra,
          version: item.version_comprada,
          horasJugadas: '0.0 hrs'
        }));
        setJuegosComprados(inventario);
      }
      setCargando(false);
    };

    obtenerInventario();
  }, [usuario]);


  const avatarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '30px',
    padding: '4px',
    cursor: 'pointer',
    overflow: 'hidden',
    width: '48px',
    height: '48px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box'
  };

  const handleAvatarHover = (e) => {
    e.currentTarget.style.width = '110px';
    e.currentTarget.style.background = '#334155';
    e.currentTarget.style.borderColor = '#ef4444';
    e.currentTarget.querySelector('.btn-logout-text').style.opacity = '1';
    e.currentTarget.querySelector('.btn-logout-text').style.transform = 'translateX(0)';
  };

  const handleAvatarLeave = (e) => {
    e.currentTarget.style.width = '48px';
    e.currentTarget.style.background = '#1e293b';
    e.currentTarget.style.borderColor = '#334155';
    e.currentTarget.querySelector('.btn-logout-text').style.opacity = '0';
    e.currentTarget.querySelector('.btn-logout-text').style.transform = 'translateX(-10px)';
  };

  if (cargando) {
    return <div className="biblioteca-page"><h2 style={{ color: '#94a3b8', textAlign: 'center', paddingTop: '150px' }}>Cargando biblioteca...</h2></div>;
  }

  return (
    <div className="biblioteca-page">
      <header className="biblioteca-topbar">
        <button className="btn-back" onClick={() => navigate('/catalogo')}>
          ← Volver al Catálogo
        </button>

        {/* Componente de Perfil*/}
        {usuario && (
          <div
            style={avatarContainerStyle}
            onClick={() => { cerrarSesion(); navigate('/catalogo'); }}
            onMouseEnter={handleAvatarHover}
            onMouseLeave={handleAvatarLeave}
            title="Cerrar sesión"
          >
            <img
              src={usuario.avatar_url || 'https://via.placeholder.com/150'}
              alt={usuario.nombre}
              style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <span
              className="btn-logout-text"
              style={{ color: '#ef4444', fontWeight: 700, fontSize: '14px', paddingLeft: '12px', opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}
            >
              Salir
            </span>
          </div>
        )}
      </header>

      <div className="biblioteca-container">
        <div className="biblioteca-header-title">
          <h1>Mis Compras / Biblioteca</h1>
          <p>Tus juegos adquiridos listos para jugar</p>
        </div>

        {juegosComprados.length === 0 ? (
          <div className="biblioteca-empty-card">
            <div className="empty-icon">🎮</div>
            <h2>Aún no tienes juegos en tu biblioteca</h2>
            <p>Explora la tienda y añade juegos a tu colección.</p>
            <button className="btn-primary" onClick={() => navigate('/catalogo')}>
              Explorar Tienda
            </button>
          </div>
        ) : (
          <div className="biblioteca-grid">
            {juegosComprados.map((juego) => (
              <div key={`${juego.id}-${juego.version}`} className="juego-library-card">
                <div className="card-image-wrapper">
                  <img src={juego.imagen} alt={juego.titulo} />
                  <span className="badge-status">Listo para jugar</span>
                </div>
                <div className="card-info">
                  <h3>{juego.titulo}</h3>
                  <div className="card-meta">
                    <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>
                      Versión: {juego.version}
                    </span>
                    <span>Comprado: {juego.fechaCompra || 'Recientemente'}</span>
                    {juego.horasJugadas && <span>• {juego.horasJugadas}</span>}
                  </div>
                  <button className="btn-play">▶ Jugar Ahora</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}