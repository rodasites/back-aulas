var express = require('express');
var app = express();
var http = require('http').Server(app);
var debug = require('debug')
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var profissao = require('../domain/profissao/profissao.routes')
var cadastro = require('../domain/cadastro/cadastro.routes')

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/profissoes/', profissao);
app.use('/api/cadastro/', cadastro);

http.listen(3000, () => {
    console.log('started on port 3000');
  });

  http.on('error', onError);
  http.on('listening', onListening);
  
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  function onListening() {
    var addr = http.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  
  module.exports = app;