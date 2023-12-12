// used for running a11y tests
module.exports = {
  "preset": "ts-jest/presets/js-with-babel",
  "testEnvironment": "jsdom",
  "testRegex": "(\\.(test.a11y))\\.(ts)$",
  "transformIgnorePatterns": [
    "node_modules/(?!(@stencil|@open-wc|@lit|lit|lit-html|lit-element)/)"
  ],
  "setupFilesAfterEnv": [
    "./src/testa11y.setup.ts"
  ]
}