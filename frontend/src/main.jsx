// src/main.jsx o index.jsx
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
