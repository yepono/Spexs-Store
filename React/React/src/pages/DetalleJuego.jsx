import { useParams, useNavigate } from 'react-router-dom'
import { JUEGOS } from '../data/juegos'
import './DetalleJuego.css'

function DetalleJuego() {
  const { id } = useParams()
  const navigate = useNavigate()

  const juego = JUEGOS.find((j) => j.id === id)

  if (!juego) {
    return (
      <div className="detalle-container">
        <div className="detalle-card error">
          <h2> Juego no encontrado</h2>
          <button onClick={() => navigate('/catalogo')} className="btn-back-link">
            ← Volver al Catálogo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <button onClick={() => navigate('/catalogo')} className="btn-back-link">
          ← Volver al Catálogo
        </button>

        <div className="detalle-content">
          <div className="detalle-portada-wrapper">
            <img src={juego.portada} alt={juego.nombre} className="detalle-portada-img" />
          </div>
          <div className="detalle-info">
            <div className="badge-row">
              <span className="badge-id">ID: #{juego.id}</span>
              <span className="badge-cat">{juego.categoria}</span>
            </div>
            <h1>{juego.nombre}</h1>
            <p className="detalle-desc">{juego.descripcion}</p>
            <div className="precio-box">
              <span className="label-precio">Precio oficial:</span>
              <span className="val-precio">{juego.precio}</span>
            </div>
            <button className="btn-comprar" onClick={() => alert(`¡Añadido ${juego.nombre} al carrito!`)}>
               Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleJuego