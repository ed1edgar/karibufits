import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import { Funnel } from '@phosphor-icons/react';
import './CategoryPage.css';

const CategoryPage = () => {
    const { category } = useParams();
    const products = getProductsByCategory(category);
    const [activeFilters, setActiveFilters] = useState([]);

    // Mock filters
    const filters = {
        Size: ['XS', 'S', 'M', 'L', 'XL'],
        Color: ['Black', 'White', 'Blue', 'Beige'],
        Brand: ['KaribuFits Essentials', 'Luxe Line', 'Urban Mode'],
        Price: ['$0 - $50', '$50 - $100', '$100 - $200', '$200+']
    };

    const toggleFilter = (filter) => {
        setActiveFilters(prev =>
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
    };

    return (
        <div className="category-page container">
            <div className="category-header">
                <h1 className="category-title">{category}</h1>
                <p className="category-count">{products.length} Products</p>
            </div>

            <div className="category-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-header">
                        <Funnel size={20} />
                        <span>Filters</span>
                    </div>

                    {Object.entries(filters).map(([key, options]) => (
                        <div key={key} className="filter-group">
                            <h4 className="filter-title">{key}</h4>
                            <div className="filter-options">
                                {options.map(option => (
                                    <label key={option} className="checkbox-row">
                                        <input
                                            type="checkbox"
                                            onChange={() => toggleFilter(option)}
                                            checked={activeFilters.includes(option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </aside>

                {/* Product Grid */}
                <div className="category-products">
                    {products.length === 0 ? (
                        <div className="no-products">
                            <p>No products found in this category.</p>
                            <Link to="/" style={{ textDecoration: 'underline' }}>Return Home</Link>
                        </div>
                    ) : (
                        <div className="product-grid">
                            {products.map((product) => (
                                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">{product.name}</h3>
                                        <div className="product-price">${product.price.toFixed(2)}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
