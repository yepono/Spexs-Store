import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Biblioteca.css';

export default function Biblioteca() {
  const navigate = useNavigate();
  const { usuario } = useAuth();

  const juegosComprados = usuario?.compras || [];

  return (
    <div className="biblioteca-page">
      <header className="biblioteca-topbar">
        <button className="btn-back" onClick={() => navigate('/catalogo')}>
          ← Volver al Catálogo
        </button>
        <div className="user-badge">
          <span>👤 {usuario?.nombre || 'Usuario'}</span>
        </div>
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
              <div key={juego.id} className="juego-library-card">
                <div className="card-image-wrapper">
                  <img src={juego.imagen} alt={juego.titulo} />
                  <span className="badge-status">Listo para jugar</span>
                </div>
                <div className="card-info">
                  <h3>{juego.titulo}</h3>
                  <div className="card-meta">
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