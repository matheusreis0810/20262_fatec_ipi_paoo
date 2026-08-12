//OBJETOS JAVASCRIPT
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
console.log(pessoa.idade)


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