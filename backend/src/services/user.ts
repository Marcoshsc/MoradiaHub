import { getRepository } from 'typeorm'
import { getDTOFromUser, getUserFromDTO, UserDTO, UserWithAdditionalInfoDTO } from '../dto/user'
import { User } from '../model/user'
import randomstring from 'randomstring'
import bcrypt from 'bcrypt'
import { sendSimpleMail } from './mailService'
import { MailTemplates } from '../mail/template'
import { getFullUrl } from '../utils/urlUtils'
import { UserEndpoints } from '../routes/v1/user/endpoints'

export const getAllUsers = async (): Promise<UserDTO[]> => {
  const userRepository = getRepository(User)
  const users = await userRepository.find()
  return users.map((user) => getDTOFromUser(user))
}

export const loginUser = async (email: string, password: string): Promise<UserDTO> => {
  const userRepository = getRepository(User)

  const user = await userRepository.findOne({ email: email })
  if (!user) throw new Error('Not found user.')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Invalid Password.')

  return getDTOFromUser(user)
}

export const insertUser = async (dto: UserDTO): Promise<UserWithAdditionalInfoDTO> => {
  const user = getUserFromDTO(dto)

  const password = user.password
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const validationEndpoint = randomstring.generate(20)
  user.validationEndpoint = validationEndpoint

  user.password = hashedPassword

  const userRepository = getRepository(User)
  const savedUser = await userRepository.save(user)

  return { user: getDTOFromUser(savedUser), validationEndpoint: savedUser.validationEndpoint as string }
}
