import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramLogo, TwitterLogo, FacebookLogo } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>KaribuFits</h3>
                    <p>Elevating your style with premium essentials. Curated for the modern individual.</p>
                </div>

                <div className="footer-col">
                    <h4>Shop</h4>
                    <nav className="footer-links">
                        <Link to="/category/men">Men</Link>
                        <Link to="/category/women">Women</Link>
                        <Link to="/category/teens">Teens</Link>
                        <Link to="/category/accessories">Accessories</Link>
                    </nav>
                </div>

                <div className="footer-col">
                    <h4>Support</h4>
                    <nav className="footer-links">
                        <Link to="/faq">FAQ</Link>
                        <Link to="/shipping">Shipping & Returns</Link>
                        <Link to="/track-order">Track My Order</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </nav>
                </div>

                <div className="footer-col">
                    <h4>Stay in the loop</h4>
                    <p className="text-muted text-sm">Subscribe to receive exclusive offers and updates.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email" className="newsletter-input" />
                        <button type="submit" className="newsletter-btn">Join</button>
                    </form>
                    <div className="flex" style={{ gap: '1rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>
                        <InstagramLogo className="hover-accent cursor-pointer" />
                        <TwitterLogo className="hover-accent cursor-pointer" />
                        <FacebookLogo className="hover-accent cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} KaribuFits. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
