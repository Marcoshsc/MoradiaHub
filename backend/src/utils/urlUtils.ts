import { ApiVersions, ApiVersionsKey } from '../express/api'

export const getVersionatedUrl = (relative: string): string => {
  return ApiVersions[process.env.APIVERSION as ApiVersionsKey] + relative
}

export const getFullUrl = (relative: string): string => {
  return process.env.WEBSERVICEBASEURL + relative
}
