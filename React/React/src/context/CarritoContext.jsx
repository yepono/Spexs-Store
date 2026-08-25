import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (juego) => {
        setCarrito((prev) => {
            const existe = prev.find(item => item.id === juego.id);
            if (existe) {
                //Arreglar aumento de cantidad en el carrito 
                return prev.map(item =>
                    item.id === juego.id ? { ...item, cantidad: item.cantidad } : item);
            }
            return [...prev, { ...juego, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(prev => prev.filter(item => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
};
