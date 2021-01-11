## Exercício 1

a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

### R.a:
  CREATE TABLE Actor: é o comando de criação de uma tabela de nome Actor.

  id VARCHAR(255) PRIMARY KEY: cria uma coluna id do tipo String e definição de chave primária na tabela.

  name VARCHAR (255) NOT NULL: cria uma coluna name do tipo String e que não pode ser nulo.

  birth_date DATE NOT NULL: cria uma coluna birth_date do tipo Data e que não pode ser nulo.

  gender VARCHAR(6) NOT NULL: cria uma coluna gender do tipo String e que não pode ser nulo.

---

b. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

### R.b: 
  O comando SHOW DATABASES retorna: O nome do database: dumont-ricardo-mejolaro e information_schema

  O comando SHOW TABLES retorna: Tables_in_dumont-ricardo-mejolaro e o nome da tabela existente: Actor.

---

c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.

### R.c:

O comando SHOW TABLES retorna: a descrição da tabela Actor com seus nomes, colunas e seus valores ou congigurações.

---

## Exercício 2

a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

### R:

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
  );

---

b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

### R:
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "002", 
    "Wagner Moura",
    1500000,
    "1976-06-27", 
    "male"
  );

  Erro: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', isto ocorre porque a primary key deve ser única em uma tabela, ou seja não pode repetir em hipótese nenhuma.

---
  
  c. d. e. Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

### R.c:

  Erro: Error Code: 1136. Column count doesn't match value count at row 1, ocorreu devido os campos informados serem menores do que o values informados.

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    003, 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
  );

---

### R.d:

  Erro: Error Code: 1364. Field 'name' doesn't have a default value, ocorreu devido o campo name ser obrigatório e não ter sido informado em values.

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    005,
    "Lazaro Ramos",
    400000,
    "1978-11-01", 
    "male"
  );

### R.e:

  Erro: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1, ocorreu devido o campo birth_date não estar em formato de string 

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    005, 
    "Juliana Paes",
    71933333,
    "1979-03-26", 
    "female"
  );

---

  ### R.f:

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "006", 
    "Antônio Fagundes",
    400000,
    "1949-04-18", 
    "male"
  ),
  (  "007", 
    "Tais Araujo",
    600000,
    "1978-11-25", 
    "female"
  );

---

## Exercício 3

  a. Escreva uma query que retorne todas as informações das atrizes

### R.a:
  SELECT * from Actor WHERE gender = "female";

---

  b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos

### R.b: 
  SELECT salary from Actor WHERE name = "Tony Ramos";

---

  c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.

### R.c:

  Retornou 0 rows returned

---

  d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

### R.d:

  SELECT id, name, salary from Actor WHERE salary > 500000;

---

  e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

  SELECT id, nome from Actor WHERE id = "002"

### R.e:

  Erro: Error Code: 1054. Unknown column 'nome' in 'field list', ocorreu devido o campo solicitado ser nome e o cadastrado é name.

  SELECT id, name from Actor WHERE id = "002";

---

## Exercício 4

  SELECT * FROM Actor
  WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

  a. Explique com as suas palavras a query acima

### R.a:

  A query retorna todas as infomações de atores/atrizes que primeiramente começam com A ou com J e que tenham salário acima de R$ 300.000,00

---

  b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

### R.b:

  SELECT * FROM Actor
  WHERE name NOT LIKE "A%" AND salary > 350000

---

  c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

### R.c:

  SELECT * FROM Actor
  WHERE name LIKE "%G%" OR name LIKE "%g%"

---

  d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

### R.d:

  SELECT * FROM Actor
  WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%")
  AND salary BETWEEN 350000 AND 900000

---

## Exercício 5

  Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

  a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

### R.a:

  CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT  NOT NULL
  );

  A query cria uma tabela chamada Movies suas respectivas colunas.

---

  Crie 4 filmes com as seguintes informações: 

### R.b:

  INSERT INTO Movies (id, title, synopsis, release_date, rating)
  VALUES(
    "001", 
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06", 
    7
  );

---

### R.c:

  INSERT INTO Movies (id, title, synopsis, release_date, rating)
  VALUES(
    "002", 
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27", 
    10
  );

---

### R.d:

  INSERT INTO Movies (id, title, synopsis, release_date, rating)
  VALUES(
    "003", 
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02", 
    8
  );

---

### R.e:

  INSERT INTO Movies (id, title, synopsis, release_date, rating)
  VALUES(
    "004", 
    "Tropa de Elite",
    "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
    "2007-10-05", 
    9
  );

---

## Exercício 6

  Escreva uma query que:

  a. Retorne o id, título e avaliação a partir de um id específico;

### R.a:

  SELECT id, title, rating from Movies WHERE id = "003";

---

  b. Retorne um filme a partir de um nome específico;

### R.b:

  SELECT * from Movies WHERE title = "Tropa de Elite";

---

  c. Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

### R.c:

  SELECT id, title, synopsis from Movies WHERE rating >= 7;

---

## Exercício 7

  Escreva uma query que:

  a. Retorna um filme cujo título contenha a palavra vida

### R.a:

  SELECT * from Movies WHERE title LIKE "%vida%";

---

  b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

### R.b:

  SELECT * FROM Movies
  WHERE title LIKE "%Tropa%" 
  OR synopsis LIKE "%Tropa%";

---

  c. Procure por todos os filmes que já tenham lançado

### R.c:

  SELECT * FROM Movies
  WHERE release_date < "2021-01-10";

---

  d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 

### R.d:

  SELECT * FROM Movies
  WHERE release_date < CURDATE() 
  AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") 
  AND rating > 7;

  