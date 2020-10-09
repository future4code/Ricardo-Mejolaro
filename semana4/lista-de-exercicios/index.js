/*==========================Exercícios de interpretação de código===============================*/
//EXERCÍCIO 1:
/*A função conversor de moeda é, a conversão de valor em dólar para valor em real, o
retorno neste caso será: R$ (valor em real) dependendo do valor de cotação informado. */

//EXERCÍCIO 2:
/*A função investe dinheiro, calcula o retorno financeiro dependendo do tipo de 
investimento junto ao valor investido. 
No caso do investimento novoMontante o retorno será: 165.
No caso do investimento segundoMontante o retorno será: TIPO DE INVESTIMENTO INFORMADO INCORRETO!
*/

//EXERCÍCIO 3:
/*O código 3 analisa um array de números e retorna no array1 os números pares e no array2
os números ímpares. Os retornos dos consoles são:
Quantidade total de números é: 14
6
8
*/

//EXERCÍCIO 4:
/*O código 4 analisa o array inteiro e no primeiro if o numero1 só recebe o numero quando o numero 
for menor que numero1 então ele segue a sequência: 
numero1 recebe 25, pois, é menor que infinito(porpriedade do Javascript).
numero1 recebe 12, pois, é menor que 25.
numero1 não recebe: 55, 64, 121, 44, pois, não são menores que 12.
numero1 recebe 11, pois, é menor que 12.
numero1 não recebe: 84, 51, 48, 14, 73, 111, 283, pois, não são menores que 11.
numero1 recebe 1, pois, é menor que 11.
numero1 não recebe: 99, 13, 31, 83, 131, 1, 1.1, pois, não são menores que 1.
numero1 recebe -10, pois, é menor que 1.
numero1 não recebe: 25, e 1590, pois, não são menores que -10.

No segundo if o numero2 só recebe o numero quando o numero for maior que numero2 então ele segue
a sequência:
numero2 recebe 25, pois, é maior que 0.
numero2 não recebe 12, pois, não é maior que 25.
numero2 recebe 55, pois, é maior que 25.
numero2 recebe 64, pois, é maior que 55.
numero2 recebe 121, pois, é maior que 64.
numero2 não recebe: 44, 11, 84, 51, 48, 14, 73, 111, pois, não são maiores que 121.
numero2 recebe 283, pois, é maior que 121.
numero2 não recebe: 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, pois, não são maiores que 283.
numero2 recebe 1590, pois, é maior que 283.

Impressões do console são: -10 e 1590.
*/

/*==========================Exercícios de Lógica de Programação===============================*/

//EXERCÍCIO 1:
/*Uma forma de iterar um array é utilizando o, for, por exemplo: */
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

/*Outra forma de iterar um array é utilizando o, ForEach(), por exemplo: */
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.forEach((numero) => {
//     console.log(numero);
// })

/*Mais uma forma de iterar um array é utilizando o, map(), por exemplo: */
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = array.map((numero) => {
//     //Retorna os números do array em dobro
//     return numero * 2;
// })
// console.log(newArray);

//EXERCÍCIO 2:
//2.A: false
//2.B: false
//2.C: true
//2.D: true
//2.E: true

//EXERCÍCIO 3:
/*O código escrito pelo nobre colega resulta em um looping infinito, primeiro que a quantidade de
números pares não esta definida e o i é eternamente multiplicado por 2*/

/*Meu código: */
// function firstEvenNumbers(quantity) {
//   let i = 0
//   while(i < quantity) {
//     console.log(i * 2)
//     i++
//   }
// }
// firstEvenNumbers(5);

//EXERCÍCIO 4:
// function triangleType(sideOne, sideTwo, sideThree) {
//   if (sideOne !== sideTwo && sideTwo !== sideThree && sideOne !== sideThree) {
//     console.log(`O triângulo com as medidas: ${sideOne}, ${sideTwo} e ${sideThree} é: Escaleno`);

//   } else if ((sideOne === sideTwo && (sideThree !== sideOne)) || (sideTwo === sideThree && (sideThree !== sideOne)) || (sideOne === sideThree &&  (sideThree !== sideTwo))) {
//     console.log(`O triângulo com as medidas: ${sideOne}, ${sideTwo} e ${sideThree} é: Isósceles`);

//   } else {
//     console.log(`O triângulo com as medidas: ${sideOne}, ${sideTwo} e ${sideThree} é: Equilátero`);
//   }
// }
// triangleType(3, 1, 1);

//EXERCÍCIO 5:
// function checksTwoNumbers(numberOne, numberTwo) {
//   const bigger = numberOne > numberTwo ? numberOne : numberTwo;
//   const difference = Math.abs(numberOne - numberTwo);
//   let divisible = `não é`

//   if (numberOne % numberTwo === 0) {
//     divisible = `é`
//   }

//   console.log(`
//     O maior é: ${bigger}\n 
//     ${numberOne} ${divisible} divisível por ${numberTwo}\n
//     A diferença entre eles é: ${difference}
//   `)
// }
// checksTwoNumbers(15, 30);


/*===================================Exercícios de Funções======================================*/
//EXERCÍCIO 1:

// const array = [10, 0, 45, 9, -1, 6, 73, 8, 2, 10];

// function secondBiggerAndSmaller(array) {
//   let max = Math.max(...array);
//   let min = Math.min(...array);
//   let secondBigger = 0;
//   let secondSmaller = max;

//   for (const num of array) {
//     if (num < max && num > secondBigger) {
//       secondBigger = num;
//     }

//     if (num > min && num < secondSmaller) {
//       secondSmaller = num;
//     }

//   }  

//   return console.log(`
//     O segundo menor número da lista é: ${secondSmaller}\n
//     O segundo maior número da lista é: ${secondBigger}
//   `)
// }
// secondBiggerAndSmaller(array);

//EXERCÍCIO 2:
// const salutation = () => {
//   console.log("Hello Future4");
// }
// salutation();

/*===================================Exercícios de Objetos======================================*/
//EXERCÍCIO 1:
/*Arrays são listas de dados que podem armazernar diversos tipos de elementos, como: numbers, 
strings, booleans, objetos e etc. 

Objetos são conjuntos de informações que são compostas por chave e valor, o que podem ser definidas
de acordo com o que, o objeto se refere no mundo real. Ex: Uma pessoa pode ter: nome, idade, altura,
peso e etc.
*/

//EXERCÍCIO 2:
// function createRectangle(side1, side2) {
//   const perimeter = (side1 + side2) * 2;
//   const area = side1 * side2;

//   rectangle = {
//     width: side1,
//     height: side2,
//     perimeter,
//     area
//   }

//   return rectangle;
// }
// console.log(createRectangle(10, 20));

//EXERCÍCIO 3:
// const favoriteMovie = {
//   title: "Homem de Ferro 3",
//   year: 2013,
//   director: "Shane Black",
//   cast: [ "Robert Downey Jr.", "Gwyneth Paltrow"]
// }

// function printInfMovie(movie) {
//   const stars = movie.cast.join(", ")

//   return `
//     Venha assistir ao filme ${movie.title},
//     de ${movie.year}, dirigido por ${movie.director} 
//     e estrelado por ${stars}.
//     `
// }
// console.log(printInfMovie(favoriteMovie));

//EXERCÍCIO 4:
const person = {
  name: "Ricardo Mejolaro",
  age: 32,
  email: "ricardo.mejolaro@gmail.com",
  address: "Rua pixinguinha, 127"
}

function anonymizePerson(person) {
  const newPerson = {...person, name: "ANÔNIMO"}

  return newPerson;
}
console.log(anonymizePerson(person));