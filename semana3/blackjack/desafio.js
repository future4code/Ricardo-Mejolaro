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
function blackjack() {
   let usuarioPontos = 0
let computadorPontos = 0
let cartasUsuario = []
let cartasComputador = []
let cartasUsuarioAtuais
let cartasComputadorAtuais

alert("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   /*Cartas usuário e desafio 8 */
   while (cartasUsuario.length < 2 || cartasUsuario[0] && cartasUsuario[2] == 11) {
      const carta = comprarCarta();
      usuarioPontos += Number(carta.valor)
      cartasUsuario.push(carta.texto)
   }

   /*Cartas computador e desafio 8 */
   while (cartasComputador.length < 2 || cartasComputador[0] && cartasComputador[2] == 11) {
      const carta = comprarCarta();
      computadorPontos += Number(carta.valor)
      cartasComputador.push(carta.texto)
   }

   /*Desafio 9 e 10 */
   let novaCarta = true;

   while (novaCarta && usuarioPontos <= 21) {

      novaCarta = confirm(`
      Suas cartas são: ${cartasUsuario.join(" ")}.\n
      A carta revelada do computador é ${cartasComputador[0]}.\n
      Deseja comprar mais uma carta?`
      )

      if (novaCarta) {
         /*Nova carta usuário*/
         const carta = comprarCarta();
         usuarioPontos = Number(usuarioPontos) + Number(carta.valor)
         cartasUsuario.push(carta.texto)

         if (usuarioPontos > 21) {
            alert(`
            Suas cartas são:  ${cartasUsuario.join(" ")}.\n
            Sua pontuação é: ${usuarioPontos}.\n
            As cartas do computador são ${cartasComputador.join(" ")}.\n
            A pontuação do computador é: ${computadorPontos}\n
            "O computador ganhou!"
         `)
         }

      } else {
         /*Rodadas computador */
         while (computadorPontos <= usuarioPontos) {
            /*Nova carta computador */
            const carta = comprarCarta();
            computadorPontos = Number(computadorPontos) + Number(carta.valor)
            cartasComputador.push(carta.texto)
         }
         /*Checando vencedor */
         if (computadorPontos > 21 || usuarioPontos > computadorPontos) {
            alert(`
               Suas cartas são:  ${cartasUsuario.join(" ")}. Sua pontuação é: ${usuarioPontos}\n
               As cartas do computador são ${cartasComputador.join(" ")}.\n
               A pontuação do computador é: ${computadorPontos}\n
               "O usuário ganhou!"
            `)
         } else if (usuarioPontos < computadorPontos) {
            alert(`
               Suas cartas são:  ${cartasUsuario.join(" ")}.\n
               Sua pontuação é: ${usuarioPontos}.\n
               As cartas do computador são ${cartasComputador.join(" ")}.\n
               A pontuação do computador é: ${computadorPontos}\n
               "O computador ganhou!"
            `)
         } else {
            alert(`
               Suas cartas são:  ${cartasUsuario.join(" ")}. Sua pontuação é: ${usuarioPontos}\n
               As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é: ${computadorPontos}\n
               "Empate!"
            `)
         }
      }

   }

} else {
   console.log("O jogo acabou!")
}
}


