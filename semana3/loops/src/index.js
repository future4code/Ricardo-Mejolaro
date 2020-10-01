/*===========Exercícios de interpretação de código=========== */
//EXERCÍCIO 1:
//Resultado console: 10

//EXERCÍCIO 2:
//2.A
/*Resultado console: 19 21 23 25 27 30 */

//2.B
/*Não! Neste caso é melhor o uso do for comum ou outros mais avançados */

/*===========Desafios de interpretação de código=========== */

//DESAFIO 1:
/*Seria impresso primeiro um 0 em sequencia 00, 000, 0000 */


/*===========Exercícios de escrita de código=========== */

//EXERCÍCIO 3:
/*Todos os exercícios 3 usam este array não comentar */
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//3.A
// for (const valores of arrayOriginal) {
//   console.log(valores)
// }

//3.B
// for (const valores of arrayOriginal) {
//   console.log(valores / 10)
// }

//3.C
// let arrayNumPares = []
// for (const valores of arrayOriginal) {
//   if (valores % 2 === 0) {
//     arrayNumPares.push(valores)
//   }
// }
// console.log(arrayNumPares)

//3.D
// let arrayStrings = []
// for (let i = 0; i < arrayOriginal.length; i++) {
//   arrayStrings.push(`O elemento do índex ${i} é ${arrayOriginal[i]}` )
// } 
// console.log(arrayStrings)

//3.E
// let valorMaximo = 20
// let valorMinimo = 131
// for (const valor of arrayOriginal) {
//   if (valorMaximo < valor) {
//     valorMaximo = valor
//   }

//   if (valorMinimo > valor) {
//     valorMinimo = valor
//   }
// }

// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)


/*===========Desafios de escrita de código=========== */
//DESAFIO 2:

// let tentativas = 1
// let numeroChutado = 0
// let maiorOuMenor = ""
// const numeroPensado = Number(prompt("Jogador(1), informe o número a ser adivinhado: "))
// console.log("Vamos jogar!")

// while (numeroChutado != numeroPensado) {
//   numeroChutado = Number(prompt("Jogador(2), chute o número que eu pensei, boa sorte!"))
//   if (numeroChutado === numeroPensado) {
//     console.log(`Acertouuuuu!!!\nO número de tentativas foi: ${tentativas}`)

//   } else {

//     if (numeroChutado < numeroPensado) {
//       maiorOuMenor = "maior"
//     } else {
//       maiorOuMenor = "menor"
//     }
//     console.log(`O número chutado foi: ${numeroChutado}\nErrrrrrrrou, é ${maiorOuMenor}`)
//   }
  
//   tentativas += 1
// }

//DESAFIO 3:

// let tentativas = 1
// let numeroChutado = 0
// let maiorOuMenor = ""
// const numeroPensado = Math.floor((Math.random() * 100) + 1)
// console.log("Vamos jogar!")

// while (numeroChutado != numeroPensado) {
//   numeroChutado = Number(prompt("Olá sou seu computador e pensei em um número de (1 a 100), dúvido vc adivinhar hahaha"))
//   if (numeroChutado === numeroPensado) {
//     console.log(`Acertouuuuu!!!\nO número de tentativas foi: ${tentativas}`)

//   } else {

//     if (numeroChutado < numeroPensado) {
//       maiorOuMenor = "maior"
//     } else {
//       maiorOuMenor = "menor"
//     }
//     console.log(`O número chutado foi: ${numeroChutado}\nErrrrrrrrou, é ${maiorOuMenor}`)
//   }
  
//   tentativas += 1
// }

/*==========Reflexão=============*/
/*Foi super fácil fazer a alteração, eu só alterei o número chutado para randômico
e alterei a frase do prompt para ficar mais interativo */