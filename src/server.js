// import dependences
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// initializing express
const server = express()
server
    // using the static files
    .use(express.static('public'))

    // template engine configuration
    .set('views', path.join(__dirname,"views"))
    .set('view engine', 'hbs')

    // create a route
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)

// turn the server on
server.listen(5500)
