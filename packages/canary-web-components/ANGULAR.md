# Using the UI Kit (Angular)

These instructions were used with Angular version 13.2.5.

## Installing and using components

Install the packages with `npm` or `yarn`.

```shell
npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
```

In the `app.modules.ts` file, import the `CUSTOM_ELEMENTS_SCHEMA` and include it in the `@NgModule` decorator object:

```js
// app.modules.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

//...

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
});
```

Import `defineCustomElements` in your `main.js` file and call it at the bottom of the file:

```js
// main.ts
import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
```

Declare the component in your `app.component.html` file, e.g.:

```html
<!-- app.component.html -->
<ic-data-table ....></ic-data-table>
```

## Importing CSS styles and fonts

Import the ICDS CSS file into your app's top level CSS file:

```css
/* usually src/styles.css */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/canary-web-components/dist/core/core.css";
```

Import ICDS typography into your project from `@ukic/fonts`.

```css
/* usually src/styles.css */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
```

The fonts package can also be imported inside an Angular HTML file by adding the import statement within the `<styles>` tag.

Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:

```css
/* usually src/styles.css */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/canary-web-components/dist/core/normalize.css";
```
