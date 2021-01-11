/*a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo? */

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//R: o comando tsc exercicio4.ts

/* b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças. */

//R: Sim, o comando seria npm run start


/*c) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer. */

//R: Sim, o comando seria tsc seguido do nome se todos os arquivos.

/*d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides? */

//R: O que chamos atenção apenas foi a versão do es5, os nomes das pastas e a quantidade de opções possíveis