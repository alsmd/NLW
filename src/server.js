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

const subjects = [


    "Artes",
    "Biologia",
    "Ciências",
    "Educação fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Português",
    "Quimica",

]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",

]

//Functions
function getSubject(subjectNumber){
    return subjects[subjectNumber - 1]
}
function getWeekday(weekday){
    return weekdays[weekday]
}
//Requisições
function pageLanding(req,res){//req/ requisição vai me trazer mais informaçoes // res/resposta é oque vai mostrar pra min em tela 
    return res.render("index.html");
}

function pageStudy(req,res){
    const filters = req.query;
    return res.render("estudar.html", { proffys, filters, subjects,weekdays});
}

function pageGiveClasses(req,res){
    const data = req.query;
    //criando um novo objeto proffy com os dados recebidos
    var proffy = new Professor(data);
    const isNotEmpty = Object.keys(data).length > 0;

    //inserindo o novo objeto proffy na minha coleção
    if(isNotEmpty) {
        proffys.push(proffy); //eu poderia ter colocado o data direto no push, pois o data ja é um objeto

        return res.redirect("/estudar")
    }

    return res.render("darAulas.html", {subjects,weekdays});
}

//Function responsavel por receber os dados e inserir em um objeto que sera o professor
function Professor(objeto){
    this.nome = objeto.nome;
    this.avatar = objeto.avatar;
    this.whatsapp = objeto.whatsapp;
    this.bio = objeto.bio;
    this.subject =  getSubject(objeto.subject);
    this.cost = objeto.cost;
    this.weekday = getWeekday(objeto.weekday);
    this.time_from = objeto.time_from;
    this.time_to = objeto.time_to;

}

const express = require('express');
const server = express();

//Configurando nunjucks  (template egine)
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})




//inicio e Configuração do servidor
server.use(express.static("public"))   // arquivos static sao arquivos como css/js/images     
.get("/", pageLanding)// quando eu entrar na "/" essa função ira me retornar uma resposta "/" é a rota) //uma configuração do servidor     
.get("/estudar",pageStudy)
.get("/darAulas",pageGiveClasses)
//start servidor
.listen(5500)
