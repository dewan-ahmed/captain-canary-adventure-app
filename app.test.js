const request = require('supertest');
const app = require('./app.js'); 

describe('Express App', () => {
  it('200ok', async () => {
   const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('correctHTML', async () => {
     const response = await request(app).get('/');
    expect(response.text).toContain('Captain Canary\'s Adventures');
    expect(response.text).toContain('Pod Name:');
  });
});
