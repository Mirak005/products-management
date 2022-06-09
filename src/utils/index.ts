
export const roundNumber = (strNumber: string, round: number = 0): string => {
  const num = parseFloat(strNumber)
  return num.toFixed(round)
}

export const genPages = (count: number, itemPerPage: number) => {
  const numberpages =
    count % itemPerPage === 0
      ? count / itemPerPage
      : Math.floor(count / itemPerPage) + 1
  let pages = []

  for (let i = 0; i < numberpages; i++) {
    pages.push({ page: i + 1, fetched: false })
  }
  return pages
}
