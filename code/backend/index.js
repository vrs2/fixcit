// Definição de variáveis e clientes usados para conexão
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fixcit-main";
const express = require('express');
const app = express();
const port = 8080;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Cria usuário do cliente
app.put('/user', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var databank = db.db("fixcit-main");
        var putobj = { 
            "login": "user#" + req.body.email,
            "password": "code#" + req.body.senha,
            "cpf": req.body.cpf,
            "full_name" : req.body.nome_completo,
            "phone_number" : req.body.telefone_numero,
            "address" : req.body.endereco
        };
        databank.collection("user-civil").insertOne(putobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
    res.send("User"+req.body.nome_completo+"added!")
  })

//Pesquisa usuário do cliente e retorna uma lista com um objeto ou uma lista vazia

app.post('/user', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = {
            "login": "user#" + req.body.login,
            "password" : "code#" + req.body.senha
        };
        dbo.collection("user-civil").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result)
          db.close();
        });
      });
})

//Listen do servidor do Express

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})