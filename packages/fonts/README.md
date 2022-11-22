# The UK Intelligence Community Fonts

This package includes fonts used within ICDS components.

## Installing

Run `npm install @ukic/fonts` at the root level of your project.

The `fonts.css` file can be imported into the relevant file type:

#### Javascript
````js
import '@ukic/fonts/dist/fonts.css'
````

#### CSS
````css
/* In some cases, reference to the node_modules directory may be required. */
@import '@ukic/fonts/dist/fonts.css'
````

### Build

Webpack is used to extract the fonts from `node_modules/@fontsource/*` directory and build the `fonts.css` file