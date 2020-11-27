require('dotenv').config();
const MongoCliente = require('mongodb').MongoClient;
const url = process.env.URL_DB;

const create = (req, res) => {
  try {
    MongoCliente.connect(url, (error, database) => {
      if (error) {
        return res.send({
          message: error,
          status: 500,
        });
      }
      const databank = database.db("fixcit-main");
      const newUser = {
          "login": "user#" + req.body.login,
          "password": "code#" + req.body.password,
          "cpf": req.body.cpf,
          "full_name" : req.body.full_name,
          "phone_number" : req.body.phone_number,
          "address" : req.body.address
      };
      const postUser = databank.collection("user-civil").insertOne(newUser, (error, res) => {
        if (error) {
          return res.send({
            message: error,
            status: 500,
          });
        }
        res.locals = {
          ...res.locals,
          data: postUser,
          status: 201,
        };
        database.close();
      });
  });
  } catch (error) {
    return res.send({
      message: error.message,
      status: 500,
    });
  }
}

const detail = (req, res) => {
  try {
    MongoCliente.connect(url, (error, database) => {
      if (error) {
          return res.send({
            message: error,
            status: 500,
          });
        }
      const dbo = database.db("mydb");
      const query = {
          "login": "user#" + req.body.login,
          "password" : "code#" + req.body.password
      };
      dbo.collection("user-civil").find(query).toArray((err, result) => {
        if (error) {
          return res.send({
            message: error,
            status: 500,
          });
        }
        db.close();
        return res.locals = {
          ...res.locals,
          data: result,
          status: 200,
        };
      });
  });
  } catch (error) {
    return res.send({
      message: error.message,
      status: 500,
    });
  }
}

module.exports = {
  detail,
  create,
};
