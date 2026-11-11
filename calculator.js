// The math only. No page, no buttons, so it can be tested on its own.

// Adds two numbers. Rounds away the tiny errors computers make with
// decimals, so 0.1 + 0.2 gives 0.3 instead of 0.30000000000000004.
export function add(a, b) {
  return Math.round((a + b) * 1e10) / 1e10;
}

// Takes the text typed in the two boxes and returns what the page shows.
export function sumFromText(aText, bText) {
  if (aText.trim() === "" || bText.trim() === "") {
    return "Enter two numbers";
  }
  const a = Number(aText);
  const b = Number(bText);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return "Enter two numbers";
  }
  return String(add(a, b));
}
