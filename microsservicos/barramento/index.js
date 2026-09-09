const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//definir esse endpoint
//POST /eventos
app.post("/eventos", (req, res) =>{
    //pegar o corpo da requisicao
    const evento = req.body
    //enviar via post para todos os mss
    axios.post('http://localhost:4000/eventos', evento)
    axios.post('http://localhost:5000/eventos', evento)
    res.end()

} )


//colocar o barramento para operar na porta 10000
const port = 10000
app.listen(port, () => console.log(`Barramento. ${port}`))