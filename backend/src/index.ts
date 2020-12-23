import 'reflect-metadata'
import express from 'express'
import * as dotenv from 'dotenv'
import { createTypeORMConnection } from './typeorm/connection'
import { configureExpress, setupExpressRoutes } from './express/setup'

dotenv.config()

createTypeORMConnection().then(() => {
  console.log('Database connection established!')
  const app = express()

  const PORT = process.env.PORT || 3003

  configureExpress(app)
  setupExpressRoutes(app)

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
