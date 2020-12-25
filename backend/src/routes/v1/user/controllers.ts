import { RequestHandler } from '../../../common/controllers'
import { UserDTO } from '../../../dto/user'
import { MailTemplates } from '../../../mail/template'
import { sendSimpleMail } from '../../../services/mailService'
import { insertUser, getAllUsers } from '../../../services/user'
import { getFullUrl } from '../../../utils/urlUtils'
import { UserEndpoints } from './endpoints'

export const insert: RequestHandler<UserDTO, UserDTO> = (req, res, next) => {
  insertUser(req.body)
    .then(async (dto) => {
      const { user, validationEndpoint } = dto
      res.status(201).json(user)
      const replacements = {
        name: user.name,
        link: getFullUrl(`${UserEndpoints.BASE_URL}/${user.id}/validatemail/${validationEndpoint}`)
      }
      await sendSimpleMail(MailTemplates.EMAIL_VALIDATION, replacements, user.email, 'MoradiaHub: Validação de Email.')
    })
    .catch((err) => next(err))
}

export const getAll: RequestHandler<UserDTO[], void> = (req, res, next) => {
  getAllUsers()
    .then((users) => res.status(200).json(users))
    .catch((err) => next(err))
}
