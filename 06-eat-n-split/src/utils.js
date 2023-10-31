export const oweMessage = (oweAmount, friendName) => {
  if (oweAmount === 0) {
    return `You and ${friendName} are even`;
  } else if (oweAmount < 0) {
    return `You owe ${friendName} ${Math.abs(oweAmount)}$`;
  } else {
    return `${friendName} owes you ${Math.abs(oweAmount)}$`;
  }
};
