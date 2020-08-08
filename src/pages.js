
const Database = require('./database/db')

const {   
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes} = require('./utils/format')

//Requisições
function pageLanding(req,res){//req/ requisição vai me trazer mais informaçoes // res/resposta é oque vai mostrar pra min em tela 
    return res.render("index.html");
}

async function pageStudy(req,res){
    const filters = req.query;

    if(!filters.subject || !filters.weekday || !filters.time ){

        return res.render("estudar.html", {filters, subjects,weekdays});

    }
    //Converter horas em minutos
    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}

        )
        AND classes.subject = '${filters.subject}'
    
    `
     //caso haja erro na hora da consulta do banco de dados
    
    try{
        const db = await Database
        const proffys = await db.all(query)

        return res.render('estudar.html', {proffys,subjects, filters,weekdays})

    } catch (error) {
        console.log(error)
    }



}

function pageGiveClasses(req,res){
    const data = req.body;
    //data.subject = getSubject(data.subject) // caso eu fosse dar um push no proffys dereto com o data eu teria que tratar tanto o subject quanto o weekday para aparecer como string e nao como number
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
    this.weekday =objeto.weekday;
    this.time_from = objeto.time_from;
    this.time_to = objeto.time_to;

}
function saveClasses(req, res) {


}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}