import { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import loginRoutes from '../routes/login/routes'
import userRoutes from '../routes/user/routes'
import { getVersionatedUrl } from '../utils/urlUtils'

export const configureExpress = (app: Express): void => {
  app.use(cors())
  app.use(bodyParser.json())
}

export const setupExpressRoutes = (app: Express): void => {
  app.use(getVersionatedUrl('/login'), loginRoutes)
  app.use(getVersionatedUrl('/user'), userRoutes)
}
