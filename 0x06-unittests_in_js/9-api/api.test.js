const request = require('supertest');
const app = require('./api');

describe('GET /cart/:id', () => {
  test('Valid ID should return 200 and the correct response', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Payment methods for cart 12');
  });

  test('Invalid ID should return 404', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.status).toBe(404);
    expect(response.text).toContain('Cannot GET /cart/hello');
  });
});

