import express from 'express';
const app = express();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query'] })

app.set("view engine","ejs");

async function findManySinapiCode(code){
    const composition = await prisma.sinapi.findUnique({
        where: { code: parseInt(code) },
      })
      console.log(composition)
      return composition
}

app.get("/", function(req,res){
    const items =[
        {
            title: 'D',
            message: 'ensenvolve aplicações de forma fácil'
        },
        {
            title: 'E',
            message: 'EJS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: 'hhhhhhhh'
        },
        {
            title: 'I',
            message: 'tuitivo'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        },
    ]

    const subtitle = 'Uma linguagem de modelagem para criação de página HTML'
    res.render("pages/index", {
        qualitys:items,
        subtitle:subtitle
    });
})

app.get("/about", function(req,res){
    res.render("pages/about");
})

app.get("/sinapi/:code", function(req, res){
    console.log('Requisition code:',req.params.code)
    findManySinapiCode(req.params.code).then(composition =>{
        console.log('Founded composition',composition)
        res.send(composition)
    })
})



app.listen(8080);
console.log('Rodando...');