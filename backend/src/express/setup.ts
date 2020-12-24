import { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import loginRoutes from '../routes/v1/login/routes'
import userRoutes from '../routes/v1/user/routes'
import { getVersionatedUrl } from '../utils/urlUtils'
import { authenticationHandler, internalServerErrorHandler, notFoundHandler } from './globalHandlers'
import { UserEndpoints } from '../routes/v1/user/endpoints'
import LoginEndpoints from '../routes/v1/login/endpoints'

export const configureExpress = (app: Express): void => {
  app.use(cors())
  app.use(bodyParser.json())
  app.use(authenticationHandler)
}

export const setupExpressRoutes = (app: Express): void => {
  app.use(getVersionatedUrl(LoginEndpoints.BASE_URL), loginRoutes)
  app.use(getVersionatedUrl(UserEndpoints.BASE_URL), userRoutes)
}

export const setupHandlers = (app: Express): void => {
  app.use(internalServerErrorHandler)
  app.use(notFoundHandler)
}
