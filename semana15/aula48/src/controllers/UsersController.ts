import { Request, Response } from 'express';

import { selectAllUsers, selectUserByName, selectUserByType, orderUserByNameOrType } from '../model/UsersModel';


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await selectAllUsers()

    if (!users.length) {
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send({ users })

  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await selectUserByName(req.params.name as string)
    if (!users.length) {
      res.statusCode = 404
      throw new Error("Usuário não encontrado!")
    }
    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await selectUserByType(req.params.type)

    if (!users.length) {
      res.statusCode = 404
      throw new Error("Usuário não encontrado!")
    }
    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const getUsersOrderedByNameOrType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderBy } = req.query
    let users = []

    if (orderBy !== "name" && orderBy !== "type") {
      res.statusCode = 422
      throw new Error("Termos de busca devem ser 'name' ou 'type'!");
      
    } else {      
      users = await orderUserByNameOrType(orderBy)
    }

    if (!users.length) {
      res.statusCode = 404
      throw new Error("Usuários não encontrados!")
    }
    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}