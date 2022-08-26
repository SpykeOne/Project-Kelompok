const { Sequelize } = require("sequelize")
const dbConfig = require("../configs/database")

const sequelize = new Sequelize({
    username: dbConfig.MYSQL_USERNAME,
    password: dbConfig.MYSQL_PASSWORD,
    database: dbConfig.MYSQL_DB_NAME,
    port: dbConfig.MYSQL_PORT,
    dialect: "mysql",
})

//models

const User = require("../models/user")(sequelize)
const Address = require("../models/address")(sequelize)
const Token = require("../models/")