import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('karibufits-cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('karibufits-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, size, color) => {
        setCartItems(prev => {
            const existingItem = prev.find(item =>
                item.id === product.id && item.selectedSize === size && item.selectedColor === color
            );

            if (existingItem) {
                return prev.map(item =>
                    item === existingItem
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, {
                ...product,
                selectedSize: size,
                selectedColor: color,
                quantity: 1
            }];
        });
        setIsCartOpen(true); // Auto open cart on add
    };

    const removeFromCart = (itemId, size, color) => {
        setCartItems(prev => prev.filter(item =>
            !(item.id === itemId && item.selectedSize === size && item.selectedColor === color)
        ));
    };

    const updateQuantity = (itemId, size, color, quantity) => {
        if (quantity < 1) return;
        setCartItems(prev => prev.map(item =>
            (item.id === itemId && item.selectedSize === size && item.selectedColor === color)
                ? { ...item, quantity }
                : item
        ));
    };

    const clearCart = () => setCartItems([]);

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen,
            setIsCartOpen,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
