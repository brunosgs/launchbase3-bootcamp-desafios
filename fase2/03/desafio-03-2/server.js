const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about", { about: data.about })
})

server.get("/courses", function(req, res) {
    return res.render("courses", { courses: data.courses })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function() {
    console.log("Server is running...")
})