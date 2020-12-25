import * as jwt from 'jsonwebtoken'

/**
 * Validate a JWT token and return the user info present on it.
 * @param token the token to be validated
 * @returns the user ID present on the key.
 */
export const validateJwt = (token: string): number => {
  const secret = process.env.JWTSECRET as string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userId } = <any>jwt.verify(token, secret)
  return userId
}

/**
 * Generate a JWT key for the given user info.
 * @param userId the user ID to generate the key
 * @returns a JWT key for the given user info.
 */
export const generateJwt = (userId: number): string => {
  const payload = { userId }
  const secret = process.env.JWTSECRET as string
  const token = jwt.sign(payload, secret, {
    expiresIn: '1h'
  })
  return token
}
