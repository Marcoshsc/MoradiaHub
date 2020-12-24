import { User } from '../model/user'
import { getFormattedTimeStamp } from '../utils/date'

export interface UserDTO {
  id: number
  email: string
  name: string
  phone: string
  password?: string
  createdAt?: string
  updatedAt?: string
}

export const getDTOFromUser = (entity: User): UserDTO => ({
  ...entity,
  id: entity.id as number,
  createdAt: getFormattedTimeStamp(entity.createdAt as Date),
  updatedAt: getFormattedTimeStamp(entity.updatedAt as Date),
  password: undefined
})

export const getUserFromDTO = (dto: UserDTO): User => ({
  ...dto,
  id: undefined,
  password: dto.password as string,
  createdAt: undefined,
  updatedAt: undefined
})
