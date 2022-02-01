const express = require('express');
const cors    = require('cors')
const app = express();
const connection = require('./database/database')
var conversao= require("./utilitarios/funcoes")
const path = require('path');
const fs = require('fs');
var rotas = require('./rotas');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())
rotas.roteamento(app)
const PORT = process.env.PORT || 80;

connection.authenticate()
    .then(()=>{
        console.log('conecxão feita com sucesso')
    })
    .catch((msgErro => {
        console.log(msgErro)
    }))
    
app.get('/', (req, res) => {    
    var tabelas = [];
    connection.query('SHOW Tables', { type: connection.QueryTypes.SHOWTABLES})
      .then(result => {
        tabelas1= {tabelas: result};           
        res.render('gerador', tabelas1);  
      })        
})


app.get('/gerar', (req, res) => {
  var metodosrotas='';   
  connection.query('SHOW Tables', { type: connection.QueryTypes.SHOWTABLES})
    .then(result => {      
      tabelas1= {tabelas: result};            
      tabelas1.tabelas.forEach((tag) => {                        
          var nometabela = tag;
          metodosrotas+= 
`.get('/${nometabela}', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/${nometabela}', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/${nometabela}', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/${nometabela}', (req, res) => {  
    executaracao(req.url,req,res) 
  })`          
  connection.query('SHOW COLUMNS FROM '+nometabela, { type: connection.QueryTypes.SELECT})
            .then(result => {          
                obj = {tabelas: result};              
              conversao.retornaEjs(nometabela,obj);              
            })             
      })        
    rotas = 
`
function executaracao(url,req, res){ 
  var sformulario = url.replace('/','')     
  if (req.method == 'POST') {
    console.log(req.body)    
    res.json(url)
  } else if (req.method == 'GET') {    
    res.render(sformulario);        
  }
}    
function roteamento(app) {
app
${metodosrotas}} 
module.exports = {roteamento};`
     
    var paths="C:/Users/Developers Sistemas/Desktop/Node/gerarcrud/rotas.js";
      fs.writeFile(paths, rotas, (err) => {
        if (err) throw err;
        console.log('O arquivo foi criado!:'+paths);
      });
      res.render('gerador', tabelas1);           
    })
    
})


app.listen(PORT, () => {
    console.log('`Aplicação rodando!:'+PORT);
});