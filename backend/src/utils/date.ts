import { formatNumber } from './numbers'

export const getFormattedTimeStamp = (date: Date): string => {
  return `${getFormattedDate(date)} ${getFormattedTime(date)}`
}

export const getFormattedDate = (date: Date): string => {
  const day = formatNumber(date.getDate())
  const month = formatNumber(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export const getFormattedTime = (date: Date): string => {
  const hours = formatNumber(date.getHours())
  const minutes = formatNumber(date.getMinutes())

  return `${hours}:${minutes}`
}
