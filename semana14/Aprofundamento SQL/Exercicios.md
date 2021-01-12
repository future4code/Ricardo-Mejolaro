## Exercício 1

  Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

  ALTER TABLE Actor DROP COLUMN salary;

  ### R.a:

  A query apaga a coluna salary da tabela

---

  ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

  ### R.b:

  A query muda o campo gender para sex, sendo um varchar de 6 caracteres 

---

  ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

  ### R.c:

  A query muda o campo gender para gender, sendo um varchar de 255 caracteres 

---

  d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres;

  ### R.d:

  ALTER TABLE Actor CHANGE gender gender VARCHAR(100); 

---

## Exercício 2

  Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria (Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.

  No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

  UPDATE Actor
  SET name = "Moacyr Franco"
  WHERE id = "123"

  a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

  ### R.a:
  
  UPDATE Actor
  SET name = "Vera Fisher", birth_date = "1936-10-05"
  WHERE id = "003"

---

  b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES. Então, escreva outra query para voltar ao nome anterior.

  ### R.b:
  
  UPDATE Actor
  SET name = "JULIANA PÃES"
  WHERE name = "Juliana Paes";

  UPDATE Actor
  SET name = "Juliana Paes"
  WHERE name = "JULIANA PÃES";

---

  c. Escreva uma query que atualize todas as informações do ator com o id 005

  ### R.c:
  
  UPDATE Actor
  SET name = "Wagner Moura", salary = 200000, birth_date = "1976-06-27", gender = "male"
  WHERE id = "007";
  
---

  d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

  ### R.c:
  
  UPDATE Actor
  SET town = "Rio de Janeiro"
  WHERE id = "008";

  Erro: Error Code: 1054. Unknown column 'town' in 'field list'	0.016 sec, ele verificou antes se a coluna existe, e não chegou a checar o id.

---

## Exercício 3

  Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela.

  DELETE FROM Actor WHERE name = "Tony Ramos";

  a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`

  ### R.a:

  DELETE FROM Actor WHERE name = "Fernanda Montenegro";
  
---

  b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

  ### R.b:

  DELETE FROM Actor 
  WHERE gender = "male" AND salary > 100000

---

  b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

  ### R.b:

  DELETE FROM Actor 
  WHERE gender = "male" AND salary > 100000;

## Exercício 4

  O MySQL permite que façamos queries cujo resultado final é alguma manipulação em relação aos dados salvos. Essa manipulação é dada através de uma função MySQL. O exemplo mais clássico é a função COUNT, que permite contar a quantidade de elementos. Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:

  SELECT COUNT(*) FROM Actor;

  Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:

  SELECT COUNT(*) FROM Actor WHERE gender = "female";

  Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores.

  SELECT AVG(salary) FROM Actor;

  Existem outras funções, tais como: MAX e MIN que permitem determinar os valores máximos e mínimos de uma coluna.

  a. Escreva uma query que pegue o maior salário de todos os atores e atrizes

  ### R.a:

  SELECT MAX(salary) from Actor;
  
---

  b. Escreva uma query que pegue o menor salário das atrizes

  ### R.b:

  SELECT MIN(salary) 
  FROM Actor
  WHERE gender = "female";
  
---

  c. Escreva uma query que pegue a quantidade de atrizes

  ### R.c:

  SELECT COUNT(*) AS "total_actresses"
  FROM Actor
  WHERE gender = "female";
  
---

  d. Escreva uma query que pegue a soma de todos os salários

  ### R.d:

  SELECT SUM(salary) AS "total_wages"
  FROM Actor
  
---

## Exercício 5

  Para finalizar o que vimos na aula, temos que treinar as operações indicadas por `LIMIT`, `ORDER BY` e `GROUP BY`

  O `LIMIT`, como o próprio nome sugere, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:

  SELECT * FROM Actor LIMIT 3;

  ORDER BY permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (ASC) ou decrescente (DESC). A sintaxe é: ORDER BY coluna ASC/DESC. Se quisermos os atores em ordem alfabética:

  SELECT * FROM Actor ORDER BY name ASC;

  Podemos juntar com o LIMIT e pegarmos os 4 primeiros atores (em ordem alfabética):

  SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

  Até pegar somente as 4 primeiras atrizes em ordem alfabética:

  SELECT * FROM Actor
  ORDER BY name ASC
  LIMIT 4
  WHERE gender = 'female';

  O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: GROUP BY. Ele normalmente é usado junto com algumas das funções que já vimos: AVG, COUNT, SUM, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao gender):

  SELECT COUNT(*), gender
  FROM Actor
  GROUP BY gender;

---

  a. Releia a última query. Teste-a. Explique o resultado com as suas palavras

  ### R.a:

  A query tem como resultado a quantidade de atores do sexo feminino e o dado que foi pesquisado.

---

  b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

  ### R.b:

  SELECT id, name
  FROM Actor
  ORDER BY name DESC;

---

  c. Faça uma query que retorne todos os atores ordenados pelo salário

  ### R.c:

  SELECT *
  FROM Actor
  ORDER BY salary ASC;

---

  d. Faça uma query que retorne os atores com os três maiores salarios

  ### R.d:

  SELECT *
  FROM Actor
  ORDER BY salary DESC
  LIMIT 3;

---

  e. Faça uma query que retorne a média de salário por gênero

  ### R.e:

  SELECT AVG(salary) AS "average_salary_by_gender"
  FROM Actor
  GROUP BY gender;

---

## Exercício 6

  Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!

---

  a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema.

  ### R.a:

  ALTER TABLE Movies 
  ADD playing_limit_date date;

---

  b. Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

  ### R.b:

  ALTER TABLE Movies CHANGE rating rating FLOAT NOT NULL;

---

  c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

  ### R.c:

  UPDATE Movies
  SET playing_limit_date = "2019-11-30"
  WHERE id = "001";

  UPDATE Movies
  SET playing_limit_date = "2021-02-28"
  WHERE id = "002";

---

  d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

  ### R.d:

  DELETE FROM Movies WHERE id = "004";

  UPDATE Movies
  SET synopsis = "Vamos ver o resultado"
  WHERE id = "004";

  Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0, não deu erro apenas informou que nenhuma linha foi afetada, pois não localizou o id informado.

---

## Exercício 7

  Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:

---

  a. Quantos filmes em cartaz possuem avaliações maiores do que 7.5?

  ### R.a:

  SELECT COUNT(*) AS "rating_above_7.5"
  FROM Movies
  WHERE rating > 7.5;

  Em minha tabela são 2.

---

  b. Qual a média das avaliações dos filmes?

  ### R.b:

  SELECT AVG(rating) AS "average_rating"
  FROM Movies;

  Em minha tabela são 8.333.

---

  c. Qual a quantidade de filmes em cartaz?

  ### R.c:

  SELECT COUNT(*) AS "movies_in_theaters"
  FROM Movies
  WHERE playing_limit_date > CURDATE();

  Em minha tabela são 1.
  
---

  d. Qual a quantidade de filmes que ainda irão lançar?

  ### R.d:

  SELECT COUNT(*) AS "movies_to_launchs"
  FROM Movies
  WHERE release_date > CURDATE();

  Em minha tabela são 0.

---

  e. Qual a maior nota dos filmes?

  ### R.e:

  SELECT MAX(rating) AS "highest_rating"
  FROM Movies;

  Em minha tabela é 10.

---

  f. Qual a menor nota dos filmes?

  ### R.f:

  SELECT MIN(rating) AS "highest_rating"
  FROM Movies;

  Em minha tabela é 7.

---

## Exercício 8

  Escreva uma query que:

---

  a. Retorne todos os filmes em ordem alfabética.

  ### R.a:

  SELECT *
  FROM Movies
  ORDER BY title ASC;

---

  b. Retorne os 5 primerios filmes em ordem descrente alfabética.

  ### R.b:

  SELECT *
  FROM Movies
  ORDER BY title DESC
  LIMIT 5;

---

  c. Retorne os 3 filmes mais recentes em cartaz

  ### R.c:

  SELECT *
  FROM Movies
  ORDER BY release_date DESC
  LIMIT 3;

---

  c. Retorne os 3 filmes mais recentes em cartaz

  ### R.c:

  SELECT *
  FROM Movies
  WHERE release_date < CURDATE()
  ORDER BY release_date DESC
  LIMIT 3;

---

  d. Retorne os 3 filmes melhor avalidos

  ### R.d:

  SELECT *
  FROM Movies
  ORDER BY rating DESC
  LIMIT 3;

---