export function formatDate(inputDate: string): string {
  const [yearStr, monthStr, dayStr] = inputDate.split("-");

  if (!yearStr || !monthStr || !dayStr) throw new Error("Invalid date string");
  const day = dayStr.padStart(2, "0");
  const month = monthStr.padStart(2, "0");
  const year = yearStr;

  return `${day}/${month}/${year}`;
}
