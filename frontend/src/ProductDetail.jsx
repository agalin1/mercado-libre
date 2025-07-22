import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/product')
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === id);
        setProduct(foundProduct);
        if (foundProduct?.images?.length > 0) {
          setMainImage(foundProduct.images[0]);
        }
      })
      .catch((err) => console.error('Error cargando el producto:', err));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return <p style={{ padding: '1rem' }}>Cargando producto...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.title}</h1>
      <h2>
        {product.currency} ${product.price}
      </h2>
      <button
        onClick={handleAddToCart}
        className="meli-btn-primary"
        style={{ marginBottom: '1rem' }}
      >
        Agregar al carrito
      </button>
      {added && (
        <div style={{ color: 'green', marginBottom: '1rem' }}>
          ¡Producto agregado al carrito!
        </div>
      )}
      <p>{product.description}</p>

      <div>
        <strong>Galería:</strong>
        <div style={{ marginBottom: '1rem' }}>
          <img
            src={mainImage}
            alt="Producto principal"
            style={{ width: '300px', height: '300px', objectFit: 'contain' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Vista ${i + 1}`}
              width="80"
              style={{
                cursor: 'pointer',
                border: mainImage === img ? '2px solid #3483fa' : '1px solid #ccc',
                borderRadius: '5px',
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <strong>Características:</strong>
        <ul>
          <li>Pantalla: {product.features.screen_size}</li>
          <li>Memoria: {product.features.internal_memory}</li>
          <li>Cámara principal: {product.features.main_camera}</li>
          <li>Cámara frontal: {product.features.front_camera}</li>
          <li>NFC: {product.features.nfc ? 'Sí' : 'No'}</li>
        </ul>
      </div>

      <div>
        <strong>Vendedor:</strong>
        <p>
          {product.seller.name} {product.seller.is_official_store && '🏬'}
        </p>
        <p>{product.seller.rating}</p>
        <p>{product.seller.shipping}</p>
      </div>

      <div>
        <strong>Métodos de pago:</strong>
        <ul>
          {product.payment_methods.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;