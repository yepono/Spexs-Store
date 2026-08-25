import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import './Recibo.css';

export default function Recibo() {
    const location = useLocation();
    const navigate = useNavigate();
    const { vaciarCarrito } = useCarrito();

    // datos del carrito sidebar
    const datosCompra = location.state;

    useEffect(() => {
        if (!datosCompra || !datosCompra.items || datosCompra.items.length === 0) {
            navigate('/catalogo');
        } else {
            vaciarCarrito();
        }
    }, []);

    if (!datosCompra) return null;

    const fechaHoy = new Date().toLocaleDateString('es-MX', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    
    // numero de orden aleatorio
    const numeroOrden = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');

    return (
        <div className="recibo-page">
            <div className="recibo-container">
                <div className="recibo-header">
                    <h2>SPEXS</h2>
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
                        <span>Dirección:</span>
                        <strong>Envío Digital (Vinculado a tu cuenta)</strong>
                    </div>
                </div>

                <div className="recibo-lista-juegos">
                    <h3>Artículos comprados</h3>
                    {datosCompra.items.map(item => (
                        <div key={item.id} className="recibo-item">
                            <span className="recibo-item-nombre">{item.cantidad}x {item.nombre}</span>
                            <span className="recibo-item-precio">{item.precio}</span>
                        </div>
                    ))}
                </div>

                <div className="recibo-total-section">
                    <span>Total Pagado:</span>
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