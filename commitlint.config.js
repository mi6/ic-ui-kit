module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": async (ctx) => [
      2,
      "always",
      [
        "web-components", 
        "react", 
        "fonts", 
        "docs", 
        "nextjs", 
        "codemod",
        "canary-web-components", 
        "canary-react", 
        "canary-docs",
        "release", 
        "root"
      ],
    ],
  },
};
