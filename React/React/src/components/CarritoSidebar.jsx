import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from '../context/CarritoContext';
import './CarritoSidebar.css';

export default function CarritoSidebar() {
    const [abierto, setAbierto] = useState(false);
    const { carrito, eliminarDelCarrito } = useCarrito();
    const navigate = useNavigate();

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    // Calcular total de la compra con el descuento
    const calcularTotales = () => {
        let original = 0;
        let final = 0;
        carrito.forEach(item => {
            const precioNum = parseFloat(item.precio.replace(/[^0-9.-]+/g, '')) || 0;
            const descuentoNum = item.descuento ? parseFloat(String(item.descuento).replace('%', '')) : 0;

            const precioFinalItem = precioNum * (1 - descuentoNum / 100);

            original += precioNum * item.cantidad;
            final += precioFinalItem * item.cantidad;
        });
        return { original, final };
    };

    const { original, final } = calcularTotales();

    const handleComprar = () => {
        setAbierto(false);
        // pasar los datos del carrito al recibo
        navigate('/recibo', { state: { items: carrito, total: final } });
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
                        carrito.map(item => (
                            <div key={item.id} className="carrito-item" onClick={() => irADetalle(item.id)}>
                                <img src={item.imagen_juego} alt={item.nombre} className="carrito-item-img" />
                                <div className="carrito-item-info">
                                    <h4>{item.nombre}</h4>
                                    <span>{item.precio}</span>
                                </div>
                                <button
                                    className="btn-eliminar"
                                    onClick={(e) => {
                                        e.stopPropagation(); // evita que se dispare irADetalle
                                        eliminarDelCarrito(item.id);
                                    }}
                                    title="Eliminar"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        ))
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