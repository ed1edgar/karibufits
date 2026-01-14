import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MapPin, CheckCircle, Spinner } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const [loadingGeo, setLoadingGeo] = useState(false);
    const [shippingCost, setShippingCost] = useState(0);
    const [orderComplete, setOrderComplete] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        email: ''
    });

    const handleGeoLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        setLoadingGeo(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Here we would normally call a geocoding API
                // Mocking the response for now
                setTimeout(() => {
                    setFormData(prev => ({
                        ...prev,
                        city: 'New York', // Mocked
                        zip: '10001',
                        address: '1235 5th Ave (Detected)' // Mocked
                    }));
                    setShippingCost(15.00); // Mocked calculated shipping
                    setLoadingGeo(false);
                }, 1500);
            },
            (error) => {
                alert('Unable to retrieve your location');
                setLoadingGeo(false);
            }
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form...
        // submit order...
        setOrderComplete(true);
        clearCart();
    };

    if (orderComplete) {
        return (
            <div className="checkout-container success-screen">
                <CheckCircle className="success-icon" />
                <h1>Order Confirmed!</h1>
                <p>Thank you for your purchase. A confirmation email has been sent to {formData.email}.</p>
                <p>Your order will be shipped to {formData.city} shortly.</p>
                <Link to="/" className="btn-primary" style={{ marginTop: '2rem', background: 'black', color: 'white' }}>Continue Shopping</Link>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container" style={{ textAlign: 'center' }}>
                <h1>Your Cart is Empty</h1>
                <Link to="/" style={{ textDecoration: 'underline' }}>Go back to shop</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <div className="checkout-main">
                <h1>Checkout</h1>

                <form id="checkout-form" onSubmit={handleSubmit}>
                    {/* Shipping Info */}
                    <div className="checkout-section">
                        <h2>Shipping Information</h2>
                        <button type="button" className="geo-btn" onClick={handleGeoLocation}>
                            {loadingGeo ? <Spinner className="spin" /> : <MapPin />}
                            {loadingGeo ? 'Detecting Location...' : 'Use Current Location'}
                        </button>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" name="firstName" className="form-input" required value={formData.firstName} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-input" required value={formData.lastName} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input type="text" name="address" className="form-input" required value={formData.address} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">City</label>
                                <input type="text" name="city" className="form-input" required value={formData.city} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">ZIP Code</label>
                                <input type="text" name="zip" className="form-input" required value={formData.zip} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-input" required value={formData.email} onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Payment (Mock) */}
                    <div className="checkout-section">
                        <h2>Payment</h2>
                        <div className="form-group">
                            <label className="form-label">Card Number (Mock)</label>
                            <input type="text" placeholder="0000 0000 0000 0000" className="form-input" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">CVC</label>
                                <input type="text" placeholder="123" className="form-input" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="checkout-sidebar">
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    {cartItems.map((item, idx) => (
                        <div key={idx} className="summary-row">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}

                    <div className="summary-row" style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>{shippingCost === 0 ? 'Calculated at next step' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>

                    <div className="summary-total">
                        <span>Total</span>
                        <span>${(cartTotal + shippingCost).toFixed(2)}</span>
                    </div>

                    <button type="submit" form="checkout-form" className="place-order-btn">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
