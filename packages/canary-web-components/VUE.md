# Using the UI Kit (Vue)

These instructions were used with Vue version 3.2.31.

## Installing and using components

Install the packages with `npm` or `yarn`.

```shell
npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
```

Add options into your relevant config

### In-Browser config

```js
// Only works if using in-browser compilation.
app.config.compilerOptions.isCustomElement = (tag) => tag.includes("-");
```

### Vite config

```js
// vite.config.js
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
};
```

### Vue CLI config

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ic- as custom elements
          isCustomElement: (tag) => tag.startsWith("ic-"),
        },
      }));
  },
};
```

Import `defineCustomElements` in your `main.js` file and call it at the bottom of the file:

```js
// main.js
import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
```

Declare and use components in your file, e.g.:

```html
<ic-data-table ...></ic-data-table>
```

## Importing CSS styles and fonts

Import the ICDS CSS file into your app's top level CSS file:

```css
/* In your top level CSS file */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/canary-web-components/dist/core/core.css";
```

Import ICDS typography into your project from `@ukic/fonts`.

```css
/* In your top level CSS file */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
```

The fonts package can also be imported inside a Vue file by adding the import statement within the `<styles>` tag.

Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:

```css
/* usually src/styles.css */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/canary-web-components/dist/core/normalize.css";
```
