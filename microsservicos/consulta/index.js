const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        //pegar a lista de observaoes do lembbre a que essa observacao recebida pertence ou uma lista vazia, caso o lembrete nao tenha observacao nenhuma
        baseConsulta[observacao.lembreteId]['observacoes'] || []
        //cadastra a observacao na lista (push)
        observacoes.push(observacao)
        //ajustar a baseConsulta para que ela aponte para a lista
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    }
}
//GET /lembretes
app.get('/lembretes', (req, res) => {
    res.json.baseConsulta()
})
//POST /eventos
app.post('/eventos', function(req, res){
    const evento = req.body
    console.log(evento)
    funcoes[EventSource.tipo](evento.dados)
})
const port = 6000
app.listen(port, () => console.log(`Consulta. Porsta ${port}`))