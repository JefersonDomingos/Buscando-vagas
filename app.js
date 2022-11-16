const express     = require("express");
const {engine}    = require("express-handlebars");
const path        = require("path");
const app         = express();
const db          = require("./db/conection");
const bodyParser  = require("body-parser");
const Job         = require("./models/Job");

const port = 3000;

app.listen(port,function(){
    console.log(`O express está rodando na porta ${port}`);
});

//handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//body-parser
app.use(bodyParser.urlencoded({extended: false}));

//conexão com o banco de dados
db
    .authenticate()
    .then(()=>{
        console.log("Conectou com sucesso ao banco de dados!");
    })
    .catch(err=>{
        console.log("Ocorreu um erro ao conectar o banco de dados!", err);
    });

//rotas
app.get("/", function(req,resp){

    Job.findAll({order: [
        ["createdAt", "DESC"]
    ]})
    .then(jobs => {
        resp.render("index", {
            jobs
        });
    });
});

//rotas do job
app.use("/jobs", require("./routes/jobs"));
