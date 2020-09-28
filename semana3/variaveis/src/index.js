/*=======Exercícios de interpretação de código=====*/
/* Resposta exercício 2 */
//No primeiro console será impresso: 10
//No segundo console será impresso: 10 5

/* Resposta exercício 2 */
//Será impresso 10 10 10

/*=======Exercícios de escrita de código=====*/
//1.A
let nome;

//1.B
let idade;

//1.C
console.log(typeof(nome));
console.log(typeof(idade));

//1.D
/*O tipo impresso foi undefined, porque as variáveis foram declaradas sem atribuições de
valores o que não permite que o javascript reconheça o seu tipo */

//1.D(2)
nome = prompt("Digite seu nome: ");
idade = prompt("Digite seu idade: ");

//1.E
console.log(typeof(nome));
console.log(typeof(idade));
/*Ambos retornaram o tipo sendo como string, pois o prompt do javascript, recebe 
dados como string. */

//1.F
console.log(`Olá ${nome}, você tem ${idade} anos.`)

/*=======Exercício 2=====*/
const perguntaUm = "1. Qual o seu endereço?"
const perguntaDois = "2. Qual a sua cor favorita?"
const perguntaTres = "3. Qual o seu hobby favorito?"
const perguntaQuatro = "4. Qual o seu filme favorito?"
const perguntaCinco = "5. Qual a sua música favorita?"

let endereco = prompt(perguntaUm)
console.log(perguntaUm)
console.log(`Resposta: ${endereco}`)

let cor = prompt(perguntaDois)
console.log(perguntaDois)
console.log(`Resposta: ${cor}`)

let hobby = prompt(perguntaTres)
console.log(perguntaTres)
console.log(`Resposta: ${hobby}`)

let filme = prompt(perguntaQuatro)
console.log(perguntaQuatro)
console.log(`Resposta: ${filme}`)

let musica = prompt(perguntaCinco)
console.log(perguntaCinco)
console.log(`Resposta: ${musica}`)

/*=======Exercício 3=====*/
const comidasFavoritas = ["Lasanha", "Comida Japonesa", "Strogonoff", "Escondidinho de Carne Seca", "Couve Flor Gratinada"]

//3.A
console.log(comidasFavoritas)

//3.B
console.log("Essas são minhas comidas favoritas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

//3.C
let comidaFavoritaUsuario = prompt("Qual sua comida favorita?")
comidasFavoritas[1] = comidaFavoritaUsuario
console.log(comidasFavoritas)

/*=======Exercício 4=====*/
const perguntasSimOuNao = [
  "Você está usando uma roupa azul hoje?",
  "Hoje a aula foi sobre variáveis?",
  "Gostou da linguagem Javascript?"
]

//4.A
const respostasTrueOuFalse = [
  false,
  true,
  true
]

console.log(perguntasSimOuNao[0], respostasTrueOuFalse[0])
console.log(perguntasSimOuNao[1], respostasTrueOuFalse[1])
console.log(perguntasSimOuNao[2], respostasTrueOuFalse[2])




