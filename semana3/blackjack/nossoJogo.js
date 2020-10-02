/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo ao jogo de Blackjack!")
let usuarioPontos = 0
let computadorPontos = 0
let cartasUsuario = []
let cartasComputador = []

 if(confirm("Quer iniciar uma nova rodada?")) {
   /*Cartas usuário */
   while (cartasUsuario.length < 4) {
      const carta = comprarCarta(); 
      cartasUsuario.push(carta.valor, carta.texto)
   }

   /*Cartas computador */
   while (cartasComputador.length < 4) {
      const carta = comprarCarta(); 
      cartasComputador.push(carta.valor, carta.texto)
   }

   usuarioPontos = cartasUsuario[0] + cartasUsuario[2]
   computadorPontos = cartasComputador[0] + cartasComputador[2]

   console.log(`Usuário - cartas: ${cartasUsuario[1]} ${cartasUsuario[3]}  - pontuação ${usuarioPontos} `)
   console.log(`Computador - cartas: ${cartasComputador[1]} ${cartasComputador[3]}  - pontuação ${computadorPontos} `)
   
   if (usuarioPontos > computadorPontos) {
      console.log("O usuário ganhou!")
   } else if (usuarioPontos < computadorPontos) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
	console.log("O jogo acabou!")
}