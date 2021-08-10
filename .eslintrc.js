// Übersicht zu den JavaScript-Regeln: https://eslint.org/docs/rules/

module.exports = {
  env: {
    //Wo soll der Code später funktionieren?
    browser: true, // Läuft im Browser
    es2021: true, // Legt fest, das neue Features von JavaScript erlaubt sind
    node: true, // Läuft mit Node
  },
  // Nutze die Standard-Regeln
  // Deaktiviere alle Formatierungsregeln, die mit Prettier in Konflikt stehen
  // Wichtig: Prettier immer als letztes auflisten
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // Hier können Regeln festgelegt werden und ggf. Vorgaben
  // aus Regelsätzen überschrieben werden, ihr habt also
  // das letzte Wort, ob eine Regel angewandt wird.
  rules: {
    'no-var': 'error', // "off", "warn" oder "error", alternativ 0,1 oder 2
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  plugins: ['react'],
};
