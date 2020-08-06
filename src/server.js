//Estruturas de dados

const proffys = [ //estrutura de dados

    { 
    name:"Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",whatsapp: "960223654",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from:[720],
    time_to:[1220]
},

{ 
    name:"Flavio da Silva",
    avatar: "https://www.veinerd.com/image/cache/catalog/camisetas/onepiece-2-feminina-590x620.jpg",whatsapp: "960223654",
    bio: "Amante de one piece, e um belisimo de um programador que sabe de tudo mesmo nao sabendo de nada. Acompanhe as aventuras desse incrivel professor, e aprende coisas nunca antes vista nesse lindo mundinho",
    subject: "Pirata",
    cost: "100",
    weekday: [1],
    time_from:[720],
    time_to:[1220]
}

]; //cada proffy é um objeto dentro de uma lista de objetos

//Functions

//Requisições
function pageLanding(req,res){//req/ requisição vai me trazer mais informaçoes // res/resposta é oque vai mostrar pra min em tela 
    return res.render("index.html");
}

function pageStudy(req,res){
    return res.render("estudar.html", { proffys});
}

function pageGiveClasses(req,res){
    return res.render("darAulas.html");
}


const express = require('express');
const server = express();

//Configurando nunjucks
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})




//Configuração do servidor
server.use(express.static("public"))   // arquivos static sao arquivos como css/js/images     
.get("/", pageLanding)// quando eu entrar na "/" essa função ira me retornar uma resposta "/" é a rota) //uma configuração do servidor     
.get("/estudar",pageStudy)
.get("/darAulas",pageGiveClasses)
.listen(5500)
