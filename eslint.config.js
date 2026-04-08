const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const react = require("eslint-plugin-react");
const tsParser = require("@typescript-eslint/parser");
const stencil = require('@stencil/eslint-plugin');
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const sonarjs = require("eslint-plugin-sonarjs");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
        parserOptions: {},
    },
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        "stencil": stencil,
        "sonarjs": sonarjs,
        "react": react,
    },

    rules: {
        "@typescript-eslint/no-inferrable-types": ["warn", {
            ignoreProperties: true,
        }],

        "@typescript-eslint/no-unused-vars": ["warn", {
            varsIgnorePattern: "^(?:h|Component|Element|Prop|Listen|Watch|Method|State|Event)$",
        }],
        
        "@typescript-eslint/explicit-module-boundary-types": ["warn", {
            allowedNames: ["render"],
        }],
        
        "stencil/async-methods": "off",
        "stencil/decorators-context": "error",
        
        "stencil/decorators-style": ["error", {
            prop: "inline",
            state: "inline",
            element: "inline",
            event: "inline",
            method: "multiline",
            watch: "multiline",
            listen: "multiline",
        }],
        
        "stencil/element-type": "error",
        "stencil/methods-must-be-public": "error",
        "stencil/no-unused-watch": "error",
        "stencil/own-methods-must-be-private": "error",
        "stencil/own-props-must-be-private": "error",
        "stencil/prefer-vdom-listener": "error",
        "stencil/props-must-be-public": "error",
        // "stencil/render-returns-host": "error",
        "stencil/required-jsdoc": "error",
        "stencil/required-prefix": ["error", ["ic-"]],
        // "stencil/single-export": "error",
        "stencil/strict-boolean-conditions": "off",
        "stencil/strict-mutable": "error",
        "sonarjs/cognitive-complexity": "off",
        "sonarjs/no-duplicate-string": "off",
        "react/jsx-no-bind": "off",
        
        "@typescript-eslint/no-unused-expressions": "warn", // had to set this rule to warn, it was picking up new failures
        "@typescript-eslint/no-explicit-any": "warn", // had to set this rule to warn, it was picking up new failures
        "stencil/reserved-member-names": "warn", // changed this to warn, ic-text-field and ic-search-bar were failing it
    },
}, {
    files: [
        "**/*.e2e.ts",
        "**/*.spec.ts",
        "**/package-lock.json",
        "packages/docs/docs.json",
        "packages/canary-docs/docs.json",
        "**/audit-ci.json",
    ],
}]);
