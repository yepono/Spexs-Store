import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { JUEGOS } from '../data/juegos'
import { useNotificacion } from '../context/NotificacionContext.jsx'
import { useCarrito } from '../context/CarritoContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase } from '../supabaseClient.js' 
import './DetalleJuego.css'

function DetalleJuego() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { mostrarNotificacion } = useNotificacion()
  const { agregarAlCarrito } = useCarrito()
  const { usuario } = useAuth()

  const juego = JUEGOS.find((j) => j.id === id)

  const calcularPrecioFinal = (precioStr, descuentoStr) => {
    if (!precioStr || precioStr === 'Gratis') return precioStr
    const precioNum = parseFloat(precioStr.replace('$', '').replace(' MXN', '').replace(',', ''))
    const descuentoNum = parseFloat(String(descuentoStr).replace('%', ''))
    if (isNaN(precioNum) || isNaN(descuentoNum)) return precioStr
    const precioFinal = precioNum * (1 - descuentoNum / 100)
    return `$${precioFinal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`
  }

  const [mostrarDetalles, setMostrarDetalles] = useState(false)
  const [versionSeleccionada, setVersionSeleccionada] = useState(0)
  const [esFavorito, setEsFavorito] = useState(false)

  // Estados para la base de datos
  const [comentarios, setComentarios] = useState([])
  const [textoComentario, setTextoComentario] = useState('')

  // Validar de forma correcta si el usuario tiene este juego exacto en su historial
  const haComprado = usuario?.compras?.some(compra => compra.juego_id === id)

  // 1. Obtener comentarios desde Supabase al cargar el juego
  useEffect(() => {
    const cargarComentarios = async () => {
      const { data, error } = await supabase
        .from('comentarios')
        .select(`
          id, fecha, version, texto, likes, liked_by,
          perfiles (nombre, avatar_url)
        `)
        .eq('juego_id', id)
        .order('fecha', { ascending: false }) 

      if (!error && data) {
        setComentarios(data)
      }
    }

    if (id) cargarComentarios()
  }, [id])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  const handleCerrarModal = (e) => {
    if (e.target === e.currentTarget) navigate('/catalogo')
  }

  const versiones = juego?.versiones?.length ? juego.versiones : [{ nombre: 'Juego Base', precio: juego?.precio, descuento: juego?.descuento }]
  const versionActual = versiones[versionSeleccionada] || versiones[0]

  if (!juego) {
    return (
      <div className="detalle-container">
        <div className="detalle-card error">
          <h2>Juego no encontrado</h2>
          <button onClick={() => navigate('/catalogo')} className="btn-back-link">← Volver al Catálogo</button>
        </div>
      </div>
    )
  }

  const handleAgregarCarrito = () => {
    const itemParaCarrito = {
      ...juego,
      version: versionActual.nombre,
      precioReal: versionActual.precio,
      descuentoReal: versionActual.descuento
    };
    agregarAlCarrito(itemParaCarrito);
    mostrarNotificacion('SE AGREGÓ AL CARRITO', `Añadiste ${juego.nombre} - ${versionActual.nombre}`, juego.imagenes?.logo);
  };

  const formatLabel = (key) => key.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase());

  // 2. Reaccionar a un comentario
  const handleReaccion = async (comentarioId) => {
    if (!usuario) {
      mostrarNotificacion('Acceso Denegado', 'Inicia sesión para reaccionar.');
      return;
    }

    const comentario = comentarios.find(c => c.id === comentarioId);
    if (!comentario) return;

    // Lógica para quitar o poner like usando el ID de usuario
    const yaDioLike = comentario.liked_by?.includes(usuario.id);
    const nuevosLikes = yaDioLike ? comentario.likes - 1 : comentario.likes + 1;
    const nuevoLikedBy = yaDioLike
      ? comentario.liked_by.filter(uid => uid !== usuario.id)
      : [...(comentario.liked_by || []), usuario.id];


    setComentarios(prev => prev.map(c =>
      c.id === comentarioId ? { ...c, likes: nuevosLikes, liked_by: nuevoLikedBy } : c
    ));


    const { error } = await supabase
      .from('comentarios')
      .update({ likes: nuevosLikes, liked_by: nuevoLikedBy })
      .eq('id', comentarioId);

    if (error) console.error("Error al actualizar like:", error.message);
  };

  // 3. Publicar un nuevo comentario
  const handlePublicarComentario = async (e) => {
    e.preventDefault();
    if (!usuario || !haComprado || !textoComentario.trim()) return;

    const fechaHoy = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

    const nuevoRegistro = {
      juego_id: id,
      usuario_id: usuario.id,
      fecha: fechaHoy,
      version: versionActual.nombre,
      texto: textoComentario,
      likes: 0,
      liked_by: []
    };

    const { data, error } = await supabase
      .from('comentarios')
      .insert([nuevoRegistro])
      .select(`id, fecha, version, texto, likes, liked_by, perfiles (nombre, avatar_url)`)
      .single();

    if (error) {
      console.error("Error al publicar:", error.message);
      mostrarNotificacion('Error', 'No pudimos publicar tu reseña.');
      return;
    }

    setComentarios([data, ...comentarios]);
    setTextoComentario('');
    mostrarNotificacion('¡Éxito!', 'Tu reseña ha sido publicada.');
  };

  return (
    <div className="detalle-container" onClick={handleCerrarModal}>
      <div className="detalle-card">
        <button onClick={() => navigate('/catalogo')} className="btn-back-link" aria-label="Volver al catálogo" title="Volver al catálogo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
          </svg>
        </button>

        <div className="detalle-content">
          <div className="detalle-info">
            <div className="detalle-header-visual" style={{ backgroundImage: `url(${juego.imagenes?.hero || juego.imagen_juego})` }}>
              <div className="detalle-header-overlay" />
              <div className="detalle-header-texto">
                <h1>{juego.nombre}</h1>
                <div className="detalle-subinfo"><span>{juego.categoria}</span><span>•</span><span>{juego.compania}</span></div>
              </div>
            </div>

            <div className="detalle-descripcion">
              <h3>Descripción</h3>
              <p>{juego.descripcion_larga}</p>
              <button className="btn-ver-mas" onClick={() => setMostrarDetalles(!mostrarDetalles)}>
                {mostrarDetalles ? 'Ocultar detalles' : 'Ver más detalles'}
              </button>
            </div>

            <div className={`detalles-extra-wrapper ${mostrarDetalles ? 'abierto' : ''}`}>
              <div className="detalles-extra-inner">
                <div className="detalle-separador" />
                <div className="detalle-datos">
                  <div className="dato-item"><span className="dato-label">Clasificación</span><span className="dato-valor badge-clasificacion">{juego.clasificacion_edad}</span></div>
                  <div className="dato-item"><span className="dato-label">Lanzamiento</span><span className="dato-valor">{juego.fecha_lanzamiento}</span></div>
                  <div className="dato-item"><span className="dato-label">Compañía</span><span className="dato-valor">{juego.compania}</span></div>
                </div>

                {juego.etiquetas && juego.etiquetas.length > 0 && (
                  <div className="detalle-tags">
                    <span className="dato-label">Etiquetas</span>
                    <div className="tags-list">
                      {juego.etiquetas.map((etiqueta, index) => (
                        <span className="tag" key={index}>{etiqueta}</span>
                      ))}
                    </div>
                  </div>
                )}

                {juego.especificaciones && (
                  <div className="detalle-specs">
                    <div className="specs-header">
                      <h4>Requisitos del Sistema</h4>
                      {juego.especificaciones.os && <span className="specs-os"><strong>SO:</strong> {juego.especificaciones.os}</span>}
                    </div>
                    <div className="specs-grid">
                      <div className="specs-column minimos">
                        <h5>Mínimos</h5>
                        {Object.entries(juego.especificaciones.minimos).map(([key, value]) => (
                          <div className="spec-row" key={key}>
                            <span className="spec-label">{formatLabel(key)}</span>
                            <span className="spec-value">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="specs-column recomendados">
                        <h5>Recomendados</h5>
                        {Object.entries(juego.especificaciones.recomendados).map(([key, value]) => (
                          <div className="spec-row" key={key}>
                            <span className="spec-label">{formatLabel(key)}</span>
                            <span className="spec-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="seccion-comentarios">
              <div className="detalle-separador" />
              <h3>Reseñas de Jugadores</h3>

              {usuario ? (
                haComprado ? (
                  <form className="form-comentario" onSubmit={handlePublicarComentario}>
                    <textarea placeholder={`Escribe tu opinión sobre la versión ${versionActual.nombre}...`} value={textoComentario} onChange={(e) => setTextoComentario(e.target.value)} required />
                    <button type="submit" className="btn-publicar">Publicar Reseña</button>
                  </form>
                ) : (
                  <div className="comentario-alerta"><p>Debes comprar este juego para poder escribir una reseña.</p></div>
                )
              ) : (
                <div className="comentario-alerta"><p>Inicia sesión y compra el juego para dejar tu reseña.</p></div>
              )}

              <div className="lista-comentarios">
                {comentarios.length > 0 ? (
                  comentarios.map((c) => {
                    const dioLike = usuario && c.liked_by?.includes(usuario.id);
                    const nombreAutor = c.perfiles?.nombre || 'Usuario Desconocido';
                    const avatarAutor = c.perfiles?.avatar_url;

                    return (
                      <div key={c.id} className="comentario-item">
                        <div className="comentario-avatar">
                          {avatarAutor ? (
                            <img src={avatarAutor} alt={nombreAutor} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                          ) : (
                            nombreAutor.charAt(0).toUpperCase()
                          )}
                        </div>
                        <div className="comentario-contenido">
                          <div className="comentario-header">
                            <span className="comentario-autor">{nombreAutor}</span>
                            <span className="comentario-meta">{c.fecha} • Versión: {c.version}</span>
                          </div>
                          <p className="comentario-texto">{c.texto}</p>
                          <button className={`btn-reaccion ${dioLike ? 'like-activo' : ''}`} onClick={() => handleReaccion(c.id)}>
                            {dioLike ? '❤️' : '🤍'} {c.likes}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="sin-comentarios">Aún no hay reseñas para este juego. ¡Sé el primero en comentar!</p>
                )}
              </div>
            </div>

          </div>

          <div className="detalle-compra">
            <div className="detalle-portada-wrapper">
              <img src={juego.imagenes ? juego.imagenes.poster : juego.imagen_juego} alt={juego.nombre} className="detalle-portada-img" />
            </div>

            <div className="precio-box">
              <span className="label-precio">Versión</span>
              <div className="version-selector-wrapper">
                <select className="version-selector" value={versionSeleccionada} onChange={(e) => setVersionSeleccionada(Number(e.target.value))} aria-label="Seleccionar versión">
                  {versiones.map((version, index) => (
                    <option key={index} value={index}>{version.nombre}</option>
                  ))}
                </select>
                <button className={`btn-favorito ${esFavorito ? 'activo' : ''}`} onClick={() => setEsFavorito(!esFavorito)} aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'} title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
                  {esFavorito ? '♥' : '♡'}
                </button>
              </div>

              <span className='label-precio'>Precio</span>
              <div className='precio-contenedor'>
                {versionActual.descuento && (
                  <span className='val-precio-original'>{versionActual.precio}</span>
                )}
                <span className='val-precio'>
                  {versionActual.descuento ? calcularPrecioFinal(versionActual.precio, versionActual.descuento) : versionActual.precio}
                </span>
              </div>

              {versionActual.descuento && (
                <span className='badge-descuento'>-{versionActual.descuento}%</span>
              )}
            </div>

            <button className="btn-comprar" onClick={handleAgregarCarrito}>
              Agregar al carrito
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DetalleJuego