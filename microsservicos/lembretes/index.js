const express = require('express')
const app = express()
//middleware
app.use(express.json())
/*
{
    1: {
        id: 1,
        texto: 'Fazer café'
        },
        2: {
            id: 2,
            texto: 'Ir a feira'
            }
            }
            */
let id = 1
const lembretes = {}
//API: Application Programing Interface: coleção de endpoints

//Criar um lembrete
//POST /lembretes
//endpoint: uma tripla: metodo do protocolo HTTP, padrão de acesso e funcionalidade
//req - requisicao, res- resposta
app.post("/lembretes", (req, res) => {
    // {texto: "Fazer café"}
    const texto = req.body.texto
    lembretes[id] = {
        id: id,
        texto: texto
    }
    id++
    res.json({mensagem: 'ok'})
    
})

//get /lembrestes usando uma funcao regular (function)
app.get("/lembretes", function(req,res){
    res.json(lembretes)
})
const port = 4000
app.listen(port, () => {console.log(`lembretes. ${port}.`)})