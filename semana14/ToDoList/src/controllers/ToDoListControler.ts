import { Request, Response } from 'express';

const { formatStringDate } = require('../utils/utils');

//Configurações do banco
import db from '../config/database';

//Funções de comunicação com o banco de dados
const createUser = async (
  name: string,
  nickname: string,
  email: string,
): Promise<void> => {
  try {
    await db
    .insert({
      id: Date.now(),
      name,
      nickname,
      email
    })
    .into("TodoListUser ");    
  } catch (error) {
    console.log(error) 
  }
};

const getUserById = async (
  id: string
): Promise<any> => {
  try {
    const user = await db
    .select('id', 'nickname')
    .from('TodoListUser')
    .where({ id });
  
    return user[0];
    
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (
  id: string,
  name: string,
  nickname: string
): Promise<any> => {
  try {
    await db
    .update({name, nickname})
    .from('TodoListUser')
    .where({ id });
    
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: string,
): Promise<void> => {
  try {
    await db
    .insert({
      id: Date.now(),
      title,
      description,
      limit_date: limitDate,
      creator_user_id: creatorUserId
    })
    .into("TodoListTask ");    
  } catch (error) {
    console.log(error) 
  }
};

const getTaskById = async (
  id: string
): Promise<any> => {
  try {
    const task = await db
    .select('*')
    .from('TodoListTask')
    .where({ id });
  
    return task[0];
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  async createUser(req: Request, res: Response) {
    try {
      //Validação todos os campos obrigatórios
      const keys = Object.keys(req.body)
  
      for (const key of keys) {
        if (req.body[key] == "")
          return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
      }
  
    await createUser(
        req.body.name,
        req.body.nickname,
        req.body.email
      );
  
      res.status(200).send();
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
  async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;

      if (!userId.length) {
        return res.status(400).send({ message: "Informe um ID para pesquisa do usuário"});
      }

      const user = await getUserById(userId);

      if (Object.entries(user).length === 0) {
        return res.status(400).send("Usuário não encontrado para o ID informado!");
      }

      return res.status(200).send({ user });;
    } catch (error) {
      return res.status(400).send({
        message: "Usuário não encontrado para o ID informado!",
      });
    }
  },
  async updateUser(req: Request, res: Response) {
    try {
      //Validação todos os campos obrigatórios
      const keys = Object.keys(req.body)
  
      for (const key of keys) {
        if (req.body[key] == "")
          return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
      }

      const userId = req.params.id;

      if (!userId.length) {
        return res.status(400).send({ message: "Informe um ID para pesquisa do usuário"});
      }
  
    await updateUser(
        req.params.id,
        req.body.name,
        req.body.nickname
      );
  
      res.status(200).send();
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
  async createTask(req: Request, res: Response) {
    try {
      //Validação todos os campos obrigatórios
      const keys = Object.keys(req.body)
  
      for (const key of keys) {
        if (req.body[key] == "")
          return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
      }

    const { title, description, limitDate, creatorUserId } = req.body;

    const limitDateFormart = await formatStringDate(limitDate);
  
    await createTask(
        title,
        description,
        limitDateFormart,
        creatorUserId
      );
  
      res.status(200).send();
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
  async getTaskById(req: Request, res: Response) {
    try {
      const taskId = req.params.id;

      if (!taskId.length) {
        return res.status(400).send({ message: "Informe um ID para pesquisa da tarefa"});
      }

      const task = await getTaskById(taskId);

      if (Object.entries(task).length === 0) {
        return res.status(400).send("Tarefa não encontrado para o ID informado!");
      }

      return res.status(200).send( { task });;
    } catch (error) {
      return res.status(400).send({
        message: "Tarefa não encontrado para o ID informado!",
      });
    }
  },
}