const { getESLintConfig } = require("@applint/spec");

const config = getESLintConfig("react-ts");

// Override specific rules
config.rules = {
  ...config.rules,
  "@typescript-eslint/quotes": "off", // 🔥 Disable quotes rule globally
};

module.exports = config;
