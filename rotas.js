
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
.get('/articles', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/articles', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/articles', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/articles', (req, res) => {  
    executaracao(req.url,req,res) 
  }).get('/categories', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/categories', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/categories', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/categories', (req, res) => {  
    executaracao(req.url,req,res) 
  }).get('/configuracaos', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/configuracaos', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/configuracaos', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/configuracaos', (req, res) => {  
    executaracao(req.url,req,res) 
  }).get('/moedas', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/moedas', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/moedas', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/moedas', (req, res) => {  
    executaracao(req.url,req,res) 
  }).get('/new_table', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/new_table', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/new_table', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/new_table', (req, res) => {  
    executaracao(req.url,req,res) 
  }).get('/users', (req, res) => {      
    executaracao(req.url,req,res)       
  })
  .post('/users', (req, res) => {    
    executaracao(req.url,req,res)        
  })
  .delete('/users', (req, res) => {  
    executaracao(req.url,req,res)       
  })
  .put('/users', (req, res) => {  
    executaracao(req.url,req,res) 
  })} 
module.exports = {roteamento};