import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import reactPackage from "react/package.json" with { type: "json" };

// Die React-Version wird eingelesen statt "detect": eslint-plugin-react ruft bei
// "detect" context.getFilename() auf, und das hat ESLint 10 entfernt. Der feste
// Wert umgeht die Erkundung vollstaendig und bleibt an das installierte React gebunden.
const reactVersion = reactPackage.version;

/**
 * Flat ESLint config (ESLint 9 und 10).
 *
 * Hinweis: eslint-config-next ist bewusst nicht installiert, weil es seine eigene
 * Babel-/Parser-Kette mitbringt. Die hier aktivierten Regeln decken JS/JSX des
 * App-Routers ab; Next-spezifische Baum Regeln uebernimmt der Next-Build selbst.
 */
export default [
  {
    ignores: [".next/**", "node_modules/**", ".idea/**", "next-env.d.ts"],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    // Gilt fuer alle Dateien, damit die React-Version auch ausserhalb von src bekannt ist.
    settings: {
      react: { version: reactVersion },
    },
  },
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,
      // Next.js verwendet den automatischen JSX-Runtime, ein React-Import ist nicht noetig.
      "react/react-in-jsx-scope": "off",
      // Das Projekt ist JavaScript ohne PropTypes und fuehrt keine Typpruefung durch.
      // Die Regel waere nur Rauschen; Typsicherheit ist ein bewusster spaeterer Schritt.
      "react/prop-types": "off",
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
  },
];
