const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name:"Flavio da Silva",
        avatar: "https://www.veinerd.com/image/cache/catalog/camisetas/onepiece-2-feminina-590x620.jpg",
        whatsapp: "960223654",
        bio: "Amante de one piece, e um belisimo de um programador que sabe de tudo mesmo nao sabendo de nada. Acompanhe as aventuras desse incrivel professor, e aprende coisas nunca antes vista nesse lindo mundinho"
     
    }

    classValue = {
        subject: 1,
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

/*     await createProffy(db, {proffyValue,classValue,classScheduleValues})
 */

   
    // Consultar os dados inseridos

    //todos os proffys
   const selectedProffys =  await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h - 18ph
    // o horario  do time_from (8h) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    console.log(selectClassesSchedules)

    })