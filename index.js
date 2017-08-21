const server = require('./src/server');

(function serverStart() {
  // if (require.main === module){
  server.start(err => {
    if (err) throw err;
    console.log('Servidor iniciando em %s', server.info.uri);
  });
  
  // }else{
  //   module.exports = server;
  // }
  //module.exports = server;
}())
