/*========EXERCÍCIOS DE INTERPRETAÇÃO=========*/
/*Exercício 1 */
//a. false
//b. false
//c. true
//e. boolean

/*Exercício 2 */
//a. undefined
//b. null
//c. 11
//d. 3
//e. [3, 19,  5,  6,  7,  8,  9, 10, 11, 12, 13]
//f. 9


/*========EXERCÍCIOS DE ESCRITA DE CÓDIGO=========*/
/*Exercício 1 */
//1.a
//const idade = Number(prompt('Qual a sua idade?'))
//1.b
//const idadeAmigo = Number(prompt('Oi amiga!, qual a sua idade?'))
//1.c
//console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
//1.d
//console.log(idade - idadeAmigo)

/*Exercício 2 */
//2.a
//const nuumeroPar = Number(prompt('Por gentileza, digite um número par!'))
//2.b
//console.log(nuumeroPar%2)
//2.c
/*O padrão é que todo resto da divisão de número par é 0*/
//2.d
/*É impresso o número 1, pois o resto da divisão é diferente de 0*/

/*Exercício 3 */
//3.a
// let listaDeTarefas = []
//3.b
// let tarefaUm = prompt('Informe a primeira tarefa que você precisa realizar hoje: ')
// listaDeTarefas.push(tarefaUm)
// let tarefaDois = prompt('Informe a segunda tarefa que você precisa realizar hoje: ')
// listaDeTarefas.push(tarefaDois)
// let tarefaTres = prompt('Informe a terceira tarefa que você precisa realizar hoje: ')
// listaDeTarefas.push(tarefaTres)
//3.c
//console.log(listaDeTarefas)
//3.d
//let indiceTarefaRealizada = Number(prompt('Informe o indice da tarefa já realizada! Ex: 0 ou 1 ou 2: '))
//3.e
//listaDeTarefas.splice(indiceTarefaRealizada, 1)
//3.f
//console.log(listaDeTarefas)

/*Exercício 4 */
// const emailDoUsuario = prompt('Por gentileza, informe o seu email: ')
// const nomeDoUsuario = prompt('Por gentileza, informe o seu nome: ')
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

/*========DESAFIOS=========*/

/*Desafio 1 */

//1.A
// const GRAUS_FAHRENHEIT = 77
// const KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
// console.log(`A conversão da temperatura ${GRAUS_FAHRENHEIT}°F (Fahrenheit) para (Kelvin) é: ${KELVIN}K`)

//1.B
// const GRAUS_CELSIUS = 80
// const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
// console.log(`A conversão da temperatura ${GRAUS_CELSIUS}°C (Celsius) para (Fahrenheit) é: ${GRAUS_FAHRENHEIT}°F`)

//1.C
// const GRAUS_CELSIUS = 30
// const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
// const KELVIN = GRAUS_CELSIUS + 273.15
// console.log(`As conversões da temperatura ${GRAUS_CELSIUS}°C (Celsius) para (Fahrenheit) é: ${GRAUS_FAHRENHEIT}°F e (Celsius) para (Kelvin) é: ${KELVIN}`)

//1.D
// const GRAUS_CELSIUS = Number(prompt("Informe o grau em Celsius para converões em Fahrenheit(°F) e Kelvin(K)"))
// const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
// const KELVIN = GRAUS_CELSIUS + 273.15
// console.log(`As conversões da temperatura ${GRAUS_CELSIUS}°C (Celsius) para (Fahrenheit) é: ${GRAUS_FAHRENHEIT}°F e (Celsius) para (Kelvin) é: ${KELVIN}`)

/*Desafio 2 */

//2.A
// const custoQuilowattHora = 0.05
// let quilowattHoraConsumido = 280
// let conta = custoQuilowattHora * quilowattHoraConsumido
// console.log(`O valor a ser pago por ${quilowattHoraConsumido} kWh é: R$ ${conta}`)

//2.B
// const custoQuilowattHora = 0.05
// const desconto = 15
// let quilowattHoraConsumido = 280
// let conta = (custoQuilowattHora * quilowattHoraConsumido)
// conta -= conta * desconto / 100
// console.log(`O valor a ser pago por ${quilowattHoraConsumido} kWh, com desconto de ${desconto}% é: R$ ${conta}`)

/*Desafio 3 */

//3.A
// const libras = 20
// let quilograma = libras / 2.2045
// console.log(`${libras}lb equivalem a ${quilograma} kg`)

//3.B
// const onca = 10.5
// let quilograma = onca / 3.527
// console.log(`${onca}oz equivalem a ${quilograma} kg`)

//3.C
// const milha = 100
// let metros = milha * 1609
// console.log(`${milha}mi equivalem a ${metros} m`)

//3.D
// const pes = 50
// let metros = pes / 3.281
// console.log(`${pes}ft equivalem a ${metros} m`)

//3.E
// const galaoAmericano = 103.56
// let litros = galaoAmericano * 3.785
// console.log(`${galaoAmericano}gal equivalem a ${litros} l`)

// 3.F
// const xicara = 450
// let litros = (xicara * 6) / 25
// console.log(`${xicara}xic equivalem a ${litros} l`)

// 3.G
// const xicara = Number(prompt("Digite a quantidade de xícaras para converter por litros: "))
// let litros = (xicara * 6) / 25
// console.log(`${xicara}xic equivalem a ${litros} l`)