const axios = require('axios')
const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const aux = observacoes[observacao.lembreteId]
        const obsParaAtualizar = aux.find(o => o.id === observacao.id)
        obsParaAtualizar.status = observacao.status
        axios.post('http://localhost:10000/eventos'), {
            tipo: ObservacaoAtualizada,
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                lembreteId: observacao.lembreteId,
                status: observacao.status
            }
        }
    }
}
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
app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4()
    //const texto = req.body.texto
    const { texto } = req.body
    const observacao = {
        id: idObs,
        texto: texto,
        lembreteId: req.params.id,
        status: 'aguardando'
    }
    const observacoesDoLembrete = observacoes[req.params.id] || []
    observacoesDoLembrete.push(observacao)
    observacoes[req.params.id] = observacoesDoLembrete
    //emitir o envento de criação de observação
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: observacao
    })
    res.json(observacoesDoLembrete)
})

app.put('/lembretes/:id/observacoes/:idObs', async (req, res) => {
    const idLembrete = req.params.id
    const idObs = req.params.idObs
    const { texto } = req.body
    
    const observacoesDoLembrete = observacoes[idLembrete] || []
    const observacao = observacoesDoLembrete.find(o => o.id === idObs)
    if(!observacao){
        return res.status(404).json({ mensagem: 'Observação não encontrado' })
    }
    observacao.texto = texto

    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoAtualizada',
        dados: observacao
    })
    res.json(observacao)
})

app.delete('/lembretes/:id/observacoes/:idObs', async (req, res) => {
    const idLembrete = req.params.id
    const idObs = req.params.idObs
    const observacoesDoLembrete = observacoes[idLembrete] || []
    const existe = observacoesDoLembrete.some(o => o.id === idObs)

    if (!existe) {
        return res.status(404).json({ mensagem: 'Observação não encontrada' })
    }
    observacoes[idLembrete] = observacoesDoLembrete.filter(o => o.id !== idObs)

    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoRemovida',
        dados: { id: idObs, lembreteId: idLembrete }
    })
    res.json({ mensagem: 'ok' })
})

//GET /lembretes/1/observacoes
//obter o lembrete com id 1 e todas as suas obsevaçoes
app.get('/lembretes/:id/observacoes', function(req, res){
    res.json(observacoes[req.params.id] || [])
})

app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    }
    catch(e){  }
    res.end()
})


const port = 5000
app.listen(port, () => console.log(`Observações. Porta ${port}.`))