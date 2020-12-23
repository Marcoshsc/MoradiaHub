import { Connection, createConnection } from 'typeorm'

export const createTypeORMConnection = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: process.env.DBHOST,
    port: Number.parseInt(process.env.DBPORT as string),
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    entities: [__dirname + '/model/*.ts'],
    synchronize: true
  })
