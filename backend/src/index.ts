import 'reflect-metadata'
import * as dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import { createTypeORMConnection } from './typeorm/connection'
import './redis/client'
import { configureExpress, setupExpressRoutes, setupHandlers } from './express/setup'

createTypeORMConnection().then(() => {
  console.log('Database connection established!')
  const app = express()

  const PORT = process.env.PORT || 3003

  configureExpress(app)
  setupExpressRoutes(app)
  setupHandlers(app)

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
