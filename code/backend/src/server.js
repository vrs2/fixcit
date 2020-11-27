require('dotenv').config();

const app = require('./app');

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`);
});
