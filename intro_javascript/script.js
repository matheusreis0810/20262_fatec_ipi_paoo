//Execução Síncrona e Assíncrona

//PROMISE
//é um objeto do js, associado a uma função q representa uma funcao demorada
//o objeto sempre vai estar Pending (executando), Rejected (deu erro) ou Fullfilled (deu certo)

//1 + 2 +  3 + ..... (n-2) + (n-1) + n
const calculoRapidinho = (n) => {
    //ajustar essa função
    //se n for negativo, devolver uma promise rejected, associada ao texto "Apenas positivos"
    //caso contrario, devolver essa promise que ja é devolvida no momento
    return n>=0 ? Promise.resolve((n/2) * (n+1)) : Promise.reject("Apenas positivos")
}
//tratar ambos os casos usando then ou catch
calculoRapidinho(-1)
.then((res) => console.log(`Resultado: ${res}`))
.catch((erro) => console.log(`Erro: ${erro}`))

// function calculoDemorado(n){
//     return new Promise(function(resolve, reject){
//         let res = 0
//         for(let i = 1; i<= n; i++){
//             res += i
//         }
//         resolve(res)
//     })
// }
// //construção then/catch 
// //execute a funcao calculoDemorado e depois o q vem no then (2 tipos de fazer)
// //const a = calculoDemorado(100).then((resultado) => {console.log(resultado)})
// const auxiliar = calculoDemorado(100)
// auxiliar.then(function(res){
//     console.log(res)
// })


