import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { JUEGOS } from '../data/juegos'
import { useCarrito } from '../context/CarritoContext'
import { useNotificacion } from '../context/NotificacionContext'
import './Hero.css'

function Hero() {
  const juegosEnOferta = JUEGOS.filter((juego) => juego.descuento)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const { agregarAlCarrito } = useCarrito()
  const { mostrarNotificacion } = useNotificacion()

  useEffect(() => {
    if (juegosEnOferta.length === 0) return
    const interval = setInterval(() => {
      cambiarSlide((currentIndex + 1) % juegosEnOferta.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [currentIndex, juegosEnOferta.length])

  if (juegosEnOferta.length === 0) return null

  const juegoActual = juegosEnOferta[currentIndex]

  const cambiarSlide = (nuevoIndex) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(nuevoIndex)
      setAnimating(false)
    }, 300)
  }

  const obtenerPrecios = (precioVal, descuentoVal) => {
    if (!precioVal) return { tieneDescuento: false, precioOriginal: '' }
    const precioStr = String(precioVal)
    const descuentoStr = descuentoVal != null ? String(descuentoVal) : '0'
    const precioBase = parseFloat(precioStr.replace(/[^0-9.]/g, ''))
    const porcentaje = parseFloat(descuentoStr.replace(/[^0-9.]/g, ''))
    if (isNaN(precioBase) || isNaN(porcentaje) || porcentaje === 0) {
      return { tieneDescuento: false, precioOriginal: precioStr }
    }
    const precioFinal = (precioBase * (1 - porcentaje / 100)).toFixed(0)
    return {
      tieneDescuento: true,
      precioOriginal: `$${precioBase.toLocaleString('es-MX')} MXN`,
      precioFinal: `$${parseFloat(precioFinal).toLocaleString('es-MX')} MXN`
    }
  }

  const datosPrecio = obtenerPrecios(juegoActual.precio, juegoActual.descuento)

  const handleAgregarCarrito = () => {
    const versionBase = juegoActual.versiones?.[0] ?? {
      nombre: 'Estándar', precio: juegoActual.precio, descuento: juegoActual.descuento
    }
    agregarAlCarrito({
      ...juegoActual,
      version: versionBase.nombre,
      precioReal: versionBase.precio,
      descuentoReal: versionBase.descuento
    })
    mostrarNotificacion(
      'Se agregó al carrito',
      `${juegoActual.nombre} — ${versionBase.nombre}`,
      juegoActual.imagenes?.logo
    )
  }

  return (
    <div
      className={`hero-container ${animating ? 'hero-fade-out' : 'hero-fade-in'}`}
      style={{ backgroundImage: `url(${juegoActual.imagenes?.hero || juegoActual.imagen_juego})` }}
    >
      {/* Gradientes de overlay */}
      <div className="hero-overlay-bottom" />
      <div className="hero-overlay-left" />

      {/* Cuerpo del contenido */}
      <div className="hero-body">

        {/* Columna izquierda — info del juego */}
        <div className="hero-info">
          <span className="hero-badge">
            -{typeof juegoActual.descuento === 'number' ? `${juegoActual.descuento}%` : juegoActual.descuento} · Oferta Especial
          </span>
          <h1 className="hero-title">{juegoActual.nombre}</h1>
          <p className="hero-desc">{juegoActual.descripcion_corta}</p>
          <div className="hero-meta">
            <span>{juegoActual.compania}</span>
            <span className="hero-meta-dot">·</span>
            <span>{juegoActual.fecha_lanzamiento}</span>
          </div>
        </div>

        {/* Columna derecha — precio + botones */}
        <div className="hero-actions">
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
          <Link to={`/catalogo/juego/${juegoActual.id}`} className="hero-btn-primary">
            Ver Página Completa
          </Link>
          <button className="hero-btn-secondary" onClick={handleAgregarCarrito}>
            Añadir al Carrito
          </button>
        </div>

      </div>

      {/* Miniaturas de navegación */}
      <div className="hero-thumbs">
        {juegosEnOferta.map((juego, index) => (
          <button
            key={juego.id}
            className={`hero-thumb ${index === currentIndex ? 'activa' : ''}`}
            onClick={() => cambiarSlide(index)}
            aria-label={juego.nombre}
          >
            <img
              src={juego.imagenes?.poster || juego.imagen_juego}
              alt={juego.nombre}
              className="hero-thumb-img"
            />
            <div className="hero-thumb-overlay" />
            {index === currentIndex && <div className="hero-thumb-barra" />}
          </button>
        ))}
      </div>

      {/* Flechas de navegación */}
      <button className="hero-nav prev" onClick={() => cambiarSlide(currentIndex === 0 ? juegosEnOferta.length - 1 : currentIndex - 1)}>❮</button>
      <button className="hero-nav next" onClick={() => cambiarSlide((currentIndex + 1) % juegosEnOferta.length)}>❯</button>
    </div>
  )
}

export default Hero