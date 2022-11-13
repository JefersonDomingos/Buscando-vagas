//acessando o sequelize e seu arquivo de conexão
const Sequelize = require("sequelize");
const db = require("../db/conection");

const Job = db.define("Job", {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
});

//exportando para utilizar onde precisar e fazer inserção no banco de dados
module.exports = Job;