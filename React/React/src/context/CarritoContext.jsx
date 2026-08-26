import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (juego) => {
        setCarrito((prev) => {
            const existe = prev.find(item => item.id === juego.id && item.version === juego.version);
            if (existe) {
                return prev;
            }
            return [...prev, { ...juego, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id, version) => {
        setCarrito(prev => prev.filter(item => !(item.id === id && item.version === version)));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
};
