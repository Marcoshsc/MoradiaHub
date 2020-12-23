import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import loginRoutes from './routes/login/routes'
import { createConnection } from 'typeorm'

dotenv.config()

createConnection({
  type: 'postgres',
  host: process.env.DBHOST,
  port: Number.parseInt(process.env.DBPORT as string),
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  entities: [__dirname + '/model/*.ts'],
  synchronize: true
}).then(() => {
  console.log('Database connection established!')
  const app = express()

  const PORT = process.env.PORT || 3003

  app.use(cors())
  app.use(bodyParser.json())
  app.use(loginRoutes)

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
