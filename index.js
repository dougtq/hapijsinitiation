'use strict';

const Hapi = require('hapi');
const app = new Hapi.Server();
let nome = 'User';

app.connection({ port: 3000, host: '0.0.0.0' });

app.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) =>
    reply({
      message : 'Hello World'
    })
});

app.route({
  method: 'GET',
  path: `/${nome}`,
  handler: function(request, reply) {
    reply({ message: `Hello, ${nome}!` });
  }
});

server.register(require('inert'), err => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
      reply.file('');
    }
  });
});

app.start(err => {
  if (err) return err;
  console.log('Servidor iniciado com sucesso na %s', app.info.uri);
});
