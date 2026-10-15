import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('carrito_velas');
        if (!savedCart) return [];
        try {
            const parsed = JSON.parse(savedCart);
            return parsed.map(item => ({
                ...item,
                id: item.id ?? item.name,
                cartKey: item.cartKey ?? item.id ?? item.name,
                quantity: typeof item.quantity === 'number' ? item.quantity : (item.quantity ? Number(item.quantity) : 1)
            }));
        } catch (e) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('carrito_velas', JSON.stringify(cart));
    }, [cart]);

    const getProductId = (product) => product.id ?? product.name;

    const getCartKey = (item) => item.cartKey ?? item.id ?? item.name;

    const addToCart = (product, quantity = 1, selectedOption = null) => {
        const pid = getProductId(product);
        const option = selectedOption ?? product.selectedOption ?? null;
        const cartKey = option ? `${pid}::${option}` : (product.cartKey ?? pid);
        const amount = Math.max(1, Math.floor(Number(quantity) || 1));
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => getCartKey(item) === cartKey);
            if (existingProduct) {
                return prevCart.map(item =>
                    getCartKey(item) === cartKey ? { ...item, quantity: item.quantity + amount } : item
                );
            } else {
                const price = typeof product.price === 'number' ? product.price : Number(product.price || 0);
                return [...prevCart, {
                    ...product,
                    id: pid,
                    cartKey,
                    selectedOption: option,
                    price,
                    quantity: amount,
                }];
            }
        });
    };

    const decreaseFromCart = (productId) => {
        const pid = productId;
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => getCartKey(item) === pid || item.id === pid);
            if (!existingProduct) return prevCart;
            if (existingProduct.quantity <= 1) {
                return prevCart.filter(item => getCartKey(item) !== getCartKey(existingProduct));
            }
            return prevCart.map(item =>
                getCartKey(item) === getCartKey(existingProduct) ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const removeFromCart = (id) => {
        const pid = id;
        setCart(prevCart => prevCart.filter(item => getCartKey(item) !== pid && item.id !== pid));
    };
    const clearCart = () => setCart([]);
    const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price || 0) * Number(item.quantity || 0)), 0);
    const totalItems = cart.reduce((acc, item) => acc + Number(item.quantity || 0), 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            decreaseFromCart,
            clearCart, 
            totalPrice, 
            totalItems 
        }}>
            {children}
        </CartContext.Provider>
    );
};
