import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Analytics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products.length) return <p style={{ padding: '2rem' }}>Cargando analítica...</p>;

  // Producto más caro
  const mostExpensive = products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);

  // Conteo de productos por categoría
  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  // Stock total por categoría
  const stockByCategory = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + (p.stock || 0);
    return acc;
  }, {});

  // Datos para el gráfico
  const chartData = {
    labels: Object.keys(stockByCategory),
    datasets: [
      {
        label: 'Stock por categoría',
        data: Object.values(stockByCategory),
        backgroundColor: '#ffe600',
        borderColor: '#3483fa',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h2>Analítica de productos</h2>
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>Producto más caro</h3>
        <p><strong>{mostExpensive.title}</strong> (${mostExpensive.price})</p>
        <img src={mostExpensive.images[0]} alt={mostExpensive.title} width="120" style={{ borderRadius: 8 }} />
      </div>
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>Categorías más populares</h3>
        <ul>
          {Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).map(([cat, count]) => (
            <li key={cat}>{cat}: {count} productos</li>
          ))}
        </ul>
      </div>
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>Disponibilidad total por categoría</h3>
        <ul>
          {Object.entries(stockByCategory).map(([cat, stock]) => (
            <li key={cat}>{cat}: {stock} unidades</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3>Gráfico de stock por categoría</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Analytics;
