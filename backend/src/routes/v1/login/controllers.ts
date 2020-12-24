import { RequestHandler } from '../../../common/controllers'
import { LoginDTO } from '../../../dto/login'
import { generateJwt } from '../../../services/authentication'
import { loginUser } from '../../../services/user'

export const loginController: RequestHandler<void, LoginDTO> = (req, res, next) => {
  const { email, password } = req.body
  loginUser(email, password)
    .then((user) => {
      const jwtToken = generateJwt(user.id)
      res.setHeader('token', jwtToken)
      res.status(200).send()
    })
    .catch((err) => next(err))
}
