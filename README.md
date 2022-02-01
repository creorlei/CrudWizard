creorlei@gmail.com
# CrudWizard
crud node.js wizard  mysql sequelize


configure o database.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('trader', 'root', '123456', {dialect: 'mysql', host: 'localhost', logging: false});

module.exports = sequelize;

execute http://127.0.0.1/gerar

e o aplicativo vai gerar os layouts,

projeto ainda esta em andamento.


ola, amigos. terminei um layout de um winzard de crud, vc pega o seu banco de dados, configura e o sistema(projeto aqui) cria um crud completo para vc. todas as tabelas do seu banco de dados. Alguém pode me ajudar a dar uma melhorada. E me ajudar a publicar no git. E um projeto q estou utilizando para aprender node. Desde ja agradeço quem tiver um tempinho. vou subir o projeto para o git. primeiro projeto.

https://github.com/creorlei/CrudWizard

Objetivos melhorar o projeto.
aprender a fazer o upload direto no vscode.
