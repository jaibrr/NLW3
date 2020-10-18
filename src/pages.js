module.exports = {

    index(req, res) {
        return res.render('index') // when the name of property is = to value, can use only the property's name
    },

    orphanages(req, res) {
        return res.render('orphanages')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}