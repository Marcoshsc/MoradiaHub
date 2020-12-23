import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  RequestHandler as ExpressRequestHandler
} from 'express'
import { ParamsDictionary, Query } from 'express-serve-static-core'

export type RequestHandler<ResBody, ReqBody> = ExpressRequestHandler<ParamsDictionary, ResBody, ReqBody, Query>
export type Request<ResBody, ReqBody> = ExpressRequest<ParamsDictionary, ResBody, ReqBody, Query>
export type Response<ResBody> = ExpressResponse<ResBody>
