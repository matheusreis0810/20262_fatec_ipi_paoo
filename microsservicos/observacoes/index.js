const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

/*
{
    1: [
        {
            1001,
            texto: 'Comprar café'
            lembreteId: 1
        },
        {
            1002,
            texto: ''ir a feira',
            lembreteId: 1
        }
    ],
    2: [
        {
            id: 2001,
            texto: 'Ver filme',
            lembreteId: 2
        }    
    ],
    3: [ 
        {
            od
        }
    ]
}
*/
const observacoes = {}

//POST /lembretes/1/observações
//criar as observacoes do lembrete com id tal
//path
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    //const texto = req.body.texto
    const { texto } = req.body
    const observacao = {
        id: idObs,
        texto: texto
    }
    const observacoesDoLembrete = observacoes[req.params.id] || []
    observacoesDoLembrete.push(observacao)
    observacoes[req.params.id] = observacoesDoLembrete
    res.json(observacoesDoLembrete)
})

//GET /lembretes/1/observacoes
//obter o lembrete com id 1 e todas as suas obsevaçoes
app.get('/lembretes/:id/observacoes', function(req, res){
    res.json(observacoes[req.params.id] || [])
})


const port = 5000
app.listen(port, () => console.log(`Observações. Porta ${port}.`))