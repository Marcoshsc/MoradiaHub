import { ApiVersions, ApiVersionsKey } from '../express/api'

export const getVersionatedUrl = (relative: string): string => {
  return ApiVersions[process.env.APIVERSION as ApiVersionsKey] + relative
}
