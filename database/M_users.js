const Sequelize = require('sequelize');
  const connection = require('./database')
  const users=connection.define('users',{
     id : {type:int}
email : {type:varchar(255)}
password : {type:varchar(255)}
createdAt : {type:datetime}
updatedAt : {type:datetime}

  });
  users.sync({force:false}).then(() => {});
 module.exports =  users