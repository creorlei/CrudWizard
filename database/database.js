const Sequelize = require('sequelize');
const sequelize = new Sequelize('trader', 'root', '123456', {dialect: 'mysql', host: 'localhost', logging: false});

module.exports = sequelize;
