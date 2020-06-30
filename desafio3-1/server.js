const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//puxa arquivos css e js para pags
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express:server
})

//rotas. Seta caminho e então função quando caminho estabelecido
server.get('/',function(req,res){
    return res.render("desafio2-3")
})

server.get('/conteudo', function(req,res){
    return res.render("desafio2-3_conteudo")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

//ativa servidor para ouvir canal 5000 e retorna função quando ok
server.listen(5001,function(){
    console.log('server running')
})
