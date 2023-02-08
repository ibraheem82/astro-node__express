const request = require('supertest');
    // getting all our express middleware
const app = require('../../app');
describe('Test GET /launches', () => {
  test('It should responde with 200 success', async () => {
    // supertest is taking the app object that is passed in, calling the listen function on that object, it is now allowing us to make request directly  to the HTTP server, using the get method -> get('/launches'), just like the browser fetch function.
    // getting all our express middleware

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

  const completeLaunchData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
        launchDate: 'January 4, 2046',
  }

  const launchDataWithoutDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
  }

  test('It should respond with 201 created',async () => {
    // getting all our express middleware
    const response = await request(app)
      .post('/launches')
      // to send some datas
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);
    
    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    // To make sure that they are equal.
    expect(responseDate).toBe(requestDate);
      expect(response.body).toMatchObject(launchDataWithoutDate);
  });


  test('It should catch missing required prpertise', () => { });
  test('It should catch invalid dates', () => { });
});