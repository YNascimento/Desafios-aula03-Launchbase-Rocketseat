const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cursos = require('./data_cursos')

//puxa arquivos css e js para pags
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express:server,
    autoescape:false
})

//rotas. Seta caminho e então função quando caminho estabelecido
server.get('/',function(req,res){
    const data = {
        avatar_url: 'https://avatars2.githubusercontent.com/u/9818768?s=400&u=2e058ed8be6fbf04faa05ab650936cfec806819c&v=4',
        name: 'Yuyu Delícia',
        role: 'General Intergalático ultrassônico',
        description: 'Infiltrado secretamente na vida dos habitantes do planeta terra para absorver conhecimenots e reconhecer fraquezas pelo <a href="https://google.com" target="_blank">google</a>',
        links: [
            {name: 'Github', url:'https://github.com/YSNascimento'},
            {name: 'LinkedIn', url:'https://LinkedIn.com/in/ynascimento'},
            {name: "Twitter", url: "https://twitter.com/YuNasciment"}
        ]
    }
    
    return res.render("desafio2-3_sobre", {about:data})
})

server.get('/conteudo', function(req,res){
    return res.render("desafio2-3_conteudo", {cursos})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

//ativa servidor para ouvir canal 5000 e retorna função quando ok
server.listen(5001,function(){
    console.log('server running')
})
