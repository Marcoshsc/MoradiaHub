import Redis from 'ioredis'

const redisClient = new Redis(Number.parseInt(process.env.REDIS_PORT as string), process.env.REDIS_HOST as string)

redisClient.on('connect', () => console.log('redis connected'))

export default redisClient
