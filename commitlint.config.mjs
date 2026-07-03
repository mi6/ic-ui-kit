import config from "@commitlint/config-lerna-scopes";

const {
  utils: { getProjects },
} = config;

export default {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": async (ctx) => [
      2,
      "always",
      [...(await getProjects(ctx)), "release", "root"],
    ],
  },
};
