const fs = require('fs');
const path = require('path');
/*unction retornaTipo(Type){
    switch(Type) {
        case :'datetime':
}
*/

function retornaJS(nometabela,sinputs){

}
function retornaEjs(nometabela,colunas){
    var sinputs ='';
    var campos ='';
    //console.log(colunas)
    colunas.tabelas.forEach((tag) => {              
      sinputs += `<div class="form-group col-md-2">
      <label ="edt${tag.Field}">${tag.Field}</label>
      <input CLASS="form-control" ID="edt${tag.Field}"  name="${tag.Field}" data-fieldname="${tag.Field}" data-type="${tag.Type}" placeholder="${tag.Field}"  value="${tag.Field}" TYPE="text" data-gravar=1> 		          
      </div>`
      campos +=`${tag.Field} : {type:${tag.Type}}\r\n`
      //{fieldname:'categoryId',datatype:'int', valor:"categoryId"}                 
  })     
  var modelo=`const Sequelize = require('sequelize');
  const connection = require('./database')
  const ${nometabela}=connection.define('${nometabela}',{
     ${campos}
  });
  ${nometabela}.sync({force:false}).then(() => {});
 module.exports =  ${nometabela}`

/*
titulo    : { type : Sequelize.STRING(20), c:false},
descricao : { type : Sequelize.TEXT, allowNul:false}    
*/    
var ejs = `<%- include('partials/header'); -%>
<body>
    <%- include('partials/navbar'); -%>     
    <div class="container">        
        <form id='dados' onsubmit="enviarsubmit(); return false;">         
        <label for="story">Propriedades 1 ${nometabela} </label>
        <div class="row">  
        ${sinputs}            
        <button class="btn btn-success">Salvar</button>        
        </div>
        </form>            
    </div>
    <script>    
      function enviarsubmit()     
      {    
          var data =  document.querySelectorAll('input[type=text]');        
          var jJSON={inputs:[]}          
          for (i=0;i<data.length;i++)
          {
            var str=data[i];                        
            jJSON.inputs.push({
                  "id"   : str.id,
                  "valor": document.querySelector('[id="'+str.id+'"]').value,
                  "type" : str.type,
                  "fieldname":str.getAttribute('data-fieldname'),
                  "gravar" :str.getAttribute('data-gravar')
                })            
          }                   
          console.log(jJSON);                              
          axios.post('/${nometabela}', jJSON)          
          .then(req=>{ 'console.log(req)'  })
          .catch(error => {console.log(error)})  
      }                    

    </script>
</body>
<%- include('partials/footer'); -%>`
var paths="C:/Users/Developers Sistemas/Desktop/Node/gerarcrud/views/"+nometabela+".ejs";

fs.writeFile(paths, ejs, (err) => {
    if (err) throw err;
  //console.log('O arquivo foi criado!:'+paths);
});
var paths="C:/Users/Developers Sistemas/Desktop/Node/gerarcrud/database/M_"+nometabela+".js";
fs.writeFile(paths, modelo, (err) => {
    if (err) throw err;
  //console.log('O arquivo foi criado!:'+paths);
});
return '';
}


module.exports = {retornaEjs};