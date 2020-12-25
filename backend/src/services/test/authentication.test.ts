import { Connection } from 'typeorm'
import { startUpTestEnvironment } from '../../test/setup'
import * as jwt from 'jsonwebtoken'
import { generateJwt, validateJwt } from '../authentication'

let connection: Connection

beforeEach(async () => {
  connection = await startUpTestEnvironment()
})

afterEach(async () => {
  await connection.close()
})

it('Validates a JWT token', () => {
  const secret = process.env.JWTSECRET as string
  const normalToken = jwt.sign({ userId: 1 }, secret)
  const normalUserId = validateJwt(normalToken)
  expect(normalUserId).toBe(1)

  const expiredToken = jwt.sign({ userId: 1 }, secret, {
    expiresIn: 0
  })
  expect(() => {
    validateJwt(expiredToken)
  }).toThrow()
  expect(() => {
    validateJwt(normalToken.substr(0, normalToken.length) + 'f')
  }).toThrow()
})

it('Generates a JWT token', () => {
  const secret = process.env.JWTSECRET as string
  const idToBeUsed = 1
  const token = generateJwt(idToBeUsed)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userId } = <any>jwt.verify(token, secret)
  expect(userId).toBe(idToBeUsed)
})
