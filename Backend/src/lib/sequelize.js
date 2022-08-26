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
const Token = require("../models/token")(sequelize)
const Prescription = require("../models/prescription")(sequelize)
const Payment = require("../models/payment")(sequelize)
const Order = require("../models/order")(sequelize)
const OrderItem = require("../models/order_item")(sequelize)
const OrderStatus = require("../models/order_status")(sequelize)
const Cart = require("../models/cart")(sequelize)
const Product = require("../models/product")(sequelize)
const ProductImage = require("../models/product_image")(sequelize)
const ProductCategory = require("../models/product_category")(sequelize)
const Category = require("../models/category")(sequelize)
const ProductDescription = require("../models/product_description")(sequelize)
const ProductStock = require("../models/product_stock")(sequelize)
const Unit = require("../models/unit")(sequelize)
const StockHistory = require("../models/stock_history")(sequelize)


//relationship
User.hasMany(Address, {foreignKey: "id_user"})
Address.belongsTo(User, {foreignKey:"id_user"})

User.hasMany(Token, {foreignKey: "id_user"})
Token.belongsTo(User, {foreignKey: "id_user"})

User.hasMany(Payment, {foreignKey: "id_user"})
Payment.belongsTo(User, {foreignKey: "id_user"})
Payment.belongsTo(Order, {foreignKey: "id_payment"})
Order.belongsTo(Payment, {foreignKey: "id_payment"})

User.hasMany(Prescription, {foreignKey: "id_user"})
Prescription.belongsTo(User, {foreignKey: "id_user"})
Prescription.belongsTo(Order, {foreignKey: "id_prescription"})
Order.belongsTo(Prescription, {foreignKey: "id_prescription"})

OrderStatus.belongsTo(Order, {foreignKey: "id_os"})
Order.belongsTo(OrderStatus, {foreignKey:"id_os"})

Product.hasMany(OrderItem, {foreignKey: "id_product"})
OrderItem.belongsTo(Product, {foreignKey:"id_product"})
OrderItem.belongsTo(Order, {foreignKey: "id_order"})
Order.hasMany(OrderItem, {foreignKey: "id_order"})





