import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, MagnifyingGlass, X, List } from '@phosphor-icons/react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cartCount, setIsCartOpen } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const searchFormRef = useRef(null);
    const searchInputRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            // Focus input when opening search
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        }
    };

    const clearSearch = () => {
        setSearchQuery('');
        searchInputRef.current?.focus();
    };

    // Handle clicks outside search form to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
                // Don't close if clicking on navigation links or logo
                if (event.target.closest('.navbar-links') || event.target.closest('.navbar-logo')) {
                    return;
                }
                setIsSearchOpen(false);
                setSearchQuery('');
            }
        };

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isSearchOpen]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.mobile-menu-drawer') && !event.target.closest('.mobile-menu-btn')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isMobileMenuOpen]);

    // Close mobile menu on window resize above 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    KaribuFits
                </Link>

                <nav className="navbar-links desktop-only">
                    <NavLink to="/category/men" className="nav-link">Men</NavLink>
                    <NavLink to="/category/women" className="nav-link">Women</NavLink>
                    <NavLink to="/category/teens" className="nav-link">Teens</NavLink>
                    <NavLink to="/category/accessories" className="nav-link">Accessories</NavLink>
                </nav>

                <div className="navbar-actions">
                    {isSearchOpen ? (
                        <form onSubmit={handleSearch} className="search-form" ref={searchFormRef}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                                autoFocus
                                ref={searchInputRef}
                            />
                            <div className="search-actions">
                                {searchQuery && (
                                    <button type="button" className="icon-btn search-clear" onClick={clearSearch} aria-label="Clear search">
                                        <X />
                                    </button>
                                )}
                                <button type="submit" className="search-submit" aria-label="Search">
                                    <MagnifyingGlass />
                                </button>
                                <button type="button" className="icon-btn" onClick={handleSearchToggle} aria-label="Close search">
                                    <X />
                                </button>
                            </div>
                        </form>
                    ) : (
                        <button className="icon-btn desktop-only" onClick={handleSearchToggle} aria-label="Search">
                            <MagnifyingGlass />
                        </button>
                    )}
                    <button onClick={() => setIsCartOpen(true)} className="icon-btn" aria-label="Cart">
                        <ShoppingBag />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} aria-label="Menu">
                        <List />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-menu-logo">KaribuFits</div>
                    <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
                        <X />
                    </button>
                </div>
                
                <div className="mobile-menu-search">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="icon-btn" aria-label="Search">
                            <MagnifyingGlass />
                        </button>
                    </form>
                </div>
                
                <nav className="mobile-menu-nav">
                    <NavLink to="/category/men" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Men</NavLink>
                    <NavLink to="/category/women" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Women</NavLink>
                    <NavLink to="/category/teens" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Teens</NavLink>
                    <NavLink to="/category/accessories" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Accessories</NavLink>
                </nav>
                
                <div className="mobile-menu-actions">
                    <button onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }} className="icon-btn" aria-label="Cart">
                        <ShoppingBag />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;