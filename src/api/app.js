const express = require('express');
const bodyParser = require('body-parser');
const routerUsers = require('../routers/userRouters');

const app = express();
app.use(bodyParser.json());

app.use('/users');

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
