const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("xisdahora", "root", "root", {

    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
    .then(() => console.log("Conectado ao banco de dados"))
    .catch((error) => console.log("Erro ao conectar ao banco de dados " + error))

module.exports = { Sequelize, sequelize }