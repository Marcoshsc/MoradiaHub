import { Router } from 'express'
import { insert } from './controllers'

const userRouter = Router()

userRouter.post('/', insert)

export default userRouter
