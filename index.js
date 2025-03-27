// NODE.JS
//criaçao da API

const express = require('express') //criaçao da variavel com os poderes de express
const app = express()
const porta = 3000;

app.get('/teste', (req, res)=> { // funçao que tem os poderes do express
    res.send("OLA MUNDO!!")
})

app.listen(porta, ()=>{ // funçao do express que "escuta" sera ouvida na porta 3000, criaçao de um aereo function
    console.log("Sucesso!! Servidor online.")
}) 
