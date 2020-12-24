import * as jwt from 'jsonwebtoken'

export const validateJwt = (token: string): number => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const secret = process.env.JWTSECRET as string
  const { userId } = <any>jwt.verify(token, secret)
  return userId
}

export const generateJwt = (userId: number): string => {
  const payload = { userId }
  const secret = process.env.JWTSECRET as string
  const token = jwt.sign(payload, secret, {
    expiresIn: '1h'
  })
  return token
}
