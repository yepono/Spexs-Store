import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { JUEGOS, CATEGORIAS } from '../data/juegos'
import Sidebar from '../components/Sidebar'
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
    <div className="catalogo-container">
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

      <header className="catalogo-header">
        <h1> Catálogo de Videojuegos</h1>
        <div className="carrito-badge">
           Carrito: <span className="cart-count">{carritoCount}</span>
        </div>
        <p>
          {categoriaActiva === 'Todos'
            ? 'Mostrando todos los juegos'
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
                  <img src={juego.portada} alt={juego.nombre} className="juego-portada-img" />
                </div>
                <div className="front-title-box">
                  <span className="juego-id">#{juego.id}</span>
                  <h3>{juego.nombre}</h3>
                </div>
              </div>

              {/* Cara Trasera de la Carta */}
              <div className="flip-card-back">
                <span className="juego-categoria">{juego.categoria}</span>
                <h3>{juego.nombre}</h3>
                <p className="juego-desc">{juego.descripcion}</p>
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
      </div>
    </div>
  )
}

export default Catalogo
