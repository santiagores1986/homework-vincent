// Connects the page to the math: when you click =, show the sum.
import { sumFromText } from "./calculator.js";

document.getElementById("equals").addEventListener("click", () => {
  const aText = document.getElementById("a").value;
  const bText = document.getElementById("b").value;
  document.getElementById("result").textContent = sumFromText(aText, bText);
});
