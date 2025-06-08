// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

// Home.jsx
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';

const sampleProducts = [
  {
    id: 1,
    name: 'Kaos Polos Premium',
    description: 'Bahan adem dan nyaman dipakai.',
    price: 89000,
    image: 'https://source.unsplash.com/random/400x300?shirt',
  },
  {
    id: 2,
    name: 'Celana Jeans Slim Fit',
    description: 'Cocok untuk tampilan kasual.',
    price: 149000,
    image: 'https://source.unsplash.com/random/400x300?jeans',
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Produk Terlaris</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

// components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-white/70 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">DAMSSTORE</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-slate-700 hover:text-indigo-600">Login</Link>
          <Link to="/register" className="text-slate-700 hover:text-indigo-600">Daftar</Link>
          <Link to="/checkout" className="bg-emerald-500 text-white px-4 py-2 rounded-xl hover:bg-emerald-600 transition">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// components/ProductCard.jsx
function ProductCard({ product }) {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produk ditambahkan ke keranjang!');
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white border">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-slate-800">{product.name}</h2>
        <p className="text-sm text-slate-600">{product.description}</p>
        <p className="text-lg font-bold text-emerald-600">Rp{product.price.toLocaleString()}</p>
        <button
          onClick={addToCart}
          className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
