# Documentación de Diseño, Desafíos y Tecnologías

## 1. Elección de Diseño

**Arquitectura:**  
El proyecto está dividido en dos partes principales:
- **Frontend (React + Vite):** Permite una experiencia de usuario rápida y moderna, con componentes reutilizables y gestión eficiente del estado global mediante React Context. Vite se eligió por su velocidad de desarrollo y recarga en caliente.
- **Backend (Node.js + Express):** Proporciona una API REST sencilla y eficiente para la gestión de productos, facilitando la integración y escalabilidad.

**Estilos:**  
Se implementaron estilos CSS personalizados inspirados en Mercado Libre, priorizando la claridad visual y la responsividad. Se usaron archivos CSS modulares para mantener el código organizado.

**Testing:**  
- **Frontend:** Se utilizó Jest junto con React Testing Library para pruebas unitarias y de integración de componentes, asegurando la calidad y robustez de la interfaz.
- **Backend:** Se empleó Supertest para pruebas automáticas de los endpoints, garantizando el correcto funcionamiento de la API.
- **Configuración:** Se adaptaron Babel y Jest para soportar JSX y módulos ESM, permitiendo una integración fluida de las tecnologías modernas de JavaScript.

**Versionamiento:**  
Se utilizó Git con autenticación SSH para mayor seguridad y comodidad. El flujo de trabajo se basa en ramas, commits descriptivos y buenas prácticas de colaboración.

## 2. Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes reutilizables y gestión eficiente del estado.
- **Vite:** Herramienta de desarrollo que acelera la construcción y recarga de aplicaciones frontend modernas.
- **Node.js:** Entorno de ejecución para JavaScript en el servidor, ideal para construir APIs rápidas y escalables.
- **Express:** Framework minimalista para Node.js que facilita la creación de servidores y rutas REST.
- **Jest:** Framework de testing para JavaScript, ampliamente usado para pruebas unitarias y de integración.
- **React Testing Library:** Herramienta para probar componentes de React de forma similar a como los usan los usuarios finales.
- **Supertest:** Librería para pruebas automáticas de APIs HTTP en Node.js.
- **Babel:** Compilador que permite usar las últimas características de JavaScript y JSX en entornos que no las soportan nativamente.
- **CSS:** Lenguaje de estilos utilizado para personalizar la apariencia y responsividad de la aplicación.
- **Git + GitHub:** Herramientas para control de versiones, colaboración y despliegue seguro del código.

## 3. Desafíos y Soluciones

**Configuración de Testing:**  
- Problemas de compatibilidad entre Jest, Babel y ESM/JSX.  
  *Solución:* Ajuste de configuraciones y dependencias para soportar JSX y módulos modernos.

**Estilos y Responsividad:**  
- Lograr un diseño atractivo y responsivo similar a Mercado Libre.  
  *Solución:* Uso de CSS modular y pruebas visuales constantes.

**Gestión de Carrito y Estado Global:**  
- Compartir el estado del carrito entre componentes.  
  *Solución:* Implementación de React Context.

**Versionamiento y GitHub:**  
- Problemas de autenticación y push con HTTPS/tokens.  
  *Solución:* Migración a SSH y registro de claves.

**Pruebas Automáticas:**  
- Simulación de interacciones y mockeo de datos en componentes complejos.  
  *Solución:* Uso de React Testing Library y mocks en Jest.

**Documentación y Diagramas:**  
- Requerimiento de documentación clara y diagramas de arquitectura.  
  *Solución:* Creación de README detallado y diagramas en draw.io/XML.

## 4. Arquitectura y Estructura del Proyecto

El proyecto está organizado en dos carpetas principales: `frontend/` y `backend/`.

