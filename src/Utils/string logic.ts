export default function truncateChars(text: string, maxChars: number = 120): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars - 3) + "...";
}