import { getRepository } from 'typeorm'
import { getDTOFromUser, getUserFromDTO, UserDTO, UserWithAdditionalInfoDTO } from '../dto/user'
import { User } from '../model/user'
import randomstring from 'randomstring'
import bcrypt from 'bcrypt'
import { HttpError } from '../common/errors'

export const getAllUsers = async (): Promise<UserDTO[]> => {
  const userRepository = getRepository(User)
  const users = await userRepository.find()
  return users.map((user) => getDTOFromUser(user))
}

export const loginUser = async (email: string, password: string): Promise<UserDTO> => {
  const userRepository = getRepository(User)

  const user = await userRepository.findOne({ email: email })
  if (!user) throw new HttpError(401, 'Not found user.')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new HttpError(401, 'Invalid Password.')

  return getDTOFromUser(user)
}

export const insertUser = async (dto: UserDTO): Promise<UserWithAdditionalInfoDTO> => {
  const user = getUserFromDTO(dto)

  if (user.name.length > 100) throw new HttpError(400, 'User name should not exceed 100 characters.')
  if (user.phone.length > 15) throw new HttpError(400, 'User phone should not exceed 15 characters.')
  if (user.email.length > 100) throw new HttpError(400, 'User email should not exceed 100 characters.')

  const password = user.password
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const validationEndpoint = randomstring.generate(20)
  user.validationEndpoint = validationEndpoint

  user.password = hashedPassword

  const userRepository = getRepository(User)
  const exists = await userRepository.count({ email: user.email })
  if (exists > 0) throw new HttpError(400, 'Email already present in the database.')

  try {
    const savedUser = await userRepository.save(user)
    return { user: getDTOFromUser(savedUser), validationEndpoint: savedUser.validationEndpoint as string }
  } catch (err) {
    throw new HttpError(400, 'Database error')
  }
}