### Frontend (React + Vite)
- **src/**: Contiene todo el código fuente de la aplicación React.
  - **App.jsx**: Componente principal que define la estructura general y las rutas de la aplicación.
  - **Navbar.jsx**: Barra de navegación superior, permite acceder al carrito y navegar entre secciones.
  - **ProductList.jsx**: Lista de productos, incluye filtros y muestra los productos disponibles.
  - **ProductDetail.jsx**: Muestra información detallada de un producto seleccionado.
  - **Cart.jsx**: Visualiza los productos agregados al carrito, permite modificar cantidades y finalizar compra.
  - **CartContext.jsx**: Implementa el contexto global para gestionar el estado del carrito y sus acciones.
  - **Analytics.jsx**: Componente para mostrar métricas y analítica básica de uso.
  - **assets/**: Imágenes y recursos estáticos.
  - **App.css, meli.css, index.css**: Archivos de estilos para personalizar la apariencia y responsividad.
- **public/**: Archivos estáticos públicos, como el favicon y logos.
- **test/**: Pruebas automáticas de componentes React usando Jest y React Testing Library.

### Backend (Node.js + Express)
- **index.js**: Punto de entrada del servidor Express, define rutas y lógica de negocio para productos.
- **product.json**: Archivo de datos simulado (mock) para los productos.
- **test/product.test.js**: Pruebas automáticas de los endpoints usando Supertest.

### Archivos de Configuración
- **package.json**: Dependencias y scripts de ambos entornos.
- **babel.config.mjs, jest.config.cjs**: Configuración de Babel y Jest para soporte de JSX y ESM.
- **README.md, DOCUMENTACION.md**: Documentación del proyecto, instrucciones y decisiones de diseño.

## 5. Diagrama Visual de Arquitectura

A continuación, se presenta un diagrama de alto nivel que representa la arquitectura del proyecto:

```
+-------------------+         HTTP/API         +-------------------+
|    Frontend       | <----------------------> |     Backend       |
|  (React + Vite)   |                         | (Node.js/Express) |
+-------------------+                         +-------------------+
         |                                              |
         |                                              |
         v                                              v
+-------------------+                         +-------------------+
|  Componentes UI   |                         |   Rutas REST      |
|  (Navbar, Cart,   |                         |   /products, etc. |
|  ProductList, etc)|                         +-------------------+
+-------------------+                         |  product.json     |
         |                                    +-------------------+
         v
+-------------------+
|  Context/Estado   |
|  (CartContext)    |
+-------------------+
```

> Puedes exportar este diagrama a draw.io usando la versión XML incluida en el README.md para una visualización más profesional.

---

## 6. Ejemplo de Uso

### Flujo Básico de Usuario
1. El usuario ingresa a la aplicación y ve la lista de productos.
2. Puede filtrar productos por nombre o categoría.
3. Al hacer clic en un producto, accede a la vista detallada (ProductDetail).
4. Puede agregar productos al carrito desde la lista o el detalle.
5. El carrito (Cart) muestra los productos seleccionados, permite modificar cantidades o eliminar productos.
6. Al finalizar la compra, se muestra un resumen y se limpia el carrito.
7. La sección de Analytics muestra métricas básicas de uso (por ejemplo, productos más vistos o agregados).

### Ejemplo de Código: Uso del Contexto del Carrito
```jsx
import { useContext } from 'react';
import { CartContext } from './CartContext';

function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <button onClick={() => addToCart(product)}>
      Agregar al carrito
    </button>
  );
}
```

---

Estos recursos visuales y ejemplos prácticos complementan la documentación, facilitando la comprensión y el uso del proyecto tanto para desarrolladores como para usuarios finales.

---

Cada componente y archivo cumple una función específica para mantener el código modular, escalable y fácil de mantener. Esta estructura permite separar claramente la lógica de presentación (frontend), la lógica de negocio y datos (backend), y las pruebas automáticas, facilitando el desarrollo colaborativo y la evolución del proyecto.

Este documento resume las decisiones de diseño, tecnologías empleadas y los principales retos enfrentados durante el desarrollo del proyecto e-commerce tipo Mercado Libre.
