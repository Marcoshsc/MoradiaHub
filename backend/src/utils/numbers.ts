export const formatNumber = (n: number): string => {
  return n >= 10 ? n.toString() : `0${n}`
}
