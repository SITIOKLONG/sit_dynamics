export function formatMOP(amount: number): string {
  return `MOP ${amount.toLocaleString("en-US")}`;
}

export function formatVerified(date: string): string {
  return `資料核對日期 ${date}`;
}
