import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
  const { cart } = useCart();

  return (
    <header className="meli-header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.1/mercadolibre/logo__large_plus.png"
          alt="Mercado Libre"
          className="meli-logo"
        />
        <Link to="/" className="meli-navbar-link">
          Mercado App
        </Link>
        <Link to="/analytics" className="meli-navbar-link">
          Analítica
        </Link>
      </div>
      <Link to="/cart" className="meli-navbar-link" style={{ position: 'relative' }}>
        🛒 Carrito
        <span style={{
          position: 'absolute',
          top: '-8px',
          right: '-18px',
          background: '#3483fa',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 8px',
          fontSize: '0.9rem',
          fontWeight: 'bold',
        }}>{cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}</span>
      </Link>
    </header>
  );
}

export default Navbar;
