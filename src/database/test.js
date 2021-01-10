const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-15.821235",
        lng: "-47.863642",
        name: "Lar de amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "(61)992233445",
        images: [

            "https://source.unsplash.com/random?id=1",

            "https://source.unsplash.com/random?id=2"

        ].toString(),
        instructions: "Venha quando se sentir à vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "1"
    })

    //consultar dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    /*//deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))*/


})
