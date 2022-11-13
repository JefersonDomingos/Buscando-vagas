const express = require("express");
const app = express();
const db = require("./db/conection");
const bodyParser = require("body-parser");

const port = 3000;

app.listen(port,function(){
    console.log(`O express está rodando na porta ${port}`);
});

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
    resp.send("Está funcionando ok ok");
});

//rotas do job
app.use("/jobs", require("./routes/jobs"));
