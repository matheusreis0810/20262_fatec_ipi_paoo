//PROBLEMA EM UTILIZAR O VAR

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

/* //ELE DEIXA DECLARAR MAIS DE UMA VARIAVEL COM O MESMO NOME, QUE NO CASO REDEFINIR ELA
//SE DEIXAR COMO LET NAO DEIXA
var linguagem = "Javascript"
console.log("Aprendendo " + linguagem)
var linguagem = "Java"
console.log("Apredendo " + linguagem) */


//DECLARACAO DE VARIAVEIS

/* var nome = 'José'
console.log(nome)
nome = "João"
console.log(nome) */

/* let nome = "Ana"
console.log(nome)
nome = "Ana Maria"
console.log(nome) */


/* //O CONST NAO DEIXA A VARIAVEL SER MODIFICADA
const nome = 'José'
console.log(nome);
nome = 'Joao'
 */


//comecando...
//declaracao de variavel -> const, let, var e tambem pode deixar sem nada
//as variaveis nao tem tipo, elas sao tipo ponteiros q apontam para objs
//sao variaveis de referencia
/* a = 2
console.log(typeof(a))
a = "abc"
console.log(typeof(a))
a.falar() 

//em java seria
int a = 2;
a= "abc";
a.falar;
*/