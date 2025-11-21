import React from 'react';
import '../style/Nav.css'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">📚 Toko Buku Saya</div>
     <ul className="nav-links">
      <li><Link to="/">Beranda</Link></li>
      <li><Link to="/store">Store</Link></li>
      <li><Link to="/kontak">Kontak</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/cart">Delivery</Link></li>
    </ul>
    </nav>
  );
};

export default Nav;