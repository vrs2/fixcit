const express = require('express');
const cors = require('cors');

const routes = require('./routes');

class Application {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  };

  middlewares() {
  this.express.use(cors())
  this.express.use(express.urlencoded({ extended:true }))
  };

  routes() {
    this.express.use(routes);
  };

};

module.exports = new Application().express;
