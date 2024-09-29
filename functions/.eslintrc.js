module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Adicione esta linha
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended", // Adicione esta linha
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // Adicione suas regras personalizadas aqui
  },
};
