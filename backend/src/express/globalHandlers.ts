import { ErrorRequestHandler, RequestHandler } from '../common/controllers'
import { ErrorBody } from '../common/dto'

export interface NotFoundPage extends ErrorBody {
  endpoint: string
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
