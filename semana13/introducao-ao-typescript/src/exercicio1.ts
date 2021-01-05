//EXERCÍCIO 1

/* A) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece? */

const minhaString: string = 'String'

//R: Ao incluir um número aparece um erro informando que: um tipo number não é aceito em uma variável do tipo string.


/* B) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings? */

const meuNumero: number = 5

//R: Para que aceito os dois tipos existem duas maneiras: 
//1: const meuNumero: number | string = '' ou 2: const meuNumero: any = 5


/* C) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string. 
*/

//R:
type person = {
  nome: string,
  idade: number,
  corFavorita: string
}

const pessoa: person = {
  nome: "Astrodev",
  idade: 30,
  corFavorita: 'Azul'
  }
  
  /*d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos. */
  
  //R: 
  const pessoa1: person = {
    nome: "Iron Man",
    idade: 45,
    corFavorita: 'Vermelho'
  }
  const pessoa2: person = {
    nome: "Heisenberg",
    idade: 54,
    corFavorita: 'Branco'
  }
  const pessoa3: person = {
    nome: "Tommy Shelby",
    idade: 37,
    corFavorita: 'Preto'
  }


  /*e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso. */

  //R:
  enum CorArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    INDIGO = "Indigo",
    VIOLETA = "Violeta"
}

const pessoa4: person = {
  nome: "Iron Man",
  idade: 45,
  corFavorita: CorArcoIris.VERMELHO
}
const pessoa5: person = {
  nome: "Heisenberg",
  idade: 54,
  corFavorita: CorArcoIris.INDIGO
}
const pessoa6: person = {
  nome: "Tommy Shelby",
  idade: 37,
  corFavorita: CorArcoIris.VERDE
}