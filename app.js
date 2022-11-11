const express = require("express");
const app = express();
const db = require("./db/conection");

const port = 3000;

app.listen(port,function(){
    console.log(`O express está rodando na porta ${port}`);
});

//conexão com o banco de dados
db
    .authenticate()
    .then(()=>{
        console.log("Conectou com sucesso ao banco de dados!");
    })
    .catch(err=>{
        console.log("Ocorreu um erro ao conectar!", err);
    });

//rotas
app.get("/", function(req,resp){
    resp.send("Está funcionando ok ok");
});