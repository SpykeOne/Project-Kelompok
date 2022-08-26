const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

dotenv.config()

const PORT = process.env.PORT
const { sequelize } = require("./lib/sequelize")


//command this code after making new model.
sequelize.sync({ alter: true })

const app = express()
app.use(bodyParser.urlencoded({ extended : true  }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())

app.use("user", userRoutes)

app.use("")