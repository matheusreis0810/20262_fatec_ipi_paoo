const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

//precisa tratar o evento observacaoCriada
//se o texto da observacao contiver a palavra importante, trocar o status para importante
//caso contrario, trocar para comum
//emitir um evento do tipo ObservacaoClassificada
const palavraChave = 'importante'
const funcoes = {
    ObservacaoCriada: async (observacao) => {
        observacao.status = observacao.texto.includes(palavraChave) ? 'importante' : 'comum'
        /* if(observacao.texto.includes("importante"))
            observacao.status = "importante";
        else
            observacao.status = "comum"; */
        await axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoClassificada',
            dados: observacao
        })
    },
}
app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    }catch(e){}
    res.end()
})

const port = 7000
app.listen(port, () =>{
    console.log(`Classificação. Porta ${port}.`)
})