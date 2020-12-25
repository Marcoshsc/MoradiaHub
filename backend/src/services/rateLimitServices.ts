import redisClient from '../redis/client'

export const RATELIMIT_PARAMETERS = [15, 10]

/**
 * Check whether an IP has surpassed the maximum rate limit of 15 requests per 10 seconds.
 * @param ip the ip to check
 */
export const isOverLimit = async (ip: string): Promise<[boolean, number, number]> => {
  const value = await redisClient.get(ip)

  if (!value) {
    const newValue = await redisClient.incr(ip)
    await redisClient.expire(ip, RATELIMIT_PARAMETERS[1])
    return [false, newValue, RATELIMIT_PARAMETERS[1]]
  }
  const newValue = await redisClient.incr(ip)
  const remaining = await redisClient.ttl(ip)
  if (newValue > RATELIMIT_PARAMETERS[0]) return [true, newValue, remaining]

  return [false, newValue, remaining]
}
