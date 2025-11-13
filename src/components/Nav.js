import React from 'react';
import '../style/Nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">📚 Toko Buku Saya</div>
      <ul className="nav-links">
        <li><a href="/">Beranda</a></li>
        <li><a href="/kontak">Kontak</a></li>
      </ul>
    </nav>
  );
};

export default Nav;