# Ecercício 1

Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável `connection` para fazer *queries* no banco.

```
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
};
```
---

## Questão A:

*a. Explique como é a resposta que temos quando usamos o `raw`.*

---

### R.1.a:

O raw retorna um array com dois arrays dentro, um com o resultado da busca e outro com as informações da busca.

---

## Questão B:

*b. Faça uma função que busque um ator pelo nome;*

---

### R.1.b:

```
const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
  } catch (error) {
    console.log(error.message)    
  }
};
```

---

### Questão C:

*c. Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.*

---

## R.1.c:

```
const getQuantityActorByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) AS "qtd_by_gender" 
    FROM Actor
    WHERE gender = "${gender}"
  `)

	return result[0][0]
  } catch (error) {
    console.log(error.message)
  }
};

```

---

# Ecercício 2

Agora vamos treinar um pouco os *queries builders*. Eles são uma forma mais simples de fazer requisições que já tratam as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). Abaixo, há uma query que cria um ator:

```
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

```

Podemos mandar um objeto javascript diretamente que o knex vai criar a query para nós. Perceba só que temos sempre que colocar como **chaves** do objeto os nomes das **colunas** que estão nas tabelas (como fizemos com `birth_date`).

Existem várias funções que podemos encadear: `update()`, `delete()`, `set()`, `select()`, `from()`, `avg()`, `count()` e muito outras. Pesquise na internet se tiver dúvida em qual usar!

Utilize os *queries builders* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

---

## Questão A:

*a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*

---

### R.2.a:

```

const updateSalaryActor = async (
  id: string,
  salary: number,
): Promise<void> => {
  await connection("Actor")
    .update({salary: salary})  
    .where("id", id) 
};

```

---

## Questão B:

*b. Uma função que receba um id e delete um ator da tabela*

---

### R.2.b:

```
const deleteActorById = async (
  id: string
): Promise<void> => {
  await connection("Actor")
    .delete()  
    .where("id", id) 
};

```

---

## Questão C:

*c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*

---

### R.2.c:

```
const averageSalaryByGender = async (
  gender: string
): Promise<void> => {
  const result = await connection("Actor")
    .avg('salary as average')  
    .where({  gender });

    return result[0].average
};

```

---

# Exercício 3

Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo id.  Queremos criar um método GET que receba como path param o id do ator cujas informações queremos pegar. Para isso, devemos:

- Usar a função `get` do express
- Definir o *path param* com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

```

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

---

## Questão A:

*a. Crie um endpoint com as especificações acima*

---

### R.3.a:

```

const getActorById = async (id: string): Promise<any> => {
  const result = await connection
  .select('*')
  .from('Actor')
  .where({ id })

	return result[0]
}

```

```

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

---

## Questão B:

*b. Crie um endpoint agora com as seguintes especificações:*

*- Deve ser um GET (`/actor`)*
*- Receber o gênero como um *query param* (`/actor?gender=`)*
*- Devolver a quantidade de atores/atrizes desse gênero*

---

### R.3.b:

```

const getQuantityActorByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) AS "qtd_by_gender" 
    FROM Actor
    WHERE gender = "${gender}"
  `)

	return result[0][0]
  } catch (error) {
    console.log(error.message)
  }
}

```

```

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender;
    const actor = await getQuantityActorByGender(`${gender}`);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

---

# Exercício 4

Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

*- Definir o método como `PUT`*
*- Criar um path: `/actor`*
*- Receber os parâmetros pelo body*

---

```

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um `Date`, devemos criar uma nova instância dessa classe.

Crie um endpoint para cada uma das especificações abaixo:

---

## Questão A:

*- Deve ser um POST (`/actor`)*
*- Receber o salário e o id pelo body*
*- Simplesmente atualizar o salário do ator com id em questão*

---

### R.4.a:

```

const updateSalaryActor = async (
  id: string,
  salary: number,
): Promise<void> => {
  await connection("Actor")
    .update({salary: salary})  
    .where("id", id) 
};

```

```

app.put("/actor", async (req: Request, res: Response) => {
  try {
    const { id, salary } = req.body;
    await updateSalaryActor(id, salary);

    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

---

## Questão B:

*- Deve ser um DELETE (`/actor/:id`)*
*- Receber id do ator como path param* 
*- Simplesmente deletar o ator da tabela*

---

### R.4.b:

```

const deleteActorById = async (
  id: string
): Promise<void> => {
  await connection("Actor")
    .delete()  
    .where({ id }) 
};

```

```

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteActorById(id);

    res.status(200).send("Success")
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

# Exercício 5

Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!

---

## Questão A:

Especificações do Endpoint:

*- Deve ser um POST (`/movie`)*
*- Receber todas as informações pelo body*
*- Criar o filme na tabela*

---

### R.5.a:

```

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  release_date: Date,
  rating: number,
  playing_limit_date: Date
) => {
  await connection
  .insert({
    id,
    title,
    synopsis,
    release_date,
    rating,
    playing_limit_date
  })
  .into("Movies");
} 

```

```

app.post('/movie', async (req: Request, res: Response) => {
  const { id, title, synopsis, release_date, rating, playing_limit_date } = req.body
  try {
    await createMovie(
      id,
      title,
      synopsis,
      release_date,
      rating,
      playing_limit_date
    )

    res.status(200).send({
      message: "Success"
    })
  } catch (error) {
    res.status(400).send({
      message: error.message,
    })
  }
})

```

# Exercício 6 

Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!

---

## Questão A:

Especificações do Endpoint:

*- Deve ser um GET (`/movie/all`)*
*- Não recebe nada*
*- Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens*

---

### R.6.a:

```

const getAllMovies = async (): Promise<any> => {
  try {
    const result = await connection
    .select('*')
    .from('Movies');

    return result;
  } catch (error) {
    console.log(error.message)
  }
}

```

```

app.get('/movies', async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send(movies)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
})

```

---

# Exercício 7 

Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!

---

## Questão A:

Especificações do Endpoint:

*- Deve ser um GET (`/movie/search`)*
*- Deve receber o termo de busca como uma query string (`/movie/search?query=`)*
*- Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse.Além disso, a lista deve vir ordenada pela data de lançamento*

---

### R.7.a:

```

const searchMovieByTitleOrSynopsis = async (
  search: string  
) => {
  try {
    const result = await connection
    .select('*')
    .from('Movies')
    .where('title', "LIKE", `%${search}%`)
    .orWhere('synopsis', "LIKE", `%${search}%`)

    return result[0]

  } catch (error) {
    console.log(error.message)
  }
};

```

```

app.get('/movie/search', async (req: Request, res: Response) => {
  try {
    const search = req.query.query
    const movies = await searchMovieByTitleOrSynopsis(`${search}`);

    res.status(200).send(movies)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```