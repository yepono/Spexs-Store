import { useState, useMemo } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { JUEGOS, CATEGORIAS } from '../data/juegos'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero' 

import './Catalogo.css'

function Catalogo() {
  const [carritoCount, setCarritoCount] = useState(0)
  const [sidebarAbierto, setSidebarAbierto] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const toggleSidebar = () => setSidebarAbierto((prev) => !prev)

  const agregarAlCarrito = (nombre) => {
    setCarritoCount((prev) => prev + 1)
    alert(`¡"${nombre}" fue añadido al carrito!`)
  }

  const esCategoriaOfertas = categoriaActiva === 'Ofertas' || categoriaActiva === 'Ofertas Especiales'

  const juegosFiltrados = useMemo(() => {
    if (categoriaActiva === 'Todos') return JUEGOS
    
    if (esCategoriaOfertas) {
      return JUEGOS.filter((j) => (j.descuento && j.descuento > 0) || j.oferta === true)
    }

    return JUEGOS.filter((j) => j.categoria === categoriaActiva)
  }, [categoriaActiva, esCategoriaOfertas])

  const seleccionarCategoria = (cat) => {
    setCategoriaActiva(cat)
    setSidebarAbierto(false)
  }

  // Función helper para calcular el precio final
  const obtenerPrecioConDescuento = (precioString, porcentajeDescuento) => {
    // Extrae solo los dígitos del string (ej: "$1,299 MXN" -> 1299)
    const numeroLimpio = parseFloat(precioString.replace(/[^0-9.-]+/g, ''))
    if (isNaN(numeroLimpio)) return { precioFinal: precioString, precioOriginal: precioString }

    const precioCalculado = numeroLimpio * (1 - porcentajeDescuento / 100)
    
    // Formatea el nuevo precio con comas y decimales
    const formatoFinal = `$${precioCalculado.toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} MXN`
    
    return {
      precioFinal: formatoFinal,
      precioOriginal: precioString
    }
  }

  return (
    <div className="catalogo-page">
      <Sidebar
        abierto={sidebarAbierto}
        onToggle={toggleSidebar}
        onCerrar={() => setSidebarAbierto(false)}
        categorias={CATEGORIAS}
        categoriaActiva={categoriaActiva}
        onSeleccionar={seleccionarCategoria}
      />

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
          {juegosFiltrados.map((juego) => {
            const tieneOferta = (juego.descuento && juego.descuento > 0) || juego.oferta === true;
            const porcentaje = juego.descuento || (juego.oferta ? 20 : 0);
            
            const { precioFinal, precioOriginal } = tieneOferta 
              ? obtenerPrecioConDescuento(juego.precio, porcentaje)
              : { precioFinal: juego.precio, precioOriginal: juego.precio };

            return (
              <div key={juego.id} className="flip-card">
                <div className="flip-card-inner">

                  {/* Frente de la tarjeta */}
                  <div className="flip-card-front">
                    {esCategoriaOfertas && tieneOferta && (
                      <div className="ribbon-oferta">
                        <span>-{porcentaje}%</span>
                      </div>
                    )}

                    <div className="juego-portada-wrapper">
                      <img src={juego.imagen_juego} alt={juego.nombre} className="juego-portada-img" />
                    </div>
                    <div className="front-title-box">
                      <span className="juego-id">#{juego.id}</span>
                      <h3>{juego.nombre}</h3>
                    </div>
                  </div>

                  {/* Reverso de la tarjeta */}
                  <div className="flip-card-back">
                    <span className="juego-compania">{juego.compania}</span>
                    <h3>{juego.nombre}</h3>
                    <p className="juego-desc">{juego.descripcion_corta}</p>
                    <span className="juego-fecha">Lanzamiento: {juego.fecha_lanzamiento}</span>

                    {/* Precios: Muestra el precio tachado y el precio final con descuento */}
                    <div className="juego-precio-container">
                      {tieneOferta ? (
                        <>
                          <span className="precio-original-tachado">{precioOriginal}</span>
                          <span className="juego-precio oferta">{precioFinal}</span>
                        </>
                      ) : (
                        <span className="juego-precio">{juego.precio}</span>
                      )}
                    </div>

                    <div className="back-actions">
                      <button className="btn-add-cart" onClick={() => agregarAlCarrito(juego.nombre)}>
                        Añadir al Carrito
                      </button>
                      <Link to={`/catalogo/juego/${juego.id}`} className="btn-detalle">
                        Ver Página Completa →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}

          {juegosFiltrados.length === 0 && (
            <p className="sin-resultados">No hay juegos en esta categoría todavía.</p>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Catalogo