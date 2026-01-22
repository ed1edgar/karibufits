import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getAllProducts } from '../data/products';
import { MagnifyingGlass } from '@phosphor-icons/react';
import './SearchPage.css';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    
    const query = searchParams.get('q') || '';
    const allProducts = getAllProducts();

    useEffect(() => {
        if (query.trim()) {
            setIsSearching(true);
            
            // Simulate search delay for better UX
            const timer = setTimeout(() => {
                const results = allProducts.filter(product => 
                    product.name.toLowerCase().includes(query.toLowerCase()) ||
                    product.category.toLowerCase().includes(query.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
                );
                
                setSearchResults(results);
                setIsSearching(false);
            }, 300);

            return () => clearTimeout(timer);
        } else {
            setSearchResults([]);
        }
    }, [query, allProducts]);

    const handleSearchChange = (e) => {
        const newQuery = e.target.value;
        if (newQuery.trim()) {
            setSearchParams({ q: newQuery });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div className="search-page container">
            <div className="search-header">
                <h1>Search Results</h1>
                <div className="search-bar-container">
                    <div className="search-input-wrapper">
                        <MagnifyingGlass className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={query}
                            onChange={handleSearchChange}
                            className="search-input"
                            autoFocus
                        />
                    </div>
                </div>
            </div>

            {query && (
                <div className="search-info">
                    <p>Showing results for "{query}"</p>
                    <span className="results-count">
                        {isSearching ? 'Searching...' : `${searchResults.length} products found`}
                    </span>
                </div>
            )}

            {isSearching ? (
                <div className="search-loading">
                    <div className="loading-spinner"></div>
                    <p>Searching for products...</p>
                </div>
            ) : query && searchResults.length === 0 ? (
                <div className="no-results">
                    <MagnifyingGlass size={64} className="no-results-icon" />
                    <h3>No products found</h3>
                    <p>Try adjusting your search terms or browse our categories.</p>
                    <div className="suggested-categories">
                        <Link to="/category/men" className="category-link">Shop Men</Link>
                        <Link to="/category/women" className="category-link">Shop Women</Link>
                        <Link to="/category/teens" className="category-link">Shop Teens</Link>
                        <Link to="/category/accessories" className="category-link">Shop Accessories</Link>
                    </div>
                </div>
            ) : (
                <div className="search-results">
                    <div className="product-grid">
                        {searchResults.map((product) => (
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
                </div>
            )}
        </div>
    );
};

export default SearchPage;