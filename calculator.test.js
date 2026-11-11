// The tests. Run them with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { add, sumFromText } from "./calculator.js";

test("adds two positive numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative numbers", () => {
  assert.equal(add(-4, 1), -3);
});

test("adds decimals without computer rounding errors", () => {
  assert.equal(add(0.1, 0.2), 0.3);
});

test("shows the sum of what was typed in the boxes", () => {
  assert.equal(sumFromText("2", "3"), "5");
});

test("asks for two numbers when a box is empty", () => {
  assert.equal(sumFromText("5", ""), "Enter two numbers");
  assert.equal(sumFromText("", ""), "Enter two numbers");
});
