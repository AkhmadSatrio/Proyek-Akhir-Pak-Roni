// Delivery.js
import React, { useEffect, useState } from "react";
import "../style/Delivery.css";

const Delivery = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("ordersHistory")) || [];
    setOrders(savedOrders);
  }, []);

  // Hapus riwayat tertentu
  const handleRemoveOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    localStorage.setItem("ordersHistory", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    alert("🗑️ Riwayat pesanan berhasil dihapus!");
  };

  if (orders.length === 0) {
    return <h2 className="not-found">📦 Belum ada riwayat pesanan</h2>;
  }

  return (
    <section className="delivery-container">
      <h2 className="delivery-title">📦 Riwayat Pesanan</h2>

      {orders.map((order) => (
        <div className="delivery-card" key={order.id}>
          <h3>Pesanan #{order.id}</h3>
          <p>📅 Tanggal: {order.date}</p>
          <p>📍 Alamat: {order.address}</p>
          <p>📧 Email: {order.email}</p>
          <p>🚚 Pengiriman: {order.shipping}</p>
          <p>💰 Total: Rp {order.total.toLocaleString()}</p>

          <h4>Produk:</h4>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity}x) - Rp {(item.price * item.quantity).toLocaleString()}
              </li>
            ))}
          </ul>

          <button
            className="remove-button"
            onClick={() => handleRemoveOrder(order.id)}
          >
            ❌ Hapus Riwayat
          </button>
        </div>
      ))}
    </section>
  );
};

export default Delivery;