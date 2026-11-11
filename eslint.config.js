// Lint rules: ESLint's official "recommended" set, which catches common
// mistakes (unused variables, typos in names, unreachable code, and more).
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["app.js"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["*.test.js", "eslint.config.js"],
    languageOptions: { globals: globals.node },
  },
];
