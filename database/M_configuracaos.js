const Sequelize = require('sequelize');
  const connection = require('./database')
  const configuracaos=connection.define('configuracaos',{
     id : {type:int}
usuario : {type:int}
chave_key : {type:text}
user_key : {type:text}
telegram_chave_key : {type:text}
telegram_user_key : {type:text}
ganho : {type:double}
venda : {type:double}
compra : {type:double}
createdAt : {type:datetime}
updatedAt : {type:datetime}

  });
  configuracaos.sync({force:false}).then(() => {});
 module.exports =  configuracaos