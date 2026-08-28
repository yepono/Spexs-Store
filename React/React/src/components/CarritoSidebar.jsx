import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';
import './CarritoSidebar.css';

export default function CarritoSidebar() {
    const [abierto, setAbierto] = useState(false);

    // Persistencia en localStorage
    const [tarjetas, setTarjetas] = useState(() => {
        const guardadas = localStorage.getItem("mis_tarjetas_guardadas");
        return guardadas ? JSON.parse(guardadas) : [];
    });

    const { usuario } = useAuth();
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
    const [cambiandoTarjeta, setCambiandoTarjeta] = useState(false);
    const [mostrandoFormulario, setMostrandoFormulario] = useState(false);

    // Formulario de nueva tarjeta
    const [numTarjeta, setNumTarjeta] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [cvv, setCvv] = useState('');

    const navigate = useNavigate();

    // Guardar en localStorage y actualizar la tarjeta seleccionada por defecto
    useEffect(() => {
        localStorage.setItem("mis_tarjetas_guardadas", JSON.stringify(tarjetas));
        if (tarjetas.length > 0 && !tarjetaSeleccionada) {
            setTarjetaSeleccionada(tarjetas[0].id);
        }
    }, [tarjetas]);

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

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

    const handleAgregarTarjeta = (e) => {
        e.preventDefault();
        if (!numTarjeta || !vencimiento || !cvv) return;

        const ultimos4 = numTarjeta.slice(-4) || "0000";
        const nuevaTarjeta = {
            id: Date.now(),
            label: `Tarjeta terminada en ${ultimos4}`,
            num: `**** ${ultimos4}`,
            vencimiento
        };

        const nuevasTarjetas = [...tarjetas, nuevaTarjeta];
        setTarjetas(nuevasTarjetas);
        setTarjetaSeleccionada(nuevaTarjeta.id);

        // Limpiar formulario y cerrar modos de edición
        setNumTarjeta('');
        setVencimiento('');
        setCvv('');
        setMostrandoFormulario(false);
        setCambiandoTarjeta(false);
    };

    const handleComprar = async () => {
        if (!usuario) {
            alert("Debes iniciar sesión para realizar una compra.");
            return;
        }

        const tarjetaUsada = tarjetas.find(t => t.id === tarjetaSeleccionada);
        if (!tarjetaUsada) {
            alert("Por favor registra o selecciona un método de pago.");
            setCambiandoTarjeta(true);
            return;
        }

        try {
            // 1. Preparar los datos para Supabase
            const registrosCompra = carrito.map(item => ({
                usuario_id: usuario.id,
                juego_id: item.id,
                version_comprada: item.version
            }));

            // 2. Insertar en la base de datos
            const { error } = await supabase.from('compras').insert(registrosCompra);

            if (error) throw error;

            // 3. Si fue exitoso: cerrar carrito, vaciarlo y navegar al recibo
            setAbierto(false);
            vaciarCarrito();

            navigate('/recibo', {
                state: {
                    items: carrito,
                    total: final,
                    subtotal: original,
                    metodoPago: tarjetaUsada
                }
            });

            // Opcional: Recargar la página o forzar la actualización del AuthContext 
            // para que los juegos aparezcan inmediatamente en DetalleJuego como "comprados"
            window.location.reload();

        } catch (error) {
            console.error("Error en la transacción:", error);
            alert("Ocurrió un error al procesar tu compra. Inténtalo de nuevo.");
        }
    };

    const irADetalle = (id) => {
        setAbierto(false);
        navigate(`/catalogo/juego/${id}`);
    };

    const tarjetaActual = tarjetas.find(t => t.id === tarjetaSeleccionada);

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
                        <div className="seccion-metodo-pago">
                            <span className="pago-titulo">Método de pago:</span>

                            {mostrandoFormulario ? (
                                <form className="form-agregar-tarjeta" onSubmit={handleAgregarTarjeta}>
                                    <input
                                        type="text"
                                        placeholder="Número de tarjeta"
                                        maxLength="16"
                                        value={numTarjeta}
                                        onChange={(e) => setNumTarjeta(e.target.value)}
                                        required
                                    />
                                    <div className="form-row">
                                        <input
                                            type="text"
                                            placeholder="MM/AA"
                                            maxLength="5"
                                            value={vencimiento}
                                            onChange={(e) => setVencimiento(e.target.value)}
                                            required
                                        />
                                        <input
                                            type="password"
                                            placeholder="CVV"
                                            maxLength="4"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-acciones">
                                        <button type="submit" className="btn-guardar-tarjeta">Guardar</button>
                                        <button type="button" className="btn-cancelar-tarjeta" onClick={() => setMostrandoFormulario(false)}>Cancelar</button>
                                    </div>
                                </form>
                            ) : !cambiandoTarjeta && tarjetaActual ? (
                                <div className="tarjeta-activa-box">
                                    <div className="tarjeta-info">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>
                                        <span>{tarjetaActual.num}</span>
                                    </div>
                                    <button className="btn-cambiar-tarjeta" onClick={() => setCambiandoTarjeta(true)}>
                                        Cambiar
                                    </button>
                                </div>
                            ) : (
                                <div className="tarjetas-lista">
                                    {tarjetas.map(t => (
                                        <button
                                            key={t.id}
                                            className={`tarjeta-opcion ${t.id === tarjetaSeleccionada ? 'seleccionada' : ''}`}
                                            onClick={() => {
                                                setTarjetaSeleccionada(t.id);
                                                setCambiandoTarjeta(false);
                                            }}
                                        >
                                            💳 {t.label}
                                        </button>
                                    ))}
                                    <button className="btn-nueva-tarjeta" onClick={() => setMostrandoFormulario(true)}>
                                        + Agregar nueva tarjeta
                                    </button>
                                </div>
                            )}
                        </div>

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