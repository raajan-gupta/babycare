const express = require("express")
const hbs = require("hbs")
const session = require('express-session')
require("dotenv").config()


const Router = require("./routes/index")

const app = express()

var sess = {
    secret: process.env.SESSION_SERCRET_KEY,
    cookie: {}
}
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))

require("./db_connect")
require("./helpers/index")

app.set("view engine", "hbs")
app.use(express.static("views/static")) //use to server static files like css,js,image etc
app.use("/public", express.static("public"))
hbs.registerPartials("./views/partials")

app.use("/", Router)

let port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is Running at http://localhost:${port}`))  