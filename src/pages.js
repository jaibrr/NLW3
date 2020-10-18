const orphanages = require('./database/fakedata.js')

module.exports = {

    index(req, res) {
        return res.render('index') // when the name of property is = to value, can use only the property's name
    },

    orphanages(req, res) {
        return res.render('orphanages', {orphanages})
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}