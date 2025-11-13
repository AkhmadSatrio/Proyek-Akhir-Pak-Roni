import React from "react";
import "../style/Kontak.css";

export default function Kontak() {
  return (
    <div className="kontak-container">
      <div className="kontak-card">
        <h2>Kontak Saya</h2>
        <div className="kontak-grid">
          <div>👤 Nama</div>
          <div>Akhmad Satrio Cahyo Pratama</div>

          <div>📧 Email</div>
          <div>akhmadsatrio037@gmail.com</div>

          <div>📱 No. HP</div>
          <div>+62 812-1606-4499</div>

          <div>📸 Instagram</div>
          <div>Rahasia</div>
        </div>
      </div>
    </div>
  );
}