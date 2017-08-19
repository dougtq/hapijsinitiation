'use strict';
const Boom = require('boom');


exports.create = (request, reply) =>{
  const { username, password } = request.payload;

  if ( username === 'doug') {
    return reply(Boom.badData('Usuário já existente'));
  }

  return reply({ sucess : true });

};