// src/ProductList.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 999999]);
  const navigate = useNavigate();

  // Cargar productos desde el backend
  useEffect(() => {
    fetch('http://localhost:3000/api/product')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error('Error cargando productos:', err));
  }, []);

  // Obtener categorías únicas
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filtrar productos por búsqueda, categoría y rango de precios
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      (product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        (product.category && product.category.toLowerCase().includes(term))) &&
      (!categoryFilter || product.category === categoryFilter) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  if (!products.length) return <p style={{ padding: '1rem' }}>Cargando productos...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      {/* 🔍 Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos por título, categoría o descripción..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.8rem',
          fontSize: '1rem',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
        <label>
          Filtrar por categoría:
          <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            <option value="">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <label>
          Rango de precios:
          <input type="number" value={priceRange[0]} min="0" onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])} style={{ width: '70px', marginLeft: '0.5rem' }} />
          -
          <input type="number" value={priceRange[1]} min="0" onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])} style={{ width: '70px' }} />
        </label>
      </div>
      {/* 🧱 Grid de productos */}
      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.images[0]}
              alt={product.title}
              style={styles.image}
            />
            <h3 style={styles.price}>USD ${product.price}</h3>
            <p>{product.description}</p>
            <button
              style={styles.button}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    width: '250px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 0 8px rgba(0,0,0,0.05)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
  },
  button: {
    marginTop: '1rem',
    backgroundColor: '#3483fa',
    color: 'white',
    padding: '0.6rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default ProductList;
