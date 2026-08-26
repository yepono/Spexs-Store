import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import './Recibo.css';

export default function Recibo() {
    const location = useLocation();
    const navigate = useNavigate();
    const { vaciarCarrito } = useCarrito();
    const { agregarCompras } = useAuth();
    const procesadoRef = useRef(false);

    // datos del carrito sidebar
    const datosCompra = location.state;

    useEffect(() => {
        if (!datosCompra || !datosCompra.items || datosCompra.items.length === 0) {
            navigate('/catalogo');
        } else if (!procesadoRef.current) {
            procesadoRef.current = true;

            // Transfiere los artículos comprados del recibo a la biblioteca
            const juegosNuevos = datosCompra.items.map((item) => ({
                id: item.id || item.nombre.toLowerCase().replace(/\s+/g, '-'),
                titulo: item.nombre || item.titulo,
                imagen: item.imagen || item.img || item.imagenUrl || '',
                fechaCompra: new Date().toLocaleDateString('es-MX'),
                horasJugadas: '0.0 hrs'
            }));

            agregarCompras(juegosNuevos);
            vaciarCarrito();
        }
    }, [datosCompra, navigate, vaciarCarrito, agregarCompras]);

    if (!datosCompra) return null;

    const fechaHoy = new Date().toLocaleDateString('es-MX', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    // numero de orden aleatorio
    const numeroOrden = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');

    // Función auxiliar para precios
    const obtenerPreciosItem = (item) => {
        if (!item.precioReal || item.precioReal === 'Gratis') return { esGratis: true };
        const precioNum = parseFloat(item.precioReal.replace(/[^0-9.-]+/g, '')) || 0;
        const descNum = item.descuentoReal ? parseFloat(String(item.descuentoReal).replace('%', '')) : 0;
        const precioFinal = precioNum * (1 - descNum / 100);
        return { precioNum, descNum, precioFinal, esGratis: false };
    }

    return (
        <div className="recibo-page">
            <div className="recibo-container">
                <div className="recibo-header">
                    <h2>GameStore</h2>
                    <p>¡Gracias por tu compra!</p>
                </div>

                <div className="recibo-detalles-info">
                    <div className="info-grupo">
                        <span>Orden #:</span>
                        <strong>{numeroOrden}</strong>
                    </div>
                    <div className="info-grupo">
                        <span>Fecha:</span>
                        <strong>{fechaHoy}</strong>
                    </div>
                    <div className="info-grupo">
                        <span>Envio:</span>
                        <strong>Envío Digital (Vinculado a tu cuenta)</strong>
                    </div>
                </div>

                <div className="recibo-lista-juegos">
                    <h3>Artículos comprados</h3>
                    {datosCompra.items.map((item, idx) => {
                        const val = obtenerPreciosItem(item);
                        return (
                            <div key={idx} className="recibo-item" style={{ flexDirection: 'column', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <span className="recibo-item-nombre">
                                        {item.cantidad}x {item.nombre}
                                        <br />
                                        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'normal' }}>Versión: {item.version}</span>
                                    </span>

                                    <span className="recibo-item-precio" style={{ textAlign: 'right' }}>
                                        {val.esGratis ? (
                                            <span style={{ color: '#22c55e' }}>Gratis</span>
                                        ) : (
                                            <>
                                                {val.descNum > 0 && (
                                                    <span style={{ display: 'block', textDecoration: 'line-through', fontSize: '12px', color: '#64748b' }}>
                                                        {item.precioReal}
                                                    </span>
                                                )}
                                                <span>${val.precioFinal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</span>
                                            </>
                                        )}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="recibo-total-section">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Total Pagado:</span>
                        {datosCompra.subtotal > datosCompra.total && (
                            <span style={{ fontSize: '13px', color: '#22c55e' }}>Ahorraste: ${(datosCompra.subtotal - datosCompra.total).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</span>
                        )}
                    </div>
                    <span className="recibo-total-monto">
                        ${datosCompra.total.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                    </span>
                </div>

                <button className="btn-volver-catalogo" onClick={() => navigate('/catalogo')}>
                    Volver al Catálogo
                </button>
            </div>
        </div>
    );
}