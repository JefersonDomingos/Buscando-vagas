const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

//rota de teste
router.get("/teste", (req, resp)=>{
    resp.send("o teste deu certo");
});

//rota de detalhe das vagas
router.get("/view/:id", (req,resp)=> Job.findOne({
    where: {id: req.params.id}
}).then(job => {
    resp.render("view", {
        job
    });
}).catch(error => console.log(error)));

//form da rota de envio
router.get("/add", (req, resp)=>{
    resp.render("add");
});

//adiconar job via post
router.post("/add", (req, resp)=>{
    //criando as variáveis que recebem o valor do body-parser
    let {title, salary, company, description, email, new_job} = req.body;

    //Inserir dados
Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job:1,
}).then(()=> resp.redirect("/"))
.catch(error => console.log(error));
});

//exportando a rota
module.exports = router;
