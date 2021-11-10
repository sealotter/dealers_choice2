
//const {client, syncAndSeed, }

const express = require("express")
const morgan = require("morgan")
const client = require("./db")
const list = require("./views/coinList")
const details = require("./views/coinDetails")
 //app.use('/posts', require('./routes/posts'))


const app = express()

//app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => res.redirect('/mainPage'))



app.use('/mainPage', require('./routes/mainPage'))

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})



