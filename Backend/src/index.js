const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

dotenv.config()

const PORT = process.env.PORT
const {sequelize} = require("./lib/sequelize")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())

// app.use("/user", userRoute)