import React, { useState } from 'react';
import { Package, Truck, Check, MapPin } from '@phosphor-icons/react';
import './OrderTracking.css';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTrack = (e) => {
        e.preventDefault();
        if (!orderId) return;

        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setOrderData({
                id: orderId,
                date: 'Oct 24, 2023',
                status: 'In Transit',
                steps: [
                    { status: 'Order Placed', date: 'Oct 24, 10:30 AM', completed: true, icon: <Check /> },
                    { status: 'Processing', date: 'Oct 24, 2:15 PM', completed: true, icon: <Package /> },
                    { status: 'In Transit', date: 'Oct 25, 09:00 AM', completed: true, current: true, icon: <Truck /> },
                    { status: 'Out for Delivery', date: 'Estimated Oct 26', completed: false, icon: <Truck /> },
                    { status: 'Delivered', date: '-', completed: false, icon: <MapPin /> },
                ]
            });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="tracking-container">
            <div className="tracking-header">
                <h1>Track Your Order</h1>
                <p>Enter your order ID to see the current status of your shipment.</p>
            </div>

            <form className="tracking-search" onSubmit={handleTrack}>
                <input
                    type="text"
                    placeholder="Order ID (e.g. #ORD-1234)"
                    className="tracking-input"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <button type="submit" className="tracking-btn">
                    {loading ? 'Searching...' : 'Track'}
                </button>
            </form>

            {orderData && (
                <div className="tracking-result">
                    <div className="order-meta">
                        <div>
                            <small className="text-muted">Order ID</small>
                            <h3>{orderData.id}</h3>
                        </div>
                        <div className="text-right">
                            <small className="text-muted">Expected Delivery</small>
                            <h3>Oct 26, 2023</h3>
                        </div>
                    </div>

                    <div className="timeline">
                        {orderData.steps.map((step, idx) => (
                            <div key={idx} className={`timeline-item ${step.completed ? 'completed' : ''} ${step.current ? 'current' : ''}`}>
                                <div className="timeline-icon">
                                    {step.icon}
                                </div>
                                <div className="timeline-content">
                                    <h4>{step.status}</h4>
                                    <p>{step.current ? 'Your package is on its way to the destination hub.' : ''}</p>
                                    <div className="timeline-date">{step.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderTracking;
