module.exports = {
  "*.{ts,tsx,json}": [
    "eslint -c ./.eslintrc.js --fix",
    "prettier --config ./.prettierrc.json --write",
  ],
  "*.css": "stylelint --fix",
  "*.{md,mdx}": "remark",
};
