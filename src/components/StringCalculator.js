export function add(numbers) {
  if (!numbers) return 0;

  const delimiterRegex = /\/\/(.)\n/;
  let delimiter = ",";
  let input = numbers;

  const match = numbers.match(delimiterRegex);
  if (match) {
    delimiter = match[1];
    input = numbers.split("\n").slice(1).join("\n");
  }

  const nums = input.split(new RegExp(`[${delimiter}\n]`)).map(Number);
  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
