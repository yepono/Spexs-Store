import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { JUEGOS, CATEGORIAS } from '../data/juegos'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero' // Importación del nuevo Hero
import './Catalogo.css'

function Catalogo() {
  const [carritoCount, setCarritoCount] = useState(0)
  const [sidebarAbierto, setSidebarAbierto] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const agregarAlCarrito = (nombre) => {
    setCarritoCount((prev) => prev + 1)
    alert(`¡"${nombre}" fue añadido al carrito! `)
  }

  const juegosFiltrados = useMemo(() => {
    if (categoriaActiva === 'Todos') return JUEGOS
    return JUEGOS.filter((j) => j.categoria === categoriaActiva)
  }, [categoriaActiva])

  const seleccionarCategoria = (cat) => {
    setCategoriaActiva(cat)
    setSidebarAbierto(false)
  }

  return (
    <div className="catalogo-page">
      {/* Botón hamburguesa */}
      <button
        className={`hamburguesa-btn ${sidebarAbierto ? 'abierto' : ''}`}
        onClick={() => setSidebarAbierto((prev) => !prev)}
        aria-label="Abrir menú de categorías"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú lateral de categorías */}
      <Sidebar
        abierto={sidebarAbierto}
        onCerrar={() => setSidebarAbierto(false)}
        categorias={CATEGORIAS}
        categoriaActiva={categoriaActiva}
        onSeleccionar={seleccionarCategoria}
      />

      {/* Renderizado del hero*/}
      {categoriaActiva === 'Todos' && <Hero />}

      <div className="catalogo-container">
        <header className="catalogo-header">
          <h1>Catálogo de Videojuegos</h1>
          <div className={`carrito-contenedor ${carritoCount > 0 ? 'lleno' : 'vacio'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={carritoCount > 0 ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icono-carrito"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {carritoCount > 0 && (
              <span className="cart-badge-number">{carritoCount}</span>
            )}
          </div>
          <p>
            {categoriaActiva === 'Todos'
              ? 'Explora toda nuestra colección'
              : `Categoría: ${categoriaActiva}`}
            {' · '}
            {juegosFiltrados.length} {juegosFiltrados.length === 1 ? 'juego' : 'juegos'}
          </p>
        </header>

        <div className="catalogo-grid">
          {juegosFiltrados.map((juego) => (
            <div key={juego.id} className="flip-card">
              <div className="flip-card-inner">

                {/* Cara Frontal de la Carta */}
                <div className="flip-card-front">
                  <div className="juego-portada-wrapper">
                    {/* Consumiendo la nueva propiedad imagen_juego */}
                    <img src={juego.imagen_juego} alt={juego.nombre} className="juego-portada-img" />
                  </div>
                  <div className="front-title-box">
                    <span className="juego-id">#{juego.id}</span>
                    <h3>{juego.nombre}</h3>
                  </div>
                </div>

                {/* Cara Trasera de la Carta */}
                <div className="flip-card-back">
                  {/* Nuevas propiedades: compania y descripcion_corta */}
                  <span className="juego-compania">{juego.compania}</span>
                  <h3>{juego.nombre}</h3>
                  <p className="juego-desc">{juego.descripcion_corta}</p>
                  <span className="juego-fecha">Lanzamiento: {juego.fecha_lanzamiento}</span>

                  <div className="juego-precio">{juego.precio}</div>

                  <div className="back-actions">
                    <button className="btn-add-cart" onClick={() => agregarAlCarrito(juego.nombre)}>
                      Añadir al Carrito
                    </button>
                    <Link to={`/juego/${juego.id}`} className="btn-detalle">
                      Ver Página Completa →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {juegosFiltrados.length === 0 && (
            <p className="sin-resultados">No hay juegos en esta categoría todavía.</p>
          )}
        </div><header className="catalogo-header">
          <h1>Catálogo de Videojuegos</h1>

          {/* NUEVO CONTENEDOR DEL CARRITO */}
          <div className={`carrito-contenedor ${carritoCount > 0 ? 'lleno' : 'vacio'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={carritoCount > 0 ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icono-carrito"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {carritoCount > 0 && (
              <span className="cart-badge-number">{carritoCount}</span>
            )}
          </div>
          {/* FIN DEL NUEVO CONTENEDOR */}

          <p>
            {categoriaActiva === 'Todos'
              ? 'Explora toda nuestra colección'
              : `Categoría: ${categoriaActiva}`}
            {' · '}
            {juegosFiltrados.length} {juegosFiltrados.length === 1 ? 'juego' : 'juegos'}
          </p>
        </header>
      </div>
    </div>
  )
}

export default Catalogo