// //CPU-Bound : dominada por cálculos, continhas (um loop que soma de 1 a 100)
// //IO-Bound: dominada por operações de entrada e saída(acesso a arquivos, requisições HTTP)
// const fs = require('fs')//file system
// console.log("A")
// const abrirArquivo = function(nomeArquivo){
//     //definir uma função callback
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: $(erro)`)
//         }
//         else{
//             console.log(conteudo.toString())
//             const dobro = +conteudo.toString() * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log('Erro ao salvar o dobro')
//                 }
//                 else{
//                     console.log('Salvou o dobro ok')
//                 }
//                 console.log("f")
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//             console.log("E")
//         }
//         console.log("D")
//     }
//     //chamar a função de leitura do arquivo do módulo fs, entregando a callback como parâmetro
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log("C")
// }
// abrirArquivo("arquivo.txt")
// console.log("B")


// const idade = 18
// //concatenação
// console.log("Minha idade é " + idade)
// //interpolação 
// console.log(`Minha idade é ${idade}`) 


// console.log('script principal começou...')
// setTimeout(() => {
//     console.log('dentro da timeout...')
// }, 0)
// const data = new Date().getTime() + 10000
// while(new Date().getTime() <= data);
// console.log('script principal terminou')


// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos);
//     const d=8+4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //const d = demorada()
// //faz com q nao precise terminar de executar a const d para executar a const e
// //faz com q a funcao seja executada depois dos 500ms
// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500)
// const e = 2 + a + b
// console.log(`e: ${e}`)


// const a = 2+ 7
// const b = 5
// console.log(a+b)

// console.log('Eu primeiro...')
// console.log('Agora eu')
// console.log('Sempre vou ser a última... :(')

/* //OBJETOS JAVASCRIPT
//OBJETO JSON (JavaScript Object Notation)

//calculadora
const calculadora = {
    somar: function(a, b){
        return a + b
    },
    subtrair: (a,b) => a - b
}
console.log(calculadora.somar(2,5))
console.log(calculadora.subtrair(5-2))

//Uma concessionaria que tem CNPJ e endereço. Endereço tem rua, bairro e numero. 
//A concessionaria tem uma coleção de veiculos. Cada Veiculo tem marca, modelo e ano de fabricação
let concessionaria = {
    cnpj: 900,
    endereco: {
        rua: "X",
        bairro: "A",
        numero: 11
    },
    veiculos: [
        {
            marca: "fiat",
            modelo: "uno",
            ano: 2020
        },
        {
            marca: "ford",
            modelo: "ka",
            ano: 2000
        }
    ]
}
for(let veiculo of concessionaria.veiculos){
    console.log(veiculo.marca)
    console.log(veiculo.modelo)
    console.log(veiculo.ano)
}
console.log(concessionaria.cnpj)
console.log("Rua: " + concessionaria.endereco.rua)
console.log("Bairro: " + concessionaria.endereco.bairro)
console.log("Numero: " + concessionaria.endereco.numero)

//Uma pessoa que se chama Maria, tem 21 anos e mora na rua B, numero 20
let pessoa2 = {
    nome: "Maria",
    idade: 21,
    endereco: {
        rua: "B",
        numero: 20
    }
}
console.log(pessoa2.nome)
console.log(pessoa2.idade)
console.log("Rua : " + pessoa2.endereco.rua)
console.log("Numero: " + pessoa2.endereco.numero)

//Uma pessoa e se chama João e tem 17 anos
let pessoa = {
    nome: "João",
    idade: 17
}
console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa.idade) */

/* function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont++)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    return {f1, f2}
}
//ambos vao ser 2 por causa q o return do f1 esta depois de o cont receber +1
//se no dentro do f1 somar +1 altera o f2 
const res = eAgora()
res.f1()
res.f2() */

/* //CLOSURE
function saudacoesFactory(saudacao, nome){
    return function(){
        return saudacao + ", " + nome
    }
}
const olaJoao = saudacoesFactory("Olá", "João")
const tchauJoao = saudacoesFactory("Tchau", "João")
console.log(olaJoao())
console.log(tchauJoao())

function ola(){
    let nome = 'João'
    return function(){
        console.log('Olá, ' + nome)
    }
}
let olaResult = ola()
olaResult()

function r(){
    let nome = 'João'
    function i(){
        console.log(nome)
    }
    i()
}
r()

let umaFuncao = function(){
    console.log("Fui armazenada em uma variável")
}
umaFuncao()

function f(funcao){
    funcao()
}

function g(){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
}

f(function(){
    console.log("estou sendo passada para f")
})

//faz com q execulte a funcao g
const gResult = g()
gResult()
//o primeiro () chama a funcao e o segundo () faz com q ela seja executada 
g()()
f(g()) */

/* //ARROW FUNCTIONS
const hello = () => {console.log('Oi')}
hello()
//da para omitir o return e as chaves, so funciona sem o return se nao tiver chaves
const dobro = (n) => 2 * n
console.log(dobro(2))
//e se tiver so um parametro "n" da para tirar o ()
const ehPar = n => n % 2 === 0
console.log(ehPar(5))
const echo = n => n
console.log(echo(5)) */

/* //FUNÇÕES
const dobro = function (n) {
    return 2 * n
}
console.log(dobro(2))
const triplo = function(n=5){
    return 3 * n
}
console.log(triplo())
console.log(triplo(10))

//FUNÇÕES REGULAR E ARROW FUNCTIONS
function soma(a, b){
    return a + b
}
//console.log(soma(1,2))
const res = soma(2,3)
console.log(res)

//hello é um ponteiro para uma funcao
function hello(){
    console.log('Oi')
}
hello()
//o hello é redefinido - 
// ->e ao executar nai aparece o primeira funcao
function hello(nome){
    console.log('Oi, ' + nome)
}
hello('Ana') */

/* //VETORES (BEM PARECIDOS COM O ARRAY DO JAVA)
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
//FILTER - filtra o vetor de acordo com parametro passado
const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
console.log(apenasComA)

//MAP - pega as iniciais de cada nome
const inicialis = nomes.map((n) => {return n.charAt(0)})
console.log(inicialis)

//REDUCE
const valores = [1, 2, 3, 4]
//o ac é o valor do anterior e o v é o proximo do vetor (AC começa em 0 e o V na posicao 1 do vetor)
const soma = valores.reduce((ac, v) => {return ac + v})
console.log(soma)

//EVERY - verifica se é true ou false
const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
console.log(todosComecamComA)

v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = "abc"
v1[102] = 1
console.log(v1.length)

v2 = [2, "abc", true]
console.log(v2)
for(let i = 0; i < v2.length; i++){
    console.log(v2[i])
} */

/* //COMPARAÇÃO
//== - apenas do valor
//=== - faz a comparacao do tipo e o valor 
console.log(1 == 1)
console.log(1 == '1')
console.log(1 === 1)
console.log(1 === '1')
console.log(true == 1)
console.log(1 == [1])
console.log(null == null)
console.log(null == undefined)
console.log([] == false) */

/* //COERÇÃO
const n1 = 2
const n2 = '3'
//COERÇÃO INPLICITA
//nao realiza a soma pois o n2 esta em string
const n3 = n1 + n2
console.log(n3)
//COERÇÃO EXPLICITA
//com nunber() é possivel fazer a conta pois pega o numero da variavel
const n4 = n1 + Number(n2)
console.log(n4) */

/* //PROBLEMA EM UTILIZAR O VAR

//COM O VAR DEIXA EXECUTAR ESSE CODIGO
//NO PRIMEIRO CONSOLE.LOG APARECE UNDEFINED 
//E A DECLARACAO DENTRO DO IF E COMO SE FOSSE DECLARADA NO COMECO DO CODIGO, 
// FAZENDO COM Q O ULTIMO LOG APAREÇA O NOME
//COM O LET NAO DEIXA EXECUTAR, POIS O QUE É DECLARADO DENTRO DO IF FUNCIONA SO DENTRO DELE
var idade = 18
console.log("Oi, " + nome)
if(idade >=18){
    var nome = "João"
    console.log("Parabens, " + nome + ". Voce pode dirigir")
}
console.log("Ate mais, " + nome)

//ELE DEIXA DECLARAR MAIS DE UMA VARIAVEL COM O MESMO NOME, QUE NO CASO REDEFINIR ELA
//SE DEIXAR COMO LET NAO DEIXA
var linguagem = "Javascript"
console.log("Aprendendo " + linguagem)
var linguagem = "Java"
console.log("Apredendo " + linguagem) */

/* //DECLARACAO DE VARIAVEIS

var nome = 'José'
console.log(nome)
nome = "João"
console.log(nome)

let nome = "Ana"
console.log(nome)
nome = "Ana Maria"
console.log(nome)


//O CONST NAO DEIXA A VARIAVEL SER MODIFICADA
const nome = 'José'
console.log(nome);
nome = 'Joao'
*/

/* //comecando...
//declaracao de variavel -> const, let, var e tambem pode deixar sem nada
//as variaveis nao tem tipo, elas sao tipo ponteiros q apontam para objs
//sao variaveis de referencia
a = 2
console.log(typeof(a))
a = "abc"
console.log(typeof(a))
a.falar() 

//em java seria
int a = 2;
a= "abc";
a.falar; */