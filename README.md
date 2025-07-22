# 🛒 Mercado App

Aplicación web de e-commerce inspirada en Mercado Libre. Permite visualizar productos, aplicar filtros por categoría y rango de precios, agregar productos al carrito de compras y navegar entre sus detalles.

## 🚀 Tecnologías utilizadas

- **Frontend:** React + Vite + React Router DOM
- **Backend:** Node.js + Express
- **Estilos:** CSS puro / inline styles
- **Persistencia del carrito:** LocalStorage

## 📦 Instalación y ejecución

### 🔧 Backend (Express)

```bash
cd backend
npm install
npm start
```
Corre en http://localhost:3000

### 💻 Frontend (React)

```bash
cd frontend
npm install
npm run dev
```
Corre en http://localhost:5173

## 🧪 Testing

- **Frontend:**
  ```bash
  cd frontend
  npm test
  ```
- **Backend:**
  ```bash
  cd backend
  npm test
  ```

## 🔗 Endpoints API

- `GET /api/product`: Devuelve la lista de productos

## 🧹 Funcionalidades implementadas

- ✅ Listado de productos desde archivo JSON en backend
- ✅ Página de detalle de cada producto
- ✅ Filtro de búsqueda por título, categoría y descripción
- ✅ Filtro por categoría y rango de precios
- ✅ Carrito de compras con selector de unidades
- ✅ Contador dinámico de productos en el carrito
- ✅ Simulación de botón "Ir a pagar"
- ✅ Diseño visual inspirado en Mercado Libre (logo, colores)

## 🛠️ Estructura de carpetas

```
├── backend
│   ├── index.js
│   ├── product.json
│   └── test
│       └── product.test.js
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartContext.jsx
│   │   ├── Analytics.jsx
│   │   └── assets
│   ├── public
│   ├── test
│   │   └── ProductDetail.test.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── babel.config.mjs
│   ├── jest.config.cjs
│   └── README.md
```

## 📊 Supuestos

- Los productos están predefinidos en un archivo JSON simulado
- No se integran métodos de pago reales, se simula la experiencia
- Se eligió un diseño visual cercano a Mercado Libre para mayor familiaridad

## 📌 Posibles mejoras futuras

- Implementar autenticación y usuarios
- Guardar carrito de forma persistente por usuario
- Agregar pasarela de pagos real
- Añadir ratings y comentarios de productos

## 🧩 Dependencias principales

- React, React DOM, React Router DOM
- Vite
- Express
- Jest, React Testing Library, Supertest

## 🐞 Problemas conocidos

- El backend no tiene persistencia real ni autenticación
- El frontend simula el pago y la persistencia del carrito

## 🤝 Contribución

¡Contribuciones y sugerencias son bienvenidas! Puedes abrir issues o pull requests.

## 📄 Licencia

MIT

## 👨‍💻 Autor

Andres Javier Galindo Vargas

Proyecto desarrollado como reto técnico.

## 📬 Contacto

andres.galindo@email.com
