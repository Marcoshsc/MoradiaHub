import { RequestHandler } from '../common/controllers'

export interface NotFoundPage {
  error: string
  endpoint: string
}

export const notFoundHandler: RequestHandler<NotFoundPage, void> = (req, res) => {
  res.status(404).json({
    error: 'Not Found.',
    endpoint: req.url
  })
}
