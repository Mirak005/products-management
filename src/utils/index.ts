export const roundNumber = (strNumber: string, round: number = 0): string => {
  const num = parseFloat(strNumber);
  return num.toFixed(round);
};
