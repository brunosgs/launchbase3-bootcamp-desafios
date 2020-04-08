const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set("view engine", "njk")
app.use(express.static('public'))

nunjucks.configure("views", {
    express: app
})

app.get("/", function (req, res) {
    return res.render("about")
})

app.get("/courses", function (req, res) {
    return res.render("courses")
})

app.use(function (req, res) {
    res.status(404).render("not-found");
})

app.listen(5000, function () {
    console.log("Server is running...")
})