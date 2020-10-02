/*======Exercícios de interpretação de código========*/
//EXERCÍCIO 1:
/*O código analisa se um número é par ou impar e for par ele passa no teste,
já se for impar não passa */

//EXERCÍCIO 2:
//2.A
/*O código serve para consultar os preços das frutas no supermercado */

//2.B
/*Mensagem: O preço da fruta  Maçã  é  R$  2.25 */

//2.C
/*É impressa a mensagem do default, mensagem: O preço da fruta  Pêra  é  R$  5,
pois, sem o break em qualquer instrução, o switch executa sempre a próxima
instrução que no caso foi a default */

//EXERCÍCIO 3:
//3.A
/*Atribuindo o valor digitado pelo usuário na "variável" numero*/

//3.B
/*Valor 10 Mensagem: Esse número passou no teste */
/*Valor -10, não imprimi nada, pois a condição não é atendida, -10 é menor que 0*/

//3.C
/*Sim da erro, pois, a variável está no escopo do if e ao ser utilizada fora do 
escopo do if, no console, não é possível acessa-la  */


/*===============Exercícios de escrita de código================*/
//EXERCÍCIO 4:
/*4.1 e 4.2*/
// const idade = Number(prompt("Digite aqui a sua idade: "))
/*4.3*/
// if (idade >= 18) {
//   console.log("Você pode dirigir")
// } else {
//   console.log("Você não pode dirigir.")
// }

//EXERCÍCIO 5:
// let turno = prompt("Caro aluno! Qual seu turno? (Digite M para matutino ou V para Vespertino ou N para noturno): ").toUpperCase()

// if (turno === "M") {
//   console.log("Bom Dia!")

// } else if (turno === "V") {
//   console.log("Boa Tarde!")

// } else if (turno === "N") {
//   console.log("Boa Noite!")

// } else {
//   console.log("Turno não encontrado, verifique as opções!")
// }

//EXERCÍCIO 6:
// let turno = prompt("Caro aluno! Qual seu turno? (Digite M para matutino ou V para Vespertino ou N para noturno): ").toUpperCase()

// switch (turno) {
//   case "M":
//     console.log("Bom Dia!")
//     break;

//   case "V":
//     console.log("Boa Tarde!")
//     break;

//   case "N":
//     console.log("Boa Noite!")
//     break;

//   default:
//     console.log("Turno não encontrado, verifique as opções!")
//     break;
// }

//EXERCÍCIO 7:
// const genero = prompt("Qual o gênero do filme que querem assistir?").toLowerCase()
// const valorIngresso = Number(prompt(`Qual o valor do ingresso para o filme de genêro: ${genero}`))

// if (genero === "fantasia" && valorIngresso < 15) {
//   console.log("Bom filme!")

// } else {
//   console.log("Escolha outro filme :(")
// }

/*===============DESAFIOS================*/

//DESAFIO 1:
// const genero = prompt("Qual o gênero do filme que querem assistir?").toLowerCase()
// const valorIngresso = Number(prompt(`Qual o valor do ingresso para o filme de genêro: ${genero}`))
// const snack = prompt("Qual snack você deseja comprar?")

// if (genero === "fantasia" && valorIngresso < 15) {
//   console.log(`Bom filme! \n... com ${snack}`)

// } else {
//   console.log("Escolha outro filme :(")
// }

//DESAFIO 2:
/* const nome = prompt("Digite seu nome completo: ")
let tipoDeJogo = prompt("Digite o tipo de jogo (IN para internacional ou DO para doméstico): ").toUpperCase()
let etapaDoJogo = prompt("Digite a etapa do jogo (SF para semi-final ou DT para decisão de terceiro lugar ou FI para final): ").toUpperCase()
const categoria = Number(prompt("Digite a categoria: (1, 2, 3 ou 4)"))
const QtdIngressos = Number(prompt("Digite a quantidade de ingressos: "))
let valorDoIngresso = 0
let valorTotal = 0

//Verifica Tipo de Jogo
if (tipoDeJogo === "IN" || tipoDeJogo === "DO") {

  //Define tipo de jogo
  if (tipoDeJogo === "DO") {
    tipoDeJogo = "Nacional"
  } else {
    tipoDeJogo = "Internacional"
  }

  //Define etapa de jogo
  if (etapaDoJogo === "SF") {
    etapaDoJogo = "Semifinal"

  } else if (etapaDoJogo === "DT") {
    etapaDoJogo = "Decisão do 3° lugar"

  } else {
    etapaDoJogo = "Final"
  }

  //Define valor do ingresso DO
  if ((categoria === 1 && etapaDoJogo === "Semifinal") || (categoria === 2 && etapaDoJogo === "Final")) {
    valorDoIngresso = 1320.00

  } else if ((categoria === 2 && etapaDoJogo === "Semifinal") || (categoria === 3 && etapaDoJogo === "Final")) {
    valorDoIngresso = 880.00

  } else if (categoria === 3 && etapaDoJogo === "Semifinal") {
    valorDoIngresso = 550.00

  } else if (categoria === 4 && etapaDoJogo === "Semifinal") {
    valorDoIngresso = 220.00

  } else if (categoria === 1 && etapaDoJogo === "Decisão do 3° lugar") {
    valorDoIngresso = 660.00

  } else if (categoria === 2 && etapaDoJogo === "Decisão do 3° lugar") {
    valorDoIngresso = 440.00
    
  } else if ((categoria === 3 && etapaDoJogo === "Decisão do 3° lugar") || (categoria === 4 && etapaDoJogo === "Final")) {
    valorDoIngresso = 330.00
    
  } else if (categoria === 4 && etapaDoJogo === "Decisão do 3° lugar") {
    valorDoIngresso = 170.00
    
  } else if (categoria === 1 && etapaDoJogo === "Final") {
    valorDoIngresso = 1980.00
    
  }

  //Define valor do ingresso IN
  if (tipoDeJogo === "Internacional") {
    let conversorDolar = valorDoIngresso / 4.10
    let totalDolar = QtdIngressos * conversorDolar
    valorTotal = `U$ ${totalDolar}`
    valorDoIngresso = `U$ ${conversorDolar}`

  } else {
    let totalReais = QtdIngressos * valorDoIngresso
    valorTotal = `R$  ${totalReais}`
    valorDoIngresso = `R$ ${valorDoIngresso}`
  }

} else {
  console.log("Tipo de jogo inválido!")
}

console.log(`
---Dados da compra---\n
Nome do cliente: ${nome}\n
Tipo de jogo: ${tipoDeJogo}\n
Etapa do Jogo: ${etapaDoJogo}\n
Categoria: ${categoria}\n
Quantidade de Ingressos: ${QtdIngressos} ingresso(s)\n
---Valores---\n
Valor do ingresso: ${valorDoIngresso}\n
Valor total: ${valorTotal}
`) */