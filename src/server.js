const express = require('express');
const server = express();

server.use(express.static("public"))                            //uma configuração do servidor // arquivos static sao arquivos como css/js/images
.get("/",(req, res) => { //req/ requisição vai me trazer mais informaçoes // res/resposta é oque vai mostrar pra min em tela
    return res.sendFile(__dirname + "/views/index.html")                                // quando eu entrar na "/" essa função ira me retornar uma resposta
                                                                // "/" é a rota

})
.get("/estudar",(req,res) => {

    return res.sendFile(__dirname + "/views/estudar.html")

})
.get("/darAulas",(req,res) => {

    return res.sendFile(__dirname + "/views/darAulas.html")

})
.listen(5500)