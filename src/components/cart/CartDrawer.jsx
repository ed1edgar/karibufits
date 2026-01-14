import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash, Plus, Minus } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        updateQuantity,
        removeFromCart,
        cartTotal
    } = useCart();

    if (!isCartOpen) {
        // In a real app we might want to keep it mounted but hidden for animation
        // For now, let's keep it in DOM but rely on CSS visibility/transform
    }

    return (
        <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
            <div className="cart-drawer" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Bag ({cartItems.length})</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your shopping bag is empty.</p>
                            <button onClick={() => setIsCartOpen(false)} style={{ marginTop: '1rem', textDecoration: 'underline' }}>
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item, idx) => (
                            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${idx}`} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-variant">
                                        {item.selectedSize} / {item.selectedColor}
                                    </p>
                                    <div className="cart-item-controls">
                                        <div className="qty-controls">
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span className="qty-val">{item.quantity}</span>
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                                            >
                                                <Plus size={12} />
                                            </button>
                                        </div>
                                        <div style={{ fontWeight: '600' }}>${(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                    <button
                                        style={{ fontSize: '0.75rem', textDecoration: 'underline', marginTop: '0.5rem', color: '#999' }}
                                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn" style={{ display: 'block', textAlign: 'center' }} onClick={() => setIsCartOpen(false)}>
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
