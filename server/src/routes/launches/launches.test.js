const request = require('supertest');
const app = require('../../app');
describe('Test GET /launches', () => {
  test('It should responde with 200 success', async () => {
    // supertest is taking the app object that is passed in, calling the listen function on that object, it is now allowing us to make request directly  to the HTTP server, using the get method -> get('/launches'), just like the browser fetch function.
    const response = await request(app)
      .get('/launches')
      // checking the header match JSON.
      // check if it
      .expect('Content-Type', /json/)
      .expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /launch', () => {
  test('It should respond with 200 success', () => {
  });


  test('It should catch missing required prpertise', () => { });
  test('It should catch invalid dates', () => { });
});