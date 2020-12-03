const axios = require('axios');
const expect = require('chai').expect;
const app = require('../app.js');

describe('Сервер корректно отвечает на GET-запросы', () => {
  let server;

  before((done) => {
    server = app.listen(3000, done);
  });

  after((done) => {
    server.close(done);
  });

  it('По умолчанию сервер отвечает "Hello world!"', async () => {
    const response = await axios.get('http://127.0.0.1:3000');
    expect(response.data).to.equal('Hello world!');
  });
})
