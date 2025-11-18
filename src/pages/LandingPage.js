import React from 'react';
import '../style/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="hero">
        <h1>📚 Selamat Datang di Toko Buku Saya</h1>
        <p>Temukan buku terbaik dari novel klasik hingga ilmu pengetahuan modern.</p>
        <div className="cta-group">
          <a href="/Store" className="cta-button">Masuk ke Toko</a>
        </div>
      </section>

      <section className="kategori" id="kategori">
        <h2>Kategori Populer</h2>
        <div className="kategori-list">
          <span>📖 Novel</span>
          <span>🧠 Psikologi</span>
          <span>🔬 Sains</span>
          <span>🏛️ Sejarah</span>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;