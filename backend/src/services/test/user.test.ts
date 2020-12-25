import { Connection, getRepository } from 'typeorm'
import { UserDTO } from '../../dto/user'
import { User } from '../../model/user'
import { getAllUsers, insertUser } from '../user'
import { startUpTestEnvironment } from '../../test/setup'
import * as bcrypt from 'bcrypt'
import randomstring from 'randomstring'
import { HttpError } from '../../common/errors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUserDTO = ({ id, email, name, phone, password }: any = {}): UserDTO => ({
  id: id,
  email: email || 'testmail@gmail.com',
  name: name || 'testing',
  phone: phone || '00000000000',
  password: password || '12345'
})

const getUser = ({ id, email, name, phone, password }: any = {}): User => ({
  id: id,
  email: email || 'testmail@gmail.com',
  name: name || 'testing',
  phone: phone || '00000000000',
  password: password || '12345'
})

let connection: Connection

beforeEach(async () => {
  connection = await startUpTestEnvironment()
})

afterEach(async () => {
  await connection.close()
})

it('Gets all the users', async () => {
  const users = await getAllUsers()
  expect(users.length).toBe(0)

  const user: User = getUser()
  const userRepository = getRepository(User)
  await userRepository.save(user)

  const newUsers = await getAllUsers()
  expect(newUsers.length).toBe(1)
})

it('Inserts a user', async () => {
  const user = getUserDTO()
  const savedUser = await insertUser(user)

  const userRepository = getRepository(User)
  const entity = await userRepository.findOne({ email: user.email })
  expect(entity).not.toBeUndefined()
  expect(entity?.id as number).toBe(savedUser.user.id)

  const passwordCorrect = await bcrypt.compare(user.password as string, entity?.password as string)
  expect(passwordCorrect).toBe(true)
})

it('Checks the user insert validations', async () => {
  const bigNameUser = getUserDTO({ name: randomstring.generate(101) })
  const bigPhoneUser = getUserDTO({ phone: randomstring.generate(16) })
  const bigEmailUser = getUserDTO({ email: randomstring.generate(101) })
  const normalUser = getUserDTO()

  await expect(insertUser(bigNameUser)).rejects.toThrow(HttpError)

  await expect(insertUser(bigPhoneUser)).rejects.toThrow(HttpError)

  await expect(insertUser(bigEmailUser)).rejects.toThrow(HttpError)

  await expect(async () => {
    await insertUser(normalUser)
    await insertUser(normalUser)
  }).rejects.toThrow(HttpError)
})
