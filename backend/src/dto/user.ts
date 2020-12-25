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

export interface UserWithAdditionalInfoDTO {
  user: UserDTO
  validationEndpoint: string
}

export const getDTOFromUser = (entity: User): UserDTO => ({
  id: entity.id as number,
  createdAt: getFormattedTimeStamp(entity.createdAt as Date),
  updatedAt: getFormattedTimeStamp(entity.updatedAt as Date),
  password: undefined,
  email: entity.email,
  name: entity.name,
  phone: entity.phone
})

export const getUserFromDTO = (dto: UserDTO): User => ({
  ...dto,
  id: undefined,
  password: dto.password as string,
  createdAt: undefined,
  updatedAt: undefined
})
