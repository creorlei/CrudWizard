const Sequelize = require('sequelize');
  const connection = require('./database')
  const moedas=connection.define('moedas',{
     id : {type:int}
usuario : {type:int}
par : {type:text}
qtde : {type:double}
descricao : {type:text}
vcompra : {type:double}
vvenda : {type:double}
createdAt : {type:datetime}
updatedAt : {type:datetime}
teste : {type:double}

  });
  moedas.sync({force:false}).then(() => {});
 module.exports =  moedas