import { RequestHandler } from '../../common/controllers'
import { UserDTO } from '../../dto/user'

export const insert: RequestHandler<UserDTO, UserDTO> = (req, res, next) => {
  res.send(req.body)
}
