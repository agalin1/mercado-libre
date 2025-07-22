const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // AÑADIR ESTO

const app = express();
const PORT = 3000;

app.use(cors()); // AÑADIR ESTO

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola! El backend con Express está funcionando 🛠️');
});

// Ruta para obtener detalles del producto
app.get('/api/product', (req, res) => {
  const filePath = path.join(__dirname, 'product.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    const product = JSON.parse(data);
    res.json(product);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
