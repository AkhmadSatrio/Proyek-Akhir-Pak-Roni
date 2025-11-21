// Cart.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedItems);
  }, []);

  // Hapus produk tertentu
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    alert("🗑️ Produk berhasil dihapus dari keranjang!");
  };

const handleConfirm = () => {
  if (!address || !email || !shipping) {
    alert("⚠️ Lengkapi alamat, email, dan pilih metode pengiriman!");
    return;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Buat objek pesanan
  const order = {
    id: Date.now(), // ID unik
    items: cartItems,
    total,
    address,
    email,
    shipping,
    date: new Date().toLocaleString(),
  };

  // Simpan ke history
  const history = JSON.parse(localStorage.getItem("ordersHistory")) || [];
  history.push(order);
  localStorage.setItem("ordersHistory", JSON.stringify(history));

  alert(
    `✅ Pesanan Anda berhasil dikonfirmasi.\n` +
    `Jumlah produk: ${cartItems.length}\n` +
    `Total harga: Rp ${total.toLocaleString()}\n` +
    `Alamat: ${address}\n` +
    `Email: ${email}\n` +
    `Metode pengiriman: ${shipping}`
  );

  // Kosongkan keranjang
  localStorage.removeItem("cartItems");

  // Arahkan ke halaman Delivery
  navigate("/delivery");
};

  if (cartItems.length === 0) {
    return <h2 className="not-found">🛒 Keranjang kosong</h2>;
  }

  return (
    <section className="cart-container">
      <h2 className="cart-title">🛒 Keranjang Belanja</h2>

      {cartItems.map((item) => (
        <div className="cart-card" key={item.id}>
          <img
            src={item.img}
            alt={`Cover buku ${item.name}`}
            className="cart-image"
          />
          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>Kategori: {item.type}</p>
            <p>Harga: Rp {item.price.toLocaleString()}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: Rp {(item.price * item.quantity).toLocaleString()}</p>
          </div>
          <button
            className="remove-button"
            onClick={() => handleRemove(item.id)}
          >
            ❌ Hapus
          </button>
        </div>
      ))}

      {/* Form alamat & email */}
      <div className="order-info">
        <h4>Data Pemesan:</h4>
        <label>
          📍 Alamat:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Masukkan alamat lengkap"
          />
        </label>
        <label>
          📧 Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </label>
      </div>

      {/* Pilihan pengiriman */}
      <div className="shipping-options">
        <h4>Pilih Metode Pengiriman:</h4>
        <label>
          <input
            type="radio"
            name="shipping"
            value="Pengiriman 3 Hari"
            onChange={(e) => setShipping(e.target.value)}
          />
          🚚 Pengiriman 3 Hari
        </label>
        <label>
          <input
            type="radio"
            name="shipping"
            value="Pengiriman 7 Hari"
            onChange={(e) => setShipping(e.target.value)}
          />
          📦 Pengiriman 7 Hari
        </label>
      </div>

      <button className="confirm-button" onClick={handleConfirm}>
        ✅ Konfirmasi Pesanan
      </button>
    </section>
  );
};

export default Cart;