import { getRepository } from 'typeorm'
import { getDTOFromUser, getUserFromDTO, UserDTO } from '../dto/user'
import { User } from '../model/user'

export const getAllUsers = async (): Promise<UserDTO[]> => {
  const userRepository = getRepository(User)
  const users = await userRepository.find()
  return users.map((user) => getDTOFromUser(user))
}

export const insertUser = async (dto: UserDTO): Promise<UserDTO> => {
  const user = getUserFromDTO(dto)

  const userRepository = getRepository(User)
  const savedUser = await userRepository.save(user)
  console.log(savedUser)
  return getDTOFromUser(savedUser)
}
