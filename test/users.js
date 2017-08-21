'use strict';

const lab = (exports.lab = require('lab').script());
const { expect } = require('code');
const server = require('../src/server');

lab.describe('Testes da resource user', () => {
  lab.test('Deve retornar com {sucess:true} ', () => {
    return server
      .inject({
        method: 'POST',
        url: '/api/v1/users/',
        payload: {
          username: 'douglas',
          password: 'pass'
        }
      })
      .then(res => {
        expect(res.statusCode).to.equal(200);
        expect(res.result).to.equal({ sucess: true });
      });
  });
});
