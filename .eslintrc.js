module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@stencil-community/recommended",
        "plugin:sonarjs/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "sonarjs"
    ],
    "rules": {
        "@typescript-eslint/no-inferrable-types": ["warn", { ignoreProperties: true }],
        "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^(?:h|Component|Element|Prop|Listen|Watch|Method|State|Event)$" }],
        "@typescript-eslint/explicit-module-boundary-types": ["warn", { allowedNames: ["render"] }],
        "@stencil-community/async-methods": "off",
        "@stencil-community/decorators-context": "error",
        "@stencil-community/decorators-style": [
            "error", {
            "prop": "inline",
            "state": "inline",
            "element": "inline",
            "event": "inline",
            "method": "multiline",
            "watch": "multiline",
            "listen": "multiline"
            }
        ],
        "@stencil-community/element-type": "error",
        "@stencil-community/methods-must-be-public": "error",
        "@stencil-community/no-unused-watch": "error",
        "@stencil-community/own-methods-must-be-private": "error",
        "@stencil-community/own-props-must-be-private": "error",
        "@stencil-community/prefer-vdom-listener": "error",
        "@stencil-community/props-must-be-public": "error",
        "@stencil-community/render-returns-host": "error",
        "@stencil-community/required-jsdoc": "error",
        "@stencil-community/required-prefix": ["error", ["ic-"]],
        "@stencil-community/reserved-member-names": "error",
        "@stencil-community/single-export": "error",
        "@stencil-community/strict-boolean-conditions": "off",
        "@stencil-community/strict-mutable": "error",
        "sonarjs/cognitive-complexity": "off",
    },
    "overrides": [
        {
            "files": ["*.e2e.ts", "*.spec.ts", "package-lock.json"],
            "rules": {
                "sonarjs/no-duplicate-string": "off"
            }
        }
    ]
};
