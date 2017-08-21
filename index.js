'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();
server.connection({ port: 3000, host: '0.0.0.0' });

server.register({
  register: require('hapi-router'),
  options: {
   routes: 'src/**/routes.js'
  }
 }).then(function() {
    return serverStart()
 })
 function serverStart() {
  if (require.main === module){
    server.start(err => {
      if (err) throw err
      console.log('Servidor iniciando em %s', server.info.uri)
    })
  }else{
    module.exports = server;
  }
 }