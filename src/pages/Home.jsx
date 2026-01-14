import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight } from '@phosphor-icons/react';
import './Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Redefine Your Everyday</h1>
                    <p className="hero-subtitle">Meticulously crafted essentials for the seamless life.</p>
                    <Link to="/category/women" className="btn-primary">Shop Collection</Link>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section container">
                <div className="section-title">
                    <h2>Shop by Category</h2>
                </div>
                <div className="category-grid">
                    <Link to="/category/women" className="category-card">
                        <img src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop" alt="Women" className="category-img" />
                        <div className="category-overlay">
                            <h3>Women</h3>
                            <span className="category-btn">Explore <ArrowRight /></span>
                        </div>
                    </Link>
                    <Link to="/category/men" className="category-card">
                        <img src="https://images.unsplash.com/photo-1617137968427-b2e4231b7264?q=80&w=800&auto=format&fit=crop" alt="Men" className="category-img" />
                        <div className="category-overlay">
                            <h3>Men</h3>
                            <span className="category-btn">Explore <ArrowRight /></span>
                        </div>
                    </Link>
                    <Link to="/category/teens" className="category-card">
                        <img src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop" alt="Teens" className="category-img" />
                        <div className="category-overlay">
                            <h3>Teens</h3>
                            <span className="category-btn">Explore <ArrowRight /></span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section container" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="section-title">
                    <h2>Trending Now</h2>
                </div>
                <div className="product-grid">
                    {featuredProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <div className="product-meta">{product.category}</div>
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-price">${product.price.toFixed(2)}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
