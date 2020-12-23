import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  RequestHandler as ExpressRequestHandler,
  ErrorRequestHandler as ExpressErrorRequestHandler
} from 'express'
import { ParamsDictionary, Query } from 'express-serve-static-core'
import { ErrorBody } from './dto'

export type RequestHandler<ResBody, ReqBody> = ExpressRequestHandler<ParamsDictionary, ResBody, ReqBody, Query>
export type ErrorRequestHandler<ResBody extends ErrorBody, ReqBody> = ExpressErrorRequestHandler<
  ParamsDictionary,
  ResBody,
  ReqBody,
  Query
>
export type Request<ResBody, ReqBody> = ExpressRequest<ParamsDictionary, ResBody, ReqBody, Query>
export type Response<ResBody> = ExpressResponse<ResBody>
