import './meli.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';      // Página principal con todos los productos
import ProductDetail from './ProductDetail';  // Vista de un solo producto
import Cart from './Cart'; // Importar el componente de carrito
import Navbar from './Navbar'; // Importar Navbar
import Analytics from './Analytics'; // Importar Analytics

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
