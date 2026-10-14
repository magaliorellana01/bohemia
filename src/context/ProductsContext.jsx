import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { productosIniciales } from '../data/productos';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productos] = useState(productosIniciales);
    const cargando = false;

    const accionPendiente = async () => {
        toast.info("Esta acción estará disponible cuando se implemente el backend con Laravel.");
        return false;
    };

    return (
        <ProductsContext.Provider value={{
            productos,
            cargando,
            agregarProducto: accionPendiente,
            editarProducto: accionPendiente,
            eliminarProducto: accionPendiente
        }}>
            {children}
        </ProductsContext.Provider>
    );
};
