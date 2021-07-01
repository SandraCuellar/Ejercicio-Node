module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "prettier",
    "typescript.suggestionActions.enabled": false,
    "javascript.suggestionActions.enabled": false,
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-shadow": "off",
      "no-console": "off",
      "arrow-parens": "off",
      "no-unused-vars": "off",
      "no-extra-boolean-cast": "off",
      "no-else-return": "off",
      "no-plusplus": "off",
      "no-use-before-define": "off",
      "no-restricted-syntax": "off",
      "no-underscore-dangle": "off",
      "func-names": "off",
      "consistent-return": "off",
      "space-before-function-paren": "off",
      "no-param-reassign": "off",
      "no-restricted-globals": "off",
      "guard-for-in": "off"
  },
};
