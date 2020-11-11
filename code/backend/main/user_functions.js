// Definição de variáveis e clientes usados para conexão com o BD
var MongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fixcit-main";

//Funções do CRUD do user

//Função para cadastrar usuário no sistema
function put_user(event_body) {
    MongoCliente.connect(url, function(err, db) {
        if (err) throw err;
        var databank = db.db("fixcit-main");
        var putobj = { 
            "login": "user#" + event_body.email,
            "password": "code#" + event_body.senha,
            "cpf": event_body.cpf,
            "full_name" : event_body.nome_completo,
            "phone_number" : event_body.telefone_numero,
            "address" : event_body.endereco
        };
        databank.collection("user-civil").insertOne(putobj, function(err, res) {
          if (err) throw err;
          console.log("1 user inserted");
          db.close();
        });
    });
}

//Função para obter usuário no sistema
function get_user(event_body) {
    MongoCliente.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = {
            "login": "user#" + event_body.login,
            "password" : "code#" + event_body.senha
        };
        dbo.collection("user-civil").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
          return result
        });
    });
}