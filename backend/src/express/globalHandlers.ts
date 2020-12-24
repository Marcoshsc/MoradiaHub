import { ErrorRequestHandler, RequestHandler } from '../common/controllers'
import { ErrorBody } from '../common/dto'
import LoginEndpoints from '../routes/v1/login/endpoints'
import { generateJwt, validateJwt } from '../services/authentication'
import { getVersionatedUrl } from '../utils/urlUtils'

export interface NotFoundPage extends ErrorBody {
  endpoint: string
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

export const internalServerErrorHandler: ErrorRequestHandler<ErrorBody, void> = (err, _, res) => {
  res.status(500).json({
    error: err.message
  })
}
