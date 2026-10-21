const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    LembreteAtualizado: (lembrete) => {
        baseConsulta[lembrete.id].texto = lembrete.texto
    },
    LembreteRemovido: (lembrete) => {
        delete baseConsulta[lembrete.id]
    },
    ObservacaoCriada: (observacao) => {
        //pegar a lista de observaoes do lembbre a que essa observacao recebida pertence ou uma lista vazia, caso o lembrete nao tenha observacao nenhuma
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
        //cadastra a observacao na lista (push)
        observacoes.push(observacao)
        //ajustar a baseConsulta para que ela aponte para a lista
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes']
        const indice = observacoes.findIndex(o => o.id === observacao.id)
        observacoes[indice] = observacao
    },
    ObservacaoRemovida: (observacao) => {
        const lembrete = baseConsulta[observacao.lembreteId]
        lembrete.observacoes = lembrete.observacoes.filter(o => o.id !== observacao.id)
    }
}
//GET /lembretes
app.get('/lembretes', (req, res) => {
    res.json(baseConsulta)
})
//POST /eventos
app.post('/eventos', function(req, res){
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados) //direciona pra uma função que trata da requisição recebida
    }catch(e){}
    res.end()
})
const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}`))