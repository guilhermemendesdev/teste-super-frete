module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, 
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
};
