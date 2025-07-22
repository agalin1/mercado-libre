import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from '../src/ProductDetail';
import { CartProvider } from '../src/CartContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// Mock fetch
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 'a55-5g-256gb',
          title: 'Samsung Galaxy A55',
          price: 439,
          currency: 'USD',
          description: 'Celular de prueba',
          category: 'Celulares',
          features: {
            screen_size: '6.6"',
            internal_memory: '256 GB',
            main_camera: '50 Mpx',
            front_camera: '32 Mpx',
            nfc: true
          },
          images: ['test.jpg'],
          stock: 10,
          seller: {
            name: 'Samsung',
            is_official_store: true,
            rating: '5 mil ventas',
            shipping: 'Envío gratis'
          },
          payment_methods: ['Visa']
        }
      ])
    })
  );
});

afterAll(() => {
  global.fetch.mockRestore();
});

test('Muestra detalles del producto', async () => {
  render(
    <CartProvider>
      <MemoryRouter initialEntries={["/product/a55-5g-256gb"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    </CartProvider>
  );
  expect(await screen.findByText(/Samsung Galaxy A55/i)).toBeInTheDocument();
  expect(screen.getByText(/USD \$439/i)).toBeInTheDocument();
  expect(screen.getByText(/Celular de prueba/i)).toBeInTheDocument();
});
