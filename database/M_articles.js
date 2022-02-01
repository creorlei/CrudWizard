const Sequelize = require('sequelize');
  const connection = require('./database')
  const articles=connection.define('articles',{
     id : {type:int}
title : {type:varchar(255)}
slug : {type:varchar(255)}
body : {type:text}
createdAt : {type:datetime}
updatedAt : {type:datetime}
categoryId : {type:int}

  });
  articles.sync({force:false}).then(() => {});
 module.exports =  articles