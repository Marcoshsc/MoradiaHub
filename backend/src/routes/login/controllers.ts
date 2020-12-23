import { RequestHandler } from '../../common/controllers'
import { LoginDTO, LoginResponseDTO } from './dto'

export const loginController: RequestHandler<LoginResponseDTO, LoginDTO> = (req, res) => {
  const { email, password } = req.body
  res.status(200).json({ message: `Email: ${email}, Password: ${password}` })
}
