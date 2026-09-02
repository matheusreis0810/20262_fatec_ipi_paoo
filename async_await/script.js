//promises podem ser tratadas com then(e entao)/catch e com async/await
//async pode existir sem await
//await precisa de async para existir
function fatorial(n){
    if(n<0) return Promise.reject("Valor não pode ser negativo")
    let res = 1
    for(let i = 2; i<=n; i++) res *= i
    return Promise.resolve(res)
}
function chamadaComThenCatch(){
    fatorial(5)
    .then(res => console.log(`Resultado ${res}`))
    .catch(err => console.log(`Erro: ${err}`))

    fatorial(-100)
    .then(res => console.log(`Resultado ${res}`))
    .catch(err => console.log(`Erro: ${err}`))
}
const chamadaComAsyncAwait = async () => {
    try{
        const res1 = await fatorial(5)
        console.log(`Resultado: ${res1}`)
    }
    catch(err){
        console.log(`Erro: ${err}`)
    }
    try{
        const res2 = await fatorial(-100)
        console.log(`Resultado: ${res2}`)
    }
    catch(err){
        console.log(`Erro: ${err}`)
    }
}
chamadaComThenCatch()
chamadaComAsyncAwait()

// async function hello(nome){
//     return `Oi, ${nome}`
// }

// const resultado = hello("Pedro")
// resultado.then(texto => console.log(texto))
// console.log("Script principal terminando...")