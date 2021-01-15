import { Request, Response } from 'express';

const { formatStringDate } = require('../utils/utils');

//Configurações do banco
import db from '../config/database';

//Funções de comunicação com o banco de dados
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

const getTasksByUser = async (
  creator_user_id: string
): Promise<any> => {
  try {
    const tasks = await db.raw(`
      SELECT TodoListTask.id, TodoListTask.title, TodoListTask.description, TodoListTask.status, TodoListTask.limit_date, TodoListTask.creator_user_id, TodoListUser.name as creatorUserNickname
      FROM TodoListTask
      JOIN TodoListUser ON TodoListUser.id = ${creator_user_id};
    `)
      
    return tasks[0];
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
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
  async getTasksByUser(req: Request, res: Response) {
    try {
      const { creatorUserId } = req.query;

      if (creatorUserId === "") {
        return res.status(400).send({ message: "Informe um ID de usuário para pesquisa da tarefa"});
      }

      const tasks = await getTasksByUser(`${creatorUserId}`);

      if (tasks.length === 0) {
        return res.status(400).send({ message: "Tarefa não encontrado para o usuário informado!"});
      }

      return res.status(200).send( { tasks });;
    } catch (error) {
      return res.status(400).send({
        message: "Tarefa não encontrado para o usuário informado!",
      });
    }
  },
}