
//Servidor
const express = require('express');
const server = express();
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurando nunjucks  (template egine)
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})




//inicio e Configuração do servidor
server.use(express.static("public"))   // arquivos static sao arquivos como css/js/images     

//receber dados do req.body
.use(express.urlencoded({ extended: true}))

.get("/", pageLanding)// quando eu entrar na "/" essa função ira me retornar uma resposta "/" é a rota) //uma configuração do servidor     
.get("/estudar",pageStudy)
.get("/darAulas",pageGiveClasses)
.post("/save-class", saveClasses)
//start servidor
.listen(5500)
