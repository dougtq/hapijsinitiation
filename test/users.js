'use strict';

const lab = (exports.lab = require('lab').script());
const { expect } = require('code');
const server = require('../src/server');

lab.describe('Testes da resource user', () => {
  lab.test('Deve retornar com {sucess:true} ', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/api/v1/users/',
      payload: {
        username: 'douglas',
        password: 'pass'
      }
    });

    expect(res.statusCode).to.equal(200);
    expect(res.result).to.equal({ sucess: true });
  });
});

lab.test('Deve retornar com { msg : Usuário já existente} ', async () => {
  const res = await server.inject({
    method: 'POST',
    url: '/api/v1/users/',
    payload: {
      username: 'doug',
      password: 'pass'
    }
  }).then(res => {
    expect(res.statusCode).to.equal(422);
    expect(res.result.message).to.equal('Usuário já existente');
  })
});
