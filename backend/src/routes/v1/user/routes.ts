import { Router } from 'express'
import { getAll, insert } from './controllers'
import { UserEndpoints } from './endpoints'

const userRouter = Router()

userRouter.get(UserEndpoints.GET_ALL, getAll)
userRouter.post(UserEndpoints.INSERT, insert)

export default userRouter
