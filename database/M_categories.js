const Sequelize = require('sequelize');
  const connection = require('./database')
  const categories=connection.define('categories',{
     id : {type:int}
title : {type:varchar(255)}
slug : {type:varchar(255)}
createdAt : {type:datetime}
updatedAt : {type:datetime}

  });
  categories.sync({force:false}).then(() => {});
 module.exports =  categories