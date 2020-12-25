import { ErrorRequestHandler, RequestHandler } from '../common/controllers'
import { ErrorBody } from '../common/dto'
import { HttpError } from '../common/errors'
import LoginEndpoints from '../routes/v1/login/endpoints'
import { generateJwt, validateJwt } from '../services/authentication'
import { isOverLimit, RATELIMIT_PARAMETERS } from '../services/rateLimitServices'
import { getVersionatedUrl } from '../utils/urlUtils'

export interface NotFoundPage extends ErrorBody {
  endpoint: string
}

export const rateLimitHandler: RequestHandler<unknown, unknown> = (req, res, next) => {
  isOverLimit(req.ip)
    .then(([overLimit, total, remaining]) => {
      res.setHeader('RateLimit-Limit', `${total}, ${RATELIMIT_PARAMETERS[0]}; window=${RATELIMIT_PARAMETERS[1]}`)
      res.setHeader('RateLimit-Reset', remaining)
      if (overLimit) {
        res.setHeader('Retry-After', remaining)
        res.setHeader('RateLimit-Remaining', 0)
        res.status(429).send()
        return
      }
      res.setHeader('RateLimit-Remaining', RATELIMIT_PARAMETERS[0] - total)
      next()
    })
    .catch((err) => next(err))
}

export const authenticationHandler: RequestHandler<ErrorBody, void> = (req, res, next) => {
  if (req.url === getVersionatedUrl(LoginEndpoints.BASE_URL)) {
    next()
    return
  }

  if (!req.headers.authorization) {
    res.status(401).json({
      error: 'No authorization data was provided.'
    })
    return
  }
  const token = req.headers.authorization.replace('Bearer ', '')
  const userId = validateJwt(token)
  res.locals.jwtPayload = userId
  const newToken = generateJwt(userId)
  res.setHeader('token', newToken)
  next()
}

export const notFoundHandler: RequestHandler<NotFoundPage, void> = (req, res) => {
  res.status(404).json({
    error: 'Not Found.',
    endpoint: req.url
  })
}

export const internalServerErrorHandler: ErrorRequestHandler<ErrorBody, void> = (err, req, res, next) => {
  res.status(500).json({
    error: 'Unexpected error.'
  })
}

export const unauthorizedErrorHandler: ErrorRequestHandler<ErrorBody, void> = (err, req, res, next) => {
  if (err instanceof HttpError) {
    const typedErr = err as HttpError
    if (typedErr.status !== 401) {
      next(err)
      return
    }
  } else {
    next(err)
    return
  }
  res.status(401).json({
    error: err.message
  })
}

export const badRequestErrorHandler: ErrorRequestHandler<ErrorBody, void> = (err, req, res, next) => {
  if (err instanceof HttpError) {
    const typedErr = err as HttpError
    if (typedErr.status !== 400) {
      next(err)
      return
    }
  } else {
    next(err)
    return
  }
  res.status(400).json({
    error: err.message
  })
}
