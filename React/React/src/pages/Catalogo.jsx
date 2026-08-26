import { useState, useMemo } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { JUEGOS, CATEGORIAS } from '../data/juegos'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import CarritoSidebar from '../components/CarritoSidebar'
import { useCarrito } from '../context/CarritoContext'
import { useNotificacion } from '../context/NotificacionContext'

import './Catalogo.css'

function Catalogo() {
  const [sidebarAbierto, setSidebarAbierto] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [filtroAbierto, setFiltroAbierto] =useState(null)

  const { agregarAlCarrito } = useCarrito();
  const { mostrarNotificacion } = useNotificacion();

  const toggleSidebar = () => setSidebarAbierto((prev) => !prev)

  const toggleFiltro = (filtro) => {
    setFiltroAbierto((actual) => actual === filtro ? null : filtro)
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

  const handleAgregarAlCarrito = (juego, porcentaje) => {
    // Se toma por default la primera versión, si existe
    const versionBase = juego.versiones && juego.versiones.length > 0
      ? juego.versiones[0]
      : { nombre: 'Estándar', precio: juego.precio, descuento: juego.descuento };

    // Si estamos en la categoría de ofertas y aplica un descuento forzado, lo tomamos
    const descuentoFinal = porcentaje > 0 ? `${porcentaje}%` : versionBase.descuento;

    const itemParaCarrito = {
      ...juego,
      version: versionBase.nombre,
      precioReal: versionBase.precio,
      descuentoReal: descuentoFinal
    };

    agregarAlCarrito(itemParaCarrito);
    mostrarNotificacion(
      'Carrito actualizado',
      `Se añadió ${juego.nombre} - ${versionBase.nombre}`,
      juego.imagenes?.logo
    );
  };

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
          
          <h1>
            Catálogo de Videojuegos
          </h1>

          <p>
            {categoriaActiva === 'Todos'
              ? 'Explora toda nuestra colección'
              : `Categoría: ${categoriaActiva}`}
            {' · '}
          </p>

          <div className='catalogo-filtros'>

            {/* Buscador */}
            <div className='filtro-busqueda'>
              <span className='filtro-icono'>⌕</span>
              <input
                type='text'
                placeholder='Buscar...'
              />
            </div>

            {/* Categoria */}
            <div className='filtro-dropdown'>

              <button
                className={`filtro-btn ${filtroAbierto === 'categoria' ? 'activo' : ''}`}
                onClick={() => toggleFiltro('categoria')}
              >
                Categoría
                <span className='filtro-chevron'>
                  {filtroAbierto === 'categoria' ? '▲' : '▼'}
                </span>
              </button>

              {filtroAbierto === 'categoria' && (
                <div className='filtro-menu'>
                  <button className='filtro-opcion seleccionada'>
                    Todos
                  </button>

                  <button className="filtro-opcion">
                    <span></span>
                    Acción
                  </button>

                  <button className="filtro-opcion">
                    <span></span>
                    Aventura
                  </button>

                  <button className="filtro-opcion">
                    <span></span>
                    RPG
                  </button>

                  <button className="filtro-opcion">
                    <span></span>
                    Deportes
                  </button>

                  <button className="filtro-opcion">
                    <span></span>
                    Estrategia
                  </button>
                </div>
              )}

            </div>

            {/* Plataforma */}

            <div className='filtro-dropdown'>

              <button
                className={`filtro-btn ${filtroAbierto === 'plataforma' ? 'activo' : ''}`}
                onClick={() => toggleFiltro('plataforma')}
              >
                Plataforma
                <span className='filtro-chevron'>
                  {filtroAbierto === 'plataforma' ?  '▲' : '▼'}
                </span>
              </button>

              {filtroAbierto === 'plataforma' && (
                <div className='filtro-menu'>
                  <button className='filtro-opcion seleccionada'>
                    Todas
                  </button>
                  <button className='filtro-opcion'>
                    <span></span>
                    PC
                  </button>
                  <button className='filtro-opcion'>
                    <span></span>
                    PayStation
                  </button>
                  <button className='filtro-opcion'>
                    <span></span>
                    Xbox
                  </button>
                  <button className='filtro-opcion'>
                    <span></span>
                    Nintendo Switch
                  </button>
                </div>
              )}

            </div>

            {/* Precio */}
            <div className='filtro-dropdown'>
              <button
                className={`filtro-btn ${filtroAbierto === 'precio' ? 'activo' : ''}`}
                onClick={() => toggleFiltro('precio')}
              >
                <span></span>
                Precio
                <span className='filtro-chevron'>
                  {filtroAbierto === 'precio' ? '▲' : '▼' }
                </span>
              </button>

              {filtroAbierto === 'precio' && (
                <div className='filtro-menu'>

                  <button className='filtro-opcion seleccionada'>
                    Cualquier precio
                  </button>

                  <button className='filtro-opcion'>
                    <span></span>
                    Menos de $500
                  </button>

                  <button className='filtro-opcion'>
                    <span></span>
                    $500 - $1,000
                  </button>
                  <button className='filtro-opcion'>
                    <span></span>
                    $1,000 - $1,500
                  </button>
                  <button className='filtro-opcion'>
                    <span></span>
                    Más de $1,500
                  </button>

                </div>
              )}
            </div>

            {/* Ofertas */}
            <div className='filtro-dropdown ordenar'>

            </div>

            <button className='filtro-btn'>
              Plataforma
              <span>⌄</span>
            </button>

            <button className='filtro-btn'>
              Precio
              <span>⌄</span>
            </button>

            <button className='filtro-btn filtro-ofertas'>
              Ofertas
            </button>

            <button className='ordenar-btn'>
              Ordernar: <strong>Relevancia</strong>
              <span>⌄</span>
            </button>
          </div>

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
                      <button className="btn-add-cart" onClick={() => handleAgregarAlCarrito(juego, porcentaje)}>
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

      <CarritoSidebar />
      <Outlet />
    </div>
  )
}

export default Catalogo