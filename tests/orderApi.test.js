const request = require('supertest');
const app = require('../src/app');

describe('Order API', () => {
  it('should return an array of orders', async () => {
    const res = await request(app).get('/api/orders');
    expect(Array.isArray(res.body)).toBe(true);
  });
});
