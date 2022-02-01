# CrudWizard
crud node.js wizard  mysql sequelize


configure o database.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('trader', 'root', '123456', {dialect: 'mysql', host: 'localhost', logging: false});

module.exports = sequelize;

execute http://127.0.0.1/gerar

e o aplicativo vai gerar os layouts,

projeto ainda esta em andamento.
