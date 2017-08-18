'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
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

app.route({
  method : 'POST',
  path : '/api/v1/teste/{name}',
  handler: function(request, reply) {
    reply({
      reply : `${request.params.name} ${request.payload.surname}`
    });
  }, config : {
    validate : {
      params : {
        name: Joi.string().required()
      },
      payload : Joi.object({
        surname : Joi.string().min(3).max(40).required()
      })
    }
  }
});


app.route({
  method : 'PUT',
  path : '/teste/:id',
  handler: function(request, reply) {

  }
});

app.register(require('inert'), err => {
  if (err) {
    throw err;
  }

  app.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
      reply.file('src/views/index.html', (err) =>{
        if (err) return console.log(err);

      });
    }
  });
});

app.start((err) => {
  if (err) return console.log(err);
  console.log('Servidor iniciado com sucesso na %s', app.info.uri);
});
