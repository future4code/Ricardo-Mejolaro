import { Request, Response } from 'express';

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

const getAllUsers = async (): Promise<any> => {
  try {
    const users = await db
    .select('*')
    .from('TodoListUser');
  
    return users;
    
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
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await getAllUsers();

      return res.status(200).send({ users });;
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  },
}