import { Connection, createConnection } from 'typeorm'

export const createTypeORMTestConnection = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: process.env.DBHOST_TEST,
    port: Number.parseInt(process.env.DBPORT_TEST as string),
    username: process.env.DBUSER_TEST,
    password: process.env.DBPASSWORD_TEST,
    database: process.env.DBNAME_TEST,
    entities: ['src/model/*.ts'],
    synchronize: true,
    dropSchema: true
  })
