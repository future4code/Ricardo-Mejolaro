//Configurações do banco
import db from '../config/database';

export async function selectAllUsers(): Promise<any> {
  const result = await db.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio;
  `)

  return result[0]
}

export async function selectUserByName(name: string):Promise<any> {
  const result = await db("aula48_exercicio")
  .select("*")
  .where("name", "LIKE", `${name}%`)
  return result
}

export async function selectUserByType(type: string):Promise<any> {
  const result = await db("aula48_exercicio")
  .select("*")
  .where("type", type)
  return result
}

export async function orderUserByNameOrType(term: string):Promise<any> {
  const result = await db("aula48_exercicio")
  .select("*")
  .orderBy(term)
  return result
}

export async function selectAllUsersPaginate(limit: number, offset: number): Promise<any> {
  const result = await db("aula48_exercicio")
  .select('*')
  .limit(limit)
  .offset(offset)

  return result
}