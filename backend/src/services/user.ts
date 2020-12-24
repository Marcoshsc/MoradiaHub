import { getRepository } from 'typeorm'
import { getDTOFromUser, getUserFromDTO, UserDTO } from '../dto/user'
import { User } from '../model/user'
import bcrypt from 'bcrypt'

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

export const insertUser = async (dto: UserDTO): Promise<UserDTO> => {
  const user = getUserFromDTO(dto)

  const password = user.password
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  user.password = hashedPassword

  const userRepository = getRepository(User)
  const savedUser = await userRepository.save(user)
  console.log(savedUser)
  return getDTOFromUser(savedUser)
}
