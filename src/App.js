import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Selamat datang di Toko Buku Oak!</h1>
        <p className="mt-2 text-gray-700">Temukan buku favoritmu dengan nuansa hangat kayu oak.</p>
      </main>
    </div>
  );
}

export default App;