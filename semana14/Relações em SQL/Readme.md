# Exercício 1

*No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações.*

*As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela*

```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

```

---

## Questão A

*a. Explique o que é uma chave estrangeira*

---

### R.1.A: 

No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.

---

## Questão B

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes.*

---

### R.1.B: 

```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

```

```

INSERT INTO Rating
VALUES 
("001", "A fórmula é manjada, isso eu seei, o cinema americano fez muito isso, nos anos 80 sobretudo, porém o filme brasileiro conta com um diferencial, ou melhor dois: Glória Pires e Tony Ramos.O casal brilha no filme e o torna muito divertido, sobretudo Tony.Glorinha arrasa como sempre.Uma comédia leve, para todos, sobretudo os que não tem preconceito com o nosso cinema e nem com os nossos atores.", 9.5, "001"),
("002", "Tenho até o box, Dona picucha indefinível! <3", 10, "002"),
("003", "Filme que até então só conhecia por nome e cena final, consegue ir bem do drama a comédia e o trio principal é muito bom.", 7.5, "003"),
("004", "Uma grandiosa obra nacional! Este filme aclamado pela mídia faz jus ao seu status no cenário de filmes brasileiros.", 10, "010");

```

---

## Questão C

*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*

---

### R.1.C: 

```

INSERT INTO Rating
VALUES 
("005", "Comentário teste", 5.0, "004");

```

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-ricardo-mejolaro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O erro ocorre devido a chave de relação entre tabelas o ID do filme não existir na tabela Movies.

---

## Questão D

*d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

---

### R.1.D: 

```

ALTER TABLE Movies
DROP COLUMN rating;

```

---

## Questão E

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

---

### R.1.E: 

```

DELETE
FROM Movies
WHERE id = "010";

```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-ricardo-mejolaro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O erro ocorre devido o filme possuir comentários e ter relação com a tabela rating, para que seja possível excluir deve-se primeiramente excluir o comentário, ou utilizar a cláusula: CASCADE.

---

# Exercício 2

*Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.***

*Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.*

```

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

```

---

## Questão A

*a. Explique, com as suas palavras, essa tabela.*

---

### R.2.A: 

É uma tabela auxiliar que guardará os ids do filme e ator que possuem algum tipo de relação.

---

## Questão B

*b. Crie, ao menos, 6 relações nessa tabela*

---

### R.2.B: 

```

INSERT INTO MovieCast
VALUES ("001", "002"),
	     ("003", "005"),
       ("010", "004"),
       ("001", "001"),
       ("003", "003"),
       ("001", "004");

```

---

## Questão C

*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

---

### R.2.C: 

```

INSERT INTO MovieCast
VALUES ("005", "003");

```

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-ricardo-mejolaro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O filme com ID 005 não existe, por esse motivo não é possível criar relação entre tabelas com um filme que não existe.

---

## Questão D

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

---

### R.2.D: 

```

DELETE
FROM Actor
WHERE id = "004";

```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-ricardo-mejolaro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível apagar o ator que tem relação com algum filme definida na tabela MovieCast


---

# Exercício 3

*Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`.*

*Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:*

```

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

```

---

## Questão A

*a. Explique, com suas palavras, a query acima. O que é o operador ON?*

---

### R.3.A: 

O operador ON verifica e retorna apenas filmes que possuem rating definidos na tabela Rating.

---

## Questão B

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*

---

### R.3.B: 

```

SELECT Movies.id AS movie_id, title AS title_movie, rate AS rating 
FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id
WHERE rate <> "null";

```

---

# Exercício 4

*Existem outros dois operadores do tipo JOIN: LEFT JOIN e RIGHT JOIN. O primeiro retorna todas as ocorrências da primeira tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna todas as ocorrências da segunda tabela (à direita) e, então, procura todas as correspondências na outra tabela.*

---

## Questão A

*a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*

---

### R.4.A: 

```

SELECT title AS title_movie, Movies.id AS movie_id, rate AS rating, comment AS rating_comment
FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

```

---

## Questão B

*b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*

---

### R.4.B: 

```

SELECT Movies.id AS movie_id, title AS title_movie, MovieCast.actor_id
FROM Movies
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movies.id;

```

---

## Questão c

*c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*

---

### R.4.C: 

```

SELECT Movies.id AS movie_id, title AS title_movie, AVG(rate) AS average_rating_movies
FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY Movies.id;

```

---

# Exercício 5

*Agora, para finalizar, vamos ver uma query com a nossa relação **M:N**. Nela, nós temos 3 tabelas envolvidas: `Movie`, `Actor` e `MovieCast`. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.*

*Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:*

```

SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

```

---

## Questão A

*a. Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?*

---

### R.5.A: 

Porque precisamos primeiramente reunir informações de duas tabelas e apartir desta unir com outra, não existe a possibilidade de informar 3 tableas em um único JOIN.

---

## Questão B

*b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query*

---

### R.5.B: 

```

SELECT Movies.id AS movie_id, Movies.title AS title_movie, Actor.id AS actor_id, Actor.name AS actor_name
FROM Movies 
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

```

---

## Questão C

*c. A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*

```

SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

```

---

### R.5.C: 

Error Code: 1054. Unknown column 'm' in 'field list'

Deu erro de sintaxe no: m,title existe uma ',' ao invés de '.'

---

## Questão D

*d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*

---

### R.5.D: 

```

  SELECT 
    Movies.id as movie_id, 
      Movies.title,
      Movies.synopsis,
      Movies.release_date,
      Movies.playing_limit_date,
      Actor.id as actor_id, 
      Actor.name, 
      Rating.rate, 
      Rating.comment 
  FROM Movies 
  LEFT JOIN Rating ON Rating.movie_id = Movies.id
  LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
  JOIN Actor ON Actor.id = MovieCast.actor_id;

```

---

# Exercício 6

*Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (Óscar de melhor filme,  Óscar de melhor direção, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.*

---

## Questão A

*a. Que tipo de relação é essa?*

---

### R.6.A: 

A relação ao meu ver é N:M, poque um filme poder ganhar mais de 1 oscar e o mesmo oscar pode ser dado a mais de um filme, desde que seja em anos diferentes.

---

## Questão B

*b. Explicite a query que você usou para criar a tabela*

---

### R.6.B: 

```

CREATE TABLE Oscar_Movie (
	id VARCHAR(255) PRIMARY KEY,
	oscar_category VARCHAR(255) NOT NULL,
  movie_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

```

---

## Questão C

*c. Crie ao menos 2 óscar para cada um dos filmes*

---

### R.6.C: 

```

INSERT INTO Oscar_Movie
VALUES 
("001", "Melhor Atriz", "2007-02-09", "001"),
("002", "Melhor Ator", "2007-02-09", "001"),
("003", "Melhor Atriz Coadjuvante", "2013-02-09", "002"),
("004", "Melhor Roteiro Original", "2007-02-09", "002"),
("005", "Melhor Roteiro Adaptado", "2018-02-09", "003"),
("006", "Melhor Figurino", "2018-02-09", "003"),
("007", "Melhor Filme", "2008-02-09", "010"),
("008", "Melhor Direção", "2008-02-09", "010");

```

---

## Questão D

*d. Faça uma query que retorne todos os filmes e seus respectivos óscar*

---

### R.6.d: 

```

SELECT 
	Movies.id as movie_id, 
    Movies.title,
    Movies.synopsis,
    Movies.release_date,
    Movies.playing_limit_date,
    Oscar_Movie.oscar_category
FROM Movies
JOIN Oscar_Movie ON Oscar_Movie.movie_id = Movies.id;

```

---