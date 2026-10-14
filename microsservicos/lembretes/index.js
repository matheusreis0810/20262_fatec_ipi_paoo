const axios = require('axios')
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
app.post("/lembretes", async (req, res) => {
    // {texto: "Fazer café"}
    const texto = req.body.texto
    const lembrete = {
        id: id,
        texto: texto
    }
    //emissao de um evento
    lembretes[id] = lembrete //gera id e armazena na base
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete
    })

    id++
    res.json({mensagem: 'ok'})
    
})
app.put("/lembretes/:id", async (req, res) => {
    const id = req.params.id
    const texto = req.body.texto
    if(!lembretes[id]){
        return res.status(404).json({ mensagem: 'Lembrete não encontrado' })
    }
    lembretes[id].texto= texto
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteAtualizado',
        dados: lembretes[id]
    })
    res.json({mensagem: 'ok'})
})

app.delete("/lembretes/:id", async (req, res) => {
    const id = req.params.id
    if(!lembretes[id]){
        return res.status(404).json({ mensagem: 'Lembrete não encontrado' })
    }
    delete lembretes[id]

    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteRemovido',
        dados: { id: id }
    })

    res.json({ mensagem: 'ok' })
})

//get /lembrestes usando uma funcao regular (function)
app.get("/lembretes", function(req,res){
    res.json(lembretes)
})

//fazer o endpoint POST /eventos
//exibir o evento no log
//encerrar a requisição, não deixando o cliente esperando
app.post("/eventos", async (req, res) => {
    const evento = req.body
    console.log(evento);
    res.end();

})
const port = 4000
app.listen(port, () => {console.log(`lembretes. ${port}.`)})