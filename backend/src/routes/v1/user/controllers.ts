import { RequestHandler } from '../../../common/controllers'
import { UserDTO } from '../../../dto/user'
import { insertUser, getAllUsers } from '../../../services/user'

export const insert: RequestHandler<UserDTO, UserDTO> = (req, res, next) => {
  insertUser(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => next(err))
}

export const getAll: RequestHandler<UserDTO[], void> = (req, res, next) => {
  getAllUsers()
    .then((users) => res.status(200).json(users))
    .catch((err) => next(err))
}
