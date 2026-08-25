import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from '../context/CarritoContext';
import './CarritoSidebar.css';

export default function CarritoSidebar() {
    const [abierto, setAbierto] = useState(false);
    const { carrito, eliminarDelCarrito } = useCarrito();
    const navigate = useNavigate();

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    // Función auxiliar para precios
    const procesarPrecio = (item) => {
        if (!item.precioReal || item.precioReal === 'Gratis') return { precioNum: 0, descNum: 0, precioFinal: 0, esGratis: true };
        const precioNum = parseFloat(item.precioReal.replace(/[^0-9.-]+/g, '')) || 0;
        const descNum = item.descuentoReal ? parseFloat(String(item.descuentoReal).replace('%', '')) : 0;
        const precioFinal = precioNum * (1 - descNum / 100);
        return { precioNum, descNum, precioFinal, esGratis: false };
    };

    const calcularTotales = () => {
        let original = 0;
        let final = 0;
        carrito.forEach(item => {
            const val = procesarPrecio(item);
            original += val.precioNum * item.cantidad;
            final += val.precioFinal * item.cantidad;
        });
        return { original, final };
    };

    const { original, final } = calcularTotales();

    const handleComprar = () => {
        setAbierto(false);
        navigate('/recibo', { state: { items: carrito, total: final, subtotal: original } });
    };

    const irADetalle = (id) => {
        setAbierto(false);
        navigate(`/catalogo/juego/${id}`);
    };

    return (
        <>
            <button className="btn-flotante-carrito" onClick={() => setAbierto(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {totalItems > 0 && <span className="badge-flotante">{totalItems}</span>}
            </button>

            <div className={`carrito-overlay ${abierto ? 'visible' : ''}`} onClick={() => setAbierto(false)} />
            <div className={`carrito-panel ${abierto ? 'abierto' : ''}`}>
                <div className="carrito-panel-header">
                    <h2>Tu Carrito</h2>
                    <button onClick={() => setAbierto(false)}>✕</button>
                </div>

                <div className="carrito-items">
                    {carrito.length === 0 ? (
                        <p className="carrito-vacio">El carrito está vacío</p>
                    ) : (
                        carrito.map(item => {
                            const val = procesarPrecio(item);

                            return (
                                <div key={`${item.id}-${item.version}`} className="carrito-item" onClick={() => irADetalle(item.id)}>
                                    <img src={item.imagen_juego} alt={item.nombre} className="carrito-item-img" />
                                    <div className="carrito-item-info">
                                        <h4>{item.nombre}</h4>
                                        <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>
                                            Versión: {item.version}
                                        </span>

                                        {val.esGratis ? (
                                            <span style={{ color: '#22c55e', fontWeight: 'bold' }}>Gratis (x{item.cantidad})</span>
                                        ) : (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                {val.descNum > 0 && (
                                                    <span style={{ textDecoration: 'line-through', color: '#64748b', fontSize: '12px' }}>
                                                        {item.precioReal}
                                                    </span>
                                                )}
                                                <span style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '14px' }}>
                                                    ${val.precioFinal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN (x{item.cantidad})
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        className="btn-eliminar"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            eliminarDelCarrito(item.id, item.version);
                                        }}
                                        title="Eliminar"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })
                    )}
                </div>

                {carrito.length > 0 && (
                    <div className="carrito-footer">
                        <div className="carrito-totales">
                            {original > final && (
                                <span className="total-original">${original.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</span>
                            )}
                            <span className="total-final">Total: ${final.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</span>
                        </div>
                        <button className="btn-comprar-final" onClick={handleComprar}>
                            Comprar
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}