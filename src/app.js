const express = require("express")
const bodyParser = require("body-parser");
const app = express()

const index = require("./route/index")
const livros = require("./route/livrosRoute")

app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/livros", livros)

module.exports = app