module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@stencil/recommended",
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
        "@stencil/async-methods": "off",
        "sonarjs/cognitive-complexity": "off",
    },
    "overrides": [
        {
            "files": ["*.e2e.ts", "*.spec.ts"],
            "rules": {
                "sonarjs/no-duplicate-string": "off"
            }
        }
    ]
};
