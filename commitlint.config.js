const {
  utils: { getPackages },
} = require("@commitlint/config-lerna-scopes");

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
      [...(await getPackages(ctx)), "release", "root"],
    ],
  },
};
