const express = require("express");
const router = express.Router();
const job = require("../models/Job");

//adiconar job via post
router.post("/add", (req, resp)=>{
    //criando as variáveis que recebem o valor do body-parser
    let {title, salary, company, description, email, new_job} = req.body;
});