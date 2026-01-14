import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <CartDrawer />
            <main style={{ minHeight: '80vh', paddingTop: 'var(--header-height)' }}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
