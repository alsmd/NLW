const Database = require('./db')
const createProffy = require('./createProffy')()

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name:"Flavio da Silva",
        avatar: "https://www.veinerd.com/image/cache/catalog/camisetas/onepiece-2-feminina-590x620.jpg",
        whatsapp: "960223654",
        bio: "Amante de one piece, e um belisimo de um programador que sabe de tudo mesmo nao sabendo de nada. Acompanhe as aventuras desse incrivel professor, e aprende coisas nunca antes vista nesse lindo mundinho"
     
    }

    classValue = {
        subject: "Pirata",
        cost: "100"
        //o proffy id vira pelo banco de dados
    }
    classScheduleValues = [

        {
            weekday: 1,
            time_from:720,
            time_to:1220
        },
        {
            weekday: 0,
            time_from:520,
            time_to:1220
        }
    ]

     // createProffy(db)

    await createProffy(db, {proffyValue,classValue,classScheduleValues})


   



// Consultar os dados inseridos



    })