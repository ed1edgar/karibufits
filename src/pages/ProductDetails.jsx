import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getAccessoriesByIds } from '../data/products';
import { useCart } from '../context/CartContext';
import { Heart, Plus } from '@phosphor-icons/react';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [localAccessories, setLocalAccessories] = useState([]);

    useEffect(() => {
        if (product) {
            setSelectedSize(product.sizes[0]);
            setSelectedColor(product.colors[0]);
            if (product.relatedAccessories) {
                setLocalAccessories(getAccessoriesByIds(product.relatedAccessories));
            }
        }
    }, [product]);

    if (!product) {
        return (
            <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>
                <h2>Product Not Found</h2>
                <Link to="/" className="btn-primary" style={{ marginTop: '1rem', background: 'black', color: 'white' }}>Return Home</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor);
        // Could add toast here
    };

    const handleAddAccessory = (accessory) => {
        addToCart(accessory, 'One Size', 'Default');
    };

    return (
        <div className="product-details-container container">
            <div className="product-main">
                {/* Gallery */}
                <div className="product-gallery">
                    <div className="main-image-wrapper">
                        <img src={product.image} alt={product.name} className="main-image" />
                    </div>
                    {/* Thumbnails could go here */}
                </div>

                {/* Info */}
                <div className="product-info-col">
                    <div className="product-category">{product.category}</div>
                    <h1 className="product-title">{product.name}</h1>
                    <div className="product-price-xl">${product.price.toFixed(2)}</div>

                    <p className="product-description">{product.description}</p>

                    <div className="selector-group">
                        <span className="selector-label">Size: {selectedSize}</span>
                        <div className="size-grid">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="selector-group">
                        <span className="selector-label">Color: {selectedColor}</span>
                        <div className="color-grid">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                    style={{ backgroundColor: color.toLowerCase() }}
                                    title={color}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="product-actions">
                        <button className="btn-add-cart" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="btn-wishlist">
                            <Heart />
                        </button>
                    </div>

                    {/* Geolocation Hook Point - "Delivers to [City]" */}
                </div>
            </div>

            {/* Accessories / Complete the Look */}
            {localAccessories.length > 0 && (
                <section className="accessories-section">
                    <div className="section-title">
                        <h3>Complete the Look</h3>
                    </div>
                    <div className="accessories-grid">
                        {localAccessories.map(acc => (
                            <div key={acc.id} className="accessory-card">
                                <img src={acc.image} alt={acc.name} className="accessory-img" />
                                <h4>{acc.name}</h4>
                                <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>${acc.price.toFixed(2)}</p>
                                <button
                                    className="accessory-add-btn"
                                    onClick={() => handleAddAccessory(acc)}
                                    title="Quick Add"
                                >
                                    <Plus />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetails;
