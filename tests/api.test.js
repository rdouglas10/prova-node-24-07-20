require('dotenv').config();
const mongoose = require('mongoose');
const personController = require('../controllers/PersonController');

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV };

});

describe('Testing api method', () => {
  test('Method add_person', async () => {
  	// TO DO
    // const dados = {}
    // const returns = personController.addPerson(dados)
    // expect().toBe(400);
  });

});
afterAll(async () => {
  process.env = OLD_ENV;
  await mongoose.connection.close();
});