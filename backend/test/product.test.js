const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');

// Simula el backend como en index.js
const app = express();
app.get('/api/product', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../product.json'), 'utf-8');
  res.json(JSON.parse(data));
});

describe('GET /api/product', () => {
  it('debe responder con un array de productos', async () => {
    const res = await request(app).get('/api/product');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('title');
  });
});
