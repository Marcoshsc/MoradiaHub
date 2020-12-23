import { Router } from 'express'
import { loginController } from './controllers'
import LoginEndpoints from './endpoints'

const loginRouter = Router()

loginRouter.get(LoginEndpoints.LOGIN, loginController)

export default loginRouter
