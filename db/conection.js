const instSequelize  = require("sequelize");

const sequelize = new instSequelize({
    dialect: "sqlite",
    storage: "./db/app.db"
});

module.exports = sequelize;
