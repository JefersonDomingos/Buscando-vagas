const ClassSequelize  = require("sequelize");

const sequelize = new ClassSequelize({
    dialect: "sqlite",
    storage: "./db/app.db"
});

//exportando para utilizar onde precisar
module.exports = sequelize;
