import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { createTypeORMTestConnection } from './typerom/connection'
import { Connection } from 'typeorm'

dotenv.config()

export const startUpTestEnvironment = async (): Promise<Connection> => {
  const connection = await createTypeORMTestConnection()
  return connection
}
