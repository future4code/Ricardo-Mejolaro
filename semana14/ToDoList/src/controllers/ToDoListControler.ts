import { Request, Response } from 'express';

//Configurações do banco
import db from '../config/database';

//Funções de comunicação com o banco de dados
const createUser = async (
  name: string,
  nickname: string,
  email: string,
): Promise<void> => {
  await db
    .insert({
      id: Date.now(),
      name,
      nickname,
      email
    })
    .into("TodoListUser ");
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
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
}