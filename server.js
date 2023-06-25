const express = require('express');
const app = express();

app.set("view engine","ejs");

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
    res.send(req.params)
})

app.listen(8080);
console.log('Rodando...');