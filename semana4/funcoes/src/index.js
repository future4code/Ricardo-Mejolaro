// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)


/*==============Exercícios de interpretação de código=========================*/
//EXERCÍCIO 1:
//1.A
//Serão impressos: 10 50 

//1.B
//Se retirasse os consoles, não apareceria nada no console.

//EXERCÍCIO 2:
//2.A
//As saídas no console são: Darvas Caio

//2.B
//As saídas no console são: Amanda Caio

//EXERCÍCIO 3:
/*A função multiplica números pares por eles mesmos o nome ideal seria: 
multiplyParNumbers().*/

/*=====================Exercícios de escrita de código======================= */
//EXERCÍCIO 4:
//4.A

// function whoAmI() {
//   console.log("Eu sou Ricardo, tenho 32 anos, moro em São Paulo e sou estudante.")
// }
// whoAmI()

//4.B
// function personInformation(name, age, city, student) {
//   let studentCheck
//   let cityCheck
//   if (student) {
//     studentCheck = "sou"
//   } else {
//     student = "não sou"
//   }

//   if (city === "São Paulo") {
//     cityCheck = "Rua Guarapari 190"
//   } else {
//     cityCheck = city
//   }

//   return `Eu sou ${name}, tenho ${age} anos, moro em ${cityCheck} e ${studentCheck} estudante`
// }
// console.log(personInformation("Goli", 23, "São Paulo", true))

//EXERCÍCIO 5:
//5.A
// const addTwoNumbers = (numberOne, numberTwo) => {
//   let resultado = numberOne + numberTwo
//   return `A soma de ${numberOne} e ${numberTwo} é: ${resultado}`
// }
// console.log(addTwoNumbers(798, 593))

//5.B
// const checksGreaterOrEqual = (firstNumber, secondNumber) => {
//   let resultado = firstNumber >= secondNumber
//   if (resultado) {
//     resultado = true
//     return `${resultado} o número ${firstNumber} é maior ou igual à ${secondNumber}` 
//   } else {
//     resultado = false
//     return `${resultado} o número ${firstNumber} não é maior ou igual à ${secondNumber}` 
//   }
// }
// console.log(checksGreaterOrEqual(593, 798))

//5.C
// const printMessage = message => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. ${message}`)
//   }
// }
// printMessage("Bem vindos a 4ª semana, LabeLovers!")

//EXERCÍCIO 6:
/*Array para todos os exercícios 6 não comentar*/
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//6.A
// const numberOfElemntsArray = (list) => {
//   return `A quantidade de elementos da sua lista é: ${list.length}`
// }
// console.log(numberOfElemntsArray(array))

//6.B
// const checkParity = (number) => {
//   let resultado = true
//   if (number % 2 !== 0) {
//     resultado = false
//   } 
//     return resultado
// }
// console.log(checkParity(1))

//6.C
// const checkParityInList = list => {
//   let quantity = 0
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 === 0) {
//       quantity += 1;
//     }
//   }
//   return `Existem ${quantity} números pares em sua lista!`
// }
// console.log(checkParityInList(array))

//6.D
/*Descomentar o 6.B para testar essa função */
// const checkParityInList = list => {
//   let quantity = 0
//   for (let i = 0; i < list.length; i++) {
//     if (checkParity(list[i])) {
//       quantity += 1;
//     }
//   }
//   return `Existem ${quantity} números pares em sua lista!`
// }
// console.log(checkParityInList(array))

/*===============================Desafios=====================================*/
//DESAFIO 1:
//1.1
// const printEverything = item => {
//   console.log(item)
// }

//1.2
/*Descomentar a função printEverything para funcionamento correto da atual */
// const addTwoNumbers = (numberOne, numberTwo) => {
//   let resultado = numberOne + numberTwo
//   return printEverything(resultado)
// }
// addTwoNumbers(999, 1052)

//DESAFIO 2:
/*Array para todos os exercícios do Desafio 2 não comentar*/
const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//2.A
// const doubleEvenNumbers = list => {
//   let evenNumberArray = []
//   for (const number of list) {
//     if(number % 2 === 0) {
//       evenNumberArray.push(number * 2)
//     }
//   }

//   return evenNumberArray;
// }
// console.log(doubleEvenNumbers(numbers))

//2.B
// const higherNumber = numbers => {
//   let higher = 0;
//   for (const number of numbers) {
//     if (number > higher) {
//       higher = number
//     }
//   }
//   return higher;
// }
// console.log(higherNumber(numbers))

//2.C
// const highestNumberIndex = numbers => {
//   let highestIndex = 0;
//   let number = 0
//   for (let i = 0; i < numbers.length; i++) {
//     if (number <= numbers[i]) {
//       number = numbers[i]
//       highestIndex = i
//     }
//   }
//   return highestIndex;
// }
// console.log(highestNumberIndex(numbers))

//2.D
// const invertedArray = list => {
//   let newArray = []
//   for (let i = list.length - 1; i >= 0 ; i--) {
//     newArray.push(list[i])
//   }
//   return newArray
// }
// console.log(invertedArray(numbers))