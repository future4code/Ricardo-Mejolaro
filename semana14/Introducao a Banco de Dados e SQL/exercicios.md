### Exercício 1

a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

### R:
  CREATE TABLE Actor: é o comando de criação de uma tabela de nome Actor.

  id VARCHAR(255) PRIMARY KEY: cria uma coluna id do tipo String e definição de chave primária na tabela.

  name VARCHAR (255) NOT NULL: cria uma coluna name do tipo String e que não pode ser nulo.

  birth_date DATE NOT NULL: cria uma coluna birth_date do tipo Data e que não pode ser nulo.

  gender VARCHAR(6) NOT NULL: cria uma coluna gender do tipo String e que não pode ser nulo.

b. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

### R: 
  O comando SHOW DATABASES retorna: O nome do database: dumont-ricardo-mejolaro e information_schema

  O comando SHOW TABLES retorna: Tables_in_dumont-ricardo-mejolaro e o nome da tabela existente: Actor.


c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.

### R:

O comando SHOW TABLES retorna: a descrição da tabela Actor com seus nomes, colunas e seus valores ou congigurações.

