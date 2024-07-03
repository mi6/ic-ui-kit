const {
  utils: { getPackages },
} = require("@commitlint/config-lerna-scopes");

const COMMIT_ERROR = 2;

module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  rules: {
    "scope-empty": [COMMIT_ERROR, "never"],
    "scope-enum": async (ctx) => [
      COMMIT_ERROR,
      "always",
      [...(await getPackages(ctx)), "release", "root"],
    ],
  },
};
