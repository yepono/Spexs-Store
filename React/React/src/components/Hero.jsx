import { useState, useEffect } from 'react'
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
          <span className="hero-badge">OFERTA ESPECIAL - {juegoActual.descuento}</span>
          <h1 className="hero-title">{juegoActual.nombre}</h1>
          <p className="hero-desc">{juegoActual.descripcion_corta}</p>
          
          <div className="hero-meta">
            <span>Lanzamiento: {juegoActual.fecha_lanzamiento}</span>
            <span>Compañía: {juegoActual.compania}</span>
          </div>

          <div className="hero-precio">
            {juegoActual.precio}
          </div>
        </div>
      </div>

      <button className="hero-nav prev" onClick={prevSlide}>❮</button>
      <button className="hero-nav next" onClick={nextSlide}>❯</button>
    </div>
  )
}

export default Hero