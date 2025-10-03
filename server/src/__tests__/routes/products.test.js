import request from 'supertest';
import app from '../../app.js';

describe('Products API', () => {
  describe('GET /api/products', () => {
    it('should return all products with success status', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data.length).toBeGreaterThan(0);
      expect(response.body.count).toBeGreaterThan(0);
    });

    it('should return products with correct structure', async () => {
      const response = await request(app).get('/api/products').expect(200);

      const products = response.body.data;
      const firstProduct = products[0];

      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('name');
      expect(firstProduct).toHaveProperty('price');
      expect(firstProduct).toHaveProperty('imageUrl');
      expect(firstProduct).toHaveProperty('description');
      expect(firstProduct).toHaveProperty('category');

      expect(typeof firstProduct.price).toBe('number');
      expect(firstProduct.price).toBeGreaterThan(0);
    });
  });

  describe('GET /api/products/:id', () => {
    it('should return a single product by ID', async () => {
      const response = await request(app)
        .get('/api/products/1')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id', '1');
    });

    it('should return 404 for non-existent product', async () => {
      const response = await request(app)
        .get('/api/products/999')
        .expect('Content-Type', /json/)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('not found');
    });
  });
});
