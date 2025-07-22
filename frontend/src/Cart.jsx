import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Cart() {
  const { cart, removeFromCart, setCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ address: '', email: '', payment: '' });

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!form.address || !form.email || !form.payment) {
      alert('Por favor completa todos los campos.');
      return;
    }
    alert('¡Gracias por tu compra!');
    setCart([]); // Limpiar el carrito
    navigate('/'); // Redirigir a inicio
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Resumen de tu pedido</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={item.images[0]} alt={item.title} width="80" style={{ objectFit: 'contain', borderRadius: '5px' }} />
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>{item.currency} ${item.price}</p>
                <label>
                  Unidades:
                  <input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.id, Number(e.target.value))} style={{ width: '60px', marginLeft: '0.5rem' }} />
                </label>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>{item.category}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ background: '#ff4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '1rem 0' }}>
        Total: ${total}
      </div>
      <form onSubmit={handleConfirm} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Dirección de envío:
          <input type="text" name="address" value={form.address} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label>
          Método de pago:
          <select name="payment" value={form.payment} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">Selecciona...</option>
            <option value="Tarjeta de crédito">Tarjeta de crédito</option>
            <option value="Tarjeta de débito">Tarjeta de débito</option>
            <option value="Mercado Pago">Mercado Pago</option>
            <option value="PayPal">PayPal</option>
          </select>
        </label>
        <button type="submit" style={{ background: '#3483fa', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default Cart;
