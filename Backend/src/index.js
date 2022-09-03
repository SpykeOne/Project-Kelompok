const express = require("express")
<<<<<<< HEAD
const cors = require("cors")
=======
>>>>>>> dd8704c915a87eeb2b9825127507c19a49d7951f
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

dotenv.config()

const PORT = process.env.PORT
<<<<<<< HEAD
const {sequelize} = require("./lib/sequelize")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
=======
const { sequelize } = require("./lib/sequelize")


//command this code after making new model.
sequelize.sync({ alter: true })

const app = express()
app.use(bodyParser.urlencoded({ extended : true  }))
>>>>>>> dd8704c915a87eeb2b9825127507c19a49d7951f
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())

<<<<<<< HEAD
// app.use("/user", userRoute)
=======
app.use("user", userRoutes)

app.use("")
>>>>>>> dd8704c915a87eeb2b9825127507c19a49d7951f
