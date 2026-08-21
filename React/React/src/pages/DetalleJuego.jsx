import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { JUEGOS } from '../data/juegos'
import './DetalleJuego.css'

function DetalleJuego() {
  const { id } = useParams()
  const navigate = useNavigate()

  const calcularPrecioFinal = (precioStr, descuentoStr) => {
    if (!descuentoStr)
      return precioStr

    const precioNum = parseFloat(precioStr.replace('$', '').replace(' MXN', '').replace(',', ''));
    const descuentoNum = parseFloat(descuentoStr.replace('%', ''));
    const precioFinal = precioNum * (1 - descuentoNum / 100);
    return `$${precioFinal.toLocaleString('es-MX')} MXN`;

  }
  
  // Estado para controlar la visibilidad de los detalles extra
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  const juego = JUEGOS.find((j) => j.id === id)

  if (!juego) {
    return (
      <div className="detalle-container">
        <div className="detalle-card error">
          <h2>Juego no encontrado</h2>

          <button
            onClick={() => navigate('/catalogo')}
            className="btn-back-link"
          >
            ← Volver al Catálogo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="detalle-container">
      <div className="detalle-card">

        {/* Botón regresar */}
        <button
          onClick={() => navigate('/catalogo')}
          className="btn-back-link"
          aria-label="Volver al catálogo"
          title="Volver al catálogo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            aria-hidden="true"
          >
            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
          </svg>
        </button>

        <div className="detalle-content">

          {/* --- INFORMACIÓN DEL JUEGO --- */}
          <div className="detalle-info">

            <div
              className="detalle-header-visual"
              style={{ backgroundImage: `url(${juego.imagen_juego})` }}
            >
              <div className="detalle-header-overlay"/>

              <div className="detalle-header-texto">

                <h1>{juego.nombre}</h1>
                <div className="detalle-subinfo">
                  <span>{juego.categoria}</span>
                  <span>•</span>
                  <span>{juego.compania}</span>
                </div>

              </div>

            </div>

            <div className="detalle-descripcion">
              <h3>Descripción</h3>

              <p>
                {juego.descripcion_larga}
              </p>
              
              {/* Botón de Ver Más */}
              <button 
                className="btn-ver-mas"
                onClick={() => setMostrarDetalles(!mostrarDetalles)}
              >
                {mostrarDetalles ? 'Ocultar detalles' : 'Ver más detalles'}
              </button>
            </div>

            <div className={`detalles-extra-wrapper ${mostrarDetalles ? 'abierto' : ''}`}>
              <div className="detalles-extra-inner">
                
                <div className="detalle-separador" />

                {/* Datos adicionales */}
                <div className="detalle-datos">
                  <div className="dato-item">
                    <span className="dato-label">Clasificación</span>
                    <span className="dato-valor badge-clasificacion">
                      {juego.clasificacion_edad}
                    </span>
                  </div>

                  <div className="dato-item">
                    <span className="dato-label">Lanzamiento</span>
                    <span className="dato-valor">
                      {juego.fecha_lanzamiento}
                    </span>
                  </div>

                  <div className="dato-item">
                    <span className="dato-label">Compañía</span>
                    <span className="dato-valor">
                      {juego.compania}
                    </span>
                  </div>

                  <div className="dato-item">
                    <span className="dato-label">Requerimientos</span>
                    <span className="dato-valor">
                      {juego.requerimientos_minimos}
                    </span>
                  </div>
                </div>

                {/* Etiquetas */}
                {juego.etiquetas && juego.etiquetas.length > 0 && (
                  <div className="detalle-tags">
                    <span className="dato-label">Etiquetas</span>
                    <div className="tags-list">
                      {juego.etiquetas.map((etiqueta, index) => (
                        <span className="tag" key={index}>
                          {etiqueta}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* --- PORTADA Y COMPRA --- */}
          <div className="detalle-compra">

            <div className="detalle-portada-wrapper">
              <img
                src={juego.imagen_juego}
                alt={juego.nombre}
                className="detalle-portada-img"
              />
            </div>

            <div className="precio-box">

              <span className="label-precio">Precio</span>

              <div className="precio-contenedor">

                <div className="precio-valores">
                  {juego.descuento && (
                    <span className="val-precio-original">
                      {juego.precio}
                    </span>
                  )}
                  <span className="val-precio">
                    {juego.descuento ? calcularPrecioFinal(juego.precio, juego.descuento) : juego.precio}
                  </span>
                </div>

                {juego.descuento && (
                  <span className="badge-descuento">
                    {juego.descuento}
                  </span>
                )}

              </div>
            </div>

            <button
              className="btn-comprar"
              onClick={() =>
                alert(`¡Añadido ${juego.nombre} al carrito!`)
              }
            >
              Agregar al carrito
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default DetalleJuego