const Database = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

module.exports = {

    index(req, res) {
        return res.render('index') // when the name of property is = to value, can use only the property's name
    },

    async orphanages(req, res) {
        try {
            const db = await Database
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', {orphanages})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        
    },

    async orphanage(req, res) {
        const id = req.query.id
        try {
            const db = await Database
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekeds == '0') {
                orphanage.open_on_weekeds = false
            } else {
                orphanage.open_on_weekeds = true
            } // como fazer um if ternário?
            
            return res.render('orphanage', {orphanage})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}