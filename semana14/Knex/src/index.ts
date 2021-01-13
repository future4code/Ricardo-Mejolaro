import express, {Request, Response} from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

//Configurações KNEX
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

//Configurações express
const app = express();
app.use(express.json());


//Funções do banco com Knex para tabela Actor
const getActorById = async (id: string): Promise<any> => {
  const result = await connection
  .select('*')
  .from('Actor')
  .where({ id })

	return result[0]
}

const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
  } catch (error) {
    console.log(error.message)    
  }

}

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

const updateSalaryActor = async (
  id: string,
  salary: number,
): Promise<void> => {
  await connection("Actor")
    .update({salary: salary})  
    .where("id", id) 
};

const deleteActorById = async (
  id: string
): Promise<void> => {
  await connection("Actor")
    .delete()  
    .where("id", id) 
};

const averageSalaryByGender = async (
  gender: string
): Promise<void> => {
  const result = await connection("Actor")
    .avg('salary as average')  
    .where({  gender });

    return result[0].average
};

//Endpoints tabela atores
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

app.post("/actor", async (req: Request, res: Response) => {
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

//Funções do banco com Knex para tabela Movies
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
}

//Endpoints tabela Movies
app.post('/movie', async (req: Request, res: Response) => {
  const { id, title, synopsis, release_date, rating, playing_limit_date } = req.body;
  try {
    await createMovie(
      id,
      title,
      synopsis,
      release_date,
      rating,
      playing_limit_date
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
})

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
})

//Configurações servidor rodando
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});