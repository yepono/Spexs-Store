import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { JUEGOS } from '../data/juegos'
import './Hero.css'

function Hero() {
  // Filtramos solo los juegos que tienen descuento
  const juegosEnOferta = JUEGOS.filter((juego) => juego.descuento)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cambio automático de slide cada 6 segundos
  useEffect(() => {
    if (juegosEnOferta.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % juegosEnOferta.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [juegosEnOferta.length])

  if (juegosEnOferta.length === 0) return null

  const juegoActual = juegosEnOferta[currentIndex]

  // Función segura para calcular el precio final
  const obtenerPrecios = (precioVal, descuentoVal) => {
    if (precioVal === undefined || precioVal === null) {
      return { tieneDescuento: false, precioOriginal: '' }
    }
    
    // Convertimos siempre a String para evitar fallos si viene como Number
    const precioStr = String(precioVal)
    const descuentoStr = descuentoVal !== undefined && descuentoVal !== null ? String(descuentoVal) : '0'

    const precioBase = parseFloat(precioStr.replace(/[^0-9.]/g, ''))
    const porcentaje = parseFloat(descuentoStr.replace(/[^0-9.]/g, ''))

    if (isNaN(precioBase) || isNaN(porcentaje) || porcentaje === 0) {
      return { tieneDescuento: false, precioOriginal: precioStr }
    }

    const precioFinal = (precioBase * (1 - porcentaje / 100)).toFixed(1)
    return {
      tieneDescuento: true,
      precioOriginal: `$${precioBase.toLocaleString()} MXN`,
      precioFinal: `$${parseFloat(precioFinal).toLocaleString()} MXN`
    }
  }

  const datosPrecio = obtenerPrecios(juegoActual.precio, juegoActual.descuento)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? juegosEnOferta.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % juegosEnOferta.length)
  }

  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${juegoActual.imagen_juego})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-badge">
            OFERTA ESPECIAL - {typeof juegoActual.descuento === 'number' ? `${juegoActual.descuento}%` : juegoActual.descuento}
          </span>
          <h1 className="hero-title">{juegoActual.nombre}</h1>
          <p className="hero-desc">{juegoActual.descripcion_corta}</p>
          
          <div className="hero-meta">
            <span>Lanzamiento: {juegoActual.fecha_lanzamiento}</span>
            <span>Compañía: {juegoActual.compania}</span>
          </div>

          <div className="hero-precio-container">
            {datosPrecio.tieneDescuento ? (
              <>
                <span className="hero-precio-original">{datosPrecio.precioOriginal}</span>
                <span className="hero-precio-descuento">{datosPrecio.precioFinal}</span>
              </>
            ) : (
              <span className="hero-precio-descuento">{juegoActual.precio}</span>
            )}
          </div>

          <Link
            to={`/catalogo/juego/${juegoActual.id}`}
            className="hero-btn-detalle"
          >
            Ver Página Completa
          </Link>
        </div>
      </div>

      <button className="hero-nav prev" onClick={prevSlide}>❮</button>
      <button className="hero-nav next" onClick={nextSlide}>❯</button>
    </div>
  )
}

export default Hero