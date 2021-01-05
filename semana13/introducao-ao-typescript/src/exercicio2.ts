/* A) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros */

//R: As entradas são números e as saidas são: o menor, o maior e a média dos números

function obterEstatisticas(numeros : number[] ) : object {

  const numerosOrdenados = numeros.sort((a, b) => a - b)

  let soma : number = 0
  let num : number = 0

  for (num of numeros) {
      soma += num
  }

  type dados = {
    maior: number,
    menor: number,
    media: number
  }

  const estatisticas : dados = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

/* b) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas  */
//R: array, number e objeto


/* c) Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript: */

type amostra = {
  maior: number,
  menor: number,
  media: number,
  obterEstatisticas: (maior?: number, menor?: number, media?: number) => void
}