const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())
//o barramento exibe o corpo da requisicao e direciona o envento para todos os microservicos
//definir esse endpoint
//POST /eventos
app.post("/eventos", (req, res) =>{ //confirmacao q a emissao dos lembretes funcionaram 
    //o barramento exibe o corpo da requisicao e entrega o envento para todos os microservicos
    //pegar o corpo da requisicao
    const evento = req.body
    console.log(evento)
    //enviar via post para todos os mss
    axios.post('http://localhost:4000/eventos', evento)
    axios.post('http://localhost:5000/eventos', evento)
    axios.post('http://localhost:6000/eventos', evento)
    res.end()

} )


//colocar o barramento para operar na porta 10000
const port = 10000
app.listen(port, () => console.log(`Barramento. ${port}`))