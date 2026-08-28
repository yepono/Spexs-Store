import { useState, useMemo, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CATEGORIAS } from '../data/juegos'
import { supabase } from '../supabaseClient'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import CarritoSidebar from '../components/CarritoSidebar'
import Footer from '../components/Footer'
import { useCarrito } from '../context/CarritoContext'
import { useNotificacion } from '../context/NotificacionContext'
import './Catalogo.css'

function Catalogo() {
  const [sidebarAbierto, setSidebarAbierto] = useState(false)
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [plataformaActiva, setPlataformaActiva] = useState('Todas')
  const [precioActivo, setPrecioActivo] = useState('Cualquier precio')
  const [ordenActivo, setOrdenActivo] = useState('Relevancia')
  const [soloOfertas, setSoloOfertas] = useState(false)
  const [filtroAbierto, setFiltroAbierto] = useState(null)

  const [juegosBD, setJuegosBD] = useState([])
  const [cargando, setCargando] = useState(true)

  const { carrito, agregarAlCarrito } = useCarrito();
  const { mostrarNotificacion } = useNotificacion();

  useEffect(() => {
    const cargarJuegos = async () => {
      const { data, error } = await supabase.from('juegos').select('*').order('id', { ascending: true });
      if (!error && data) setJuegosBD(data);
      setCargando(false);
    };
    cargarJuegos();
  }, []);

  const toggleSidebar = () => setSidebarAbierto((prev) => !prev)

  const toggleFiltro = (filtro) => {
    setFiltroAbierto((actual) => actual === filtro ? null : filtro)
  }

  const esCategoriaOfertas = categoriaActiva === 'Ofertas' || categoriaActiva === 'Ofertas Especiales' || soloOfertas

  const extraerPrecio = (precioString) => {
    if (!precioString) return 0;
    const numero = parseFloat(String(precioString).replace(/[^0-9.-]+/g, ''))
    return isNaN(numero) ? 0 : numero
  }

  const juegosFiltrados = useMemo(() => {
    let filtrados = [...juegosBD]

    if (categoriaActiva !== 'Todos' && !esCategoriaOfertas) {
      filtrados = filtrados.filter((j) => j.categoria === categoriaActiva)
    }

    if (esCategoriaOfertas) {
      filtrados = filtrados.filter((j) => (j.descuento && j.descuento > 0) || j.oferta === true)
    }

    if (plataformaActiva !== 'Todas') {
      filtrados = filtrados.filter((j) =>
        j.plataforma === plataformaActiva ||
        (j.plataformas && j.plataformas.includes(plataformaActiva)) ||
        (j.especificaciones?.os && j.especificaciones.os.includes(plataformaActiva))
      )
    }

    if (precioActivo !== 'Cualquier precio') {
      filtrados = filtrados.filter((j) => {
        const precio = extraerPrecio(j.precio)
        if (precioActivo === 'Menos de $500') return precio < 500
        if (precioActivo === '$500 - $1,000') return precio >= 500 && precio <= 1000
        if (precioActivo === '$1,000 - $1,500') return precio > 1000 && precio <= 1500
        if (precioActivo === 'Más de $1,500') return precio > 1500
        return true
      })
    }

    if (ordenActivo === 'Menor precio') {
      filtrados.sort((a, b) => extraerPrecio(a.precio) - extraerPrecio(b.precio))
    } else if (ordenActivo === 'Mayor precio') {
      filtrados.sort((a, b) => extraerPrecio(b.precio) - extraerPrecio(a.precio))
    } else if (ordenActivo === 'Alfabético (A-Z)') {
      filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre))
    }

    return filtrados
  }, [juegosBD, categoriaActiva, esCategoriaOfertas, plataformaActiva, precioActivo, ordenActivo])

  const seleccionarCategoria = (cat) => {
    setCategoriaActiva(cat)
    setSidebarAbierto(false)
  }

  const obtenerPrecioConDescuento = (precioString, porcentajeDescuento) => {
    const numeroLimpio = extraerPrecio(precioString)
    if (numeroLimpio === 0) return { precioFinal: precioString, precioOriginal: precioString }
    const precioCalculado = numeroLimpio * (1 - porcentajeDescuento / 100)
    const formatoFinal = `$${precioCalculado.toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} MXN`
    return { precioFinal: formatoFinal, precioOriginal: precioString }
  }

  const handleAgregarAlCarrito = (juego, porcentaje) => {
    const versionBase = juego.versiones && juego.versiones.length > 0
      ? juego.versiones[0]
      : { nombre: 'Estándar', precio: juego.precio, descuento: juego.descuento };

    const descuentoFinal = porcentaje > 0 ? `${porcentaje}%` : versionBase.descuento;

    const itemParaCarrito = {
      ...juego,
      version: versionBase.nombre,
      precioReal: versionBase.precio,
      descuentoReal: descuentoFinal
    };

    agregarAlCarrito(itemParaCarrito);
    mostrarNotificacion(
      'Se agregó al carrito',
      `Se añadió ${juego.nombre} - ${versionBase.nombre}`,
      juego.imagenes?.logo
    );
  };

  if (cargando) {
    return <div className="catalogo-page"><h2 style={{ color: '#94a3b8', textAlign: 'center', paddingTop: '150px' }}>Cargando catálogo...</h2></div>
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

      {categoriaActiva === 'Todos' && !soloOfertas && <Hero juegos={juegosBD} />}

      <div className="catalogo-container">
        <header className="catalogo-header">
          <h1>Catálogo de Videojuegos</h1>
          <p>
            {categoriaActiva === 'Todos'
              ? 'Explora toda nuestra colección'
              : `Categoría: ${categoriaActiva}`}
            {' · '} {juegosFiltrados.length} resultados
          </p>
        </header>

        <div className='filtros-sticky-wrapper'>
          <div className='catalogo-filtros'>
            <div className='filtro-busqueda'>
              <span className='filtro-icono'>⌕</span>
              <input type='text' placeholder='Buscar juego...' />
            </div>

            <button
              className={`filtro-btn ${filtroAbierto === 'categoria' ? 'activo' : ''}`}
              onClick={() => toggleFiltro('categoria')}
            >
              Categoría: <span>{categoriaActiva}</span>
            </button>

            <button
              className={`filtro-btn ${filtroAbierto === 'plataforma' ? 'activo' : ''}`}
              onClick={() => toggleFiltro('plataforma')}
            >
              Plataforma: <span>{plataformaActiva}</span>
            </button>

            <button
              className={`filtro-btn ${filtroAbierto === 'precio' ? 'activo' : ''}`}
              onClick={() => toggleFiltro('precio')}
            >
              Precio: <span>{precioActivo}</span>
            </button>

            <button
              className={`filtro-btn filtro-ofertas ${soloOfertas ? 'activo-oferta' : ''}`}
              onClick={() => setSoloOfertas(!soloOfertas)}
            >
              Ofertas
            </button>

            <div className="filtros-spacer"></div>

            <button
              className={`filtro-btn ordenar-btn ${filtroAbierto === 'ordenar' ? 'activo' : ''}`}
              onClick={() => toggleFiltro('ordenar')}
            >
              Ordenar: <strong>{ordenActivo}</strong>
            </button>
          </div>

          {filtroAbierto && (
            <div className="panel-filtros-expandido">
              {filtroAbierto === 'categoria' && (
                <div className="opciones-grid">
                  {['Todos', 'Acción', 'Aventura', 'RPG', 'Deportes', 'Estrategia'].map(cat => (
                    <button
                      key={cat}
                      className={`opcion-card ${categoriaActiva === cat ? 'activa' : ''}`}
                      onClick={() => { seleccionarCategoria(cat); setFiltroAbierto(null); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {filtroAbierto === 'plataforma' && (
                <div className="opciones-grid">
                  {['Todas', 'PC', 'PlayStation', 'Xbox', 'Nintendo Switch'].map(plat => (
                    <button
                      key={plat}
                      className={`opcion-card ${plataformaActiva === plat ? 'activa' : ''}`}
                      onClick={() => { setPlataformaActiva(plat); setFiltroAbierto(null); }}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              )}

              {filtroAbierto === 'precio' && (
                <div className="opciones-grid">
                  {['Cualquier precio', 'Menos de $500', '$500 - $1,000', '$1,000 - $1,500', 'Más de $1,500'].map(prec => (
                    <button
                      key={prec}
                      className={`opcion-card ${precioActivo === prec ? 'activa' : ''}`}
                      onClick={() => { setPrecioActivo(prec); setFiltroAbierto(null); }}
                    >
                      {prec}
                    </button>
                  ))}
                </div>
              )}

              {filtroAbierto === 'ordenar' && (
                <div className="opciones-grid">
                  {['Relevancia', 'Menor precio', 'Mayor precio', 'Alfabético (A-Z)'].map(ord => (
                    <button
                      key={ord}
                      className={`opcion-card ${ordenActivo === ord ? 'activa' : ''}`}
                      onClick={() => { setOrdenActivo(ord); setFiltroAbierto(null); }}
                    >
                      {ord}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

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
                  <div className="flip-card-front">
                    {tieneOferta && (
                      <div className="ribbon-oferta">
                        <span>-{porcentaje}%</span>
                      </div>
                    )}
                    <div className="juego-portada-wrapper">
                      <img src={juego.imagenes?.poster || juego.imagen_juego} alt={juego.nombre} className="juego-portada-img" />
                    </div>
                    <div className="front-title-box">
                      <span className="juego-id">#{juego.id}</span>
                      <h3>{juego.nombre}</h3>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <span className="juego-compania">{juego.compania}</span>
                    <h3>{juego.nombre}</h3>
                    <p className="juego-desc">{juego.descripcion_corta}</p>
                    <span className="juego-fecha">Lanzamiento: {juego.fecha_lanzamiento}</span>
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
            <div className="sin-resultados">
              <h3>No encontramos juegos con esos filtros</h3>
              <p>Intenta ajustar la plataforma o el rango de precio.</p>
              <button className="btn-add-cart" onClick={() => {
                setCategoriaActiva('Todos');
                setPlataformaActiva('Todas');
                setPrecioActivo('Cualquier precio');
                setSoloOfertas(false);
              }} style={{ marginTop: '15px', width: 'auto', padding: '10px 20px' }}>
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      <CarritoSidebar
        isOpen={carritoAbierto}
        onClose={() => setCarritoAbierto(false)}
      />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Catalogo