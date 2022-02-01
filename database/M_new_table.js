const Sequelize = require('sequelize');
  const connection = require('./database')
  const new_table=connection.define('new_table',{
     teswt : {type:int}

  });
  new_table.sync({force:false}).then(() => {});
 module.exports =  new_table