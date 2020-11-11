// Definição de variáveis e clientes usados para conexão
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fixcit-main";
const express = require('express');
const app = express();
const port = 8080;
var bodyParser = require('body-parser');
import './user_functions.js'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Cria usuário do cliente
app.put('/user', (req, res) => {
  let event_body = req.body;
  put_user(event_body);
  res.send("User"+req.body.nome_completo+"added!")
})

//Pesquisa usuário do cliente e retorna uma lista com um objeto ou uma lista vazia

app.post('/user', (req, res) => {
  let event_body = req.body;
  let query_result = get_user(event_body);
  res.send(query_result)
})

//Listen do servidor do Express

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})