const Sequelize = require('sequelize')
require('dotenv').config()

// console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DIALECT || 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT0'
    }
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Models

db.student = require('../models/student')(sequelize, Sequelize);

module.exports = db;