import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, User, MagnifyingGlass } from '@phosphor-icons/react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    KaribuFits
                </Link>

                <nav className="navbar-links">
                    <NavLink to="/category/men" className="nav-link">Men</NavLink>
                    <NavLink to="/category/women" className="nav-link">Women</NavLink>
                    <NavLink to="/category/teens" className="nav-link">Teens</NavLink>
                    <NavLink to="/category/accessories" className="nav-link">Accessories</NavLink>
                </nav>

                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Search">
                        <MagnifyingGlass />
                    </button>
                    <Link to="/profile" className="icon-btn" aria-label="Account">
                        <User />
                    </Link>
                    <button onClick={() => setIsCartOpen(true)} className="icon-btn" aria-label="Cart">
                        <ShoppingBag />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
