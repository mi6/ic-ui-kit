# The UK Intelligence Community Web Components UI Kit

[![OGL V3 License](https://img.shields.io/badge/license-OGLv3-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@ukic/web-components.svg)](https://npmjs.com/package/@ukic/web-components)

The [Intelligence Community Design System](https://design.sis.gov.uk) helps the United Kingdom's Intelligence Community (MI6, GCHQ, MI5, and partners) to quickly build powerful capabilities that are accessible and easy to use.

This is a joint project led by [MI6](https://www.sis.gov.uk), working with [GCHQ](https://www.gchq.gov.uk), [MI5](https://www.mi5.gov.uk) and [HMGCC](https://www.hmgcc.gov.uk) (our national security partner).

## Using the components

Web components can be used without the need for a framework. To use web components without a framework, follow the [web components instructions](#installing).

To use the components in a particular framework, follow the framework instructions.

- [Angular](https://design.sis.gov.uk/get-started/install-components/angular)
- [Vue](https://design.sis.gov.uk/get-started/install-components/vue)
- [Svelte](https://design.sis.gov.uk/get-started/install-components/svelte)
- [React](https://design.sis.gov.uk/get-started/install-components/react)

## Installing

To install the components:

### Step one

In the root of your project:

```shell
# using npm
npm install @ukic/web-components @ukic/fonts

# using yarn
rm package-lock.json
yarn add @ukic/web-components @ukic/fonts
```

### Step two

Import `defineCustomElements` in your file. Where you do this will depend on your framework or build tool, but the format is as follows:

```jsx
import { defineCustomElements } from "@ukic/web-components/loader";
```

### Step three

Call `defineCustomElements` in your file. Again, the file you edit will depend on your framework or build tool, but the format is as follows:

```jsx
//other code
...
defineCustomElements();
```

### Step four

In your HTML, you can now declare a component as follows:

```jsx
<ic-status-tag label="Neutral"></ic-status-tag>
```

### Step five

To get the correct styling with the ICDS components, import the core CSS file. Depending on your framework or build tool, this can be included in either a CSS file or Javascript\Typescript file.

Add the following into the top level CSS file for your project.

```css
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/web-components/dist/core/core.css";
```

In order to be rendered consistently across browsers and in line with modern standards, each of the ICDS components uses styles from a global CSS file based on [Normalize.css](https://necolas.github.io/normalize.css/). 

If you would like to import these styles to apply them to the rest of your project and slotted elements used within any of the ICDS components, add the following into the top level CSS file as well.

```css
@import "@ukic/web-components/dist/core/normalize.css";
```

## Webpack example

Webpack is a tool for bundling web applications. This example assumes the following config in `webpack.config.js`. For more detailed information on Webpack configuration, please refer to the Webpack documentation.

```jsx
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

### Step one

```shell
# using npm
npm install @ukic/web-components @ukic/fonts

# using yarn
rm package-lock.json
yarn add @ukic/web-components @ukic/fonts

```

### Step two

In the file defined as the `entry` in the `webpack.config.js`, add the following:

```jsx
//src/index.js
import "@ukic/fonts/dist/fonts.css";
import "@ukic/web-components/dist/core/core.css";

import { defineCustomElements } from "@ukic/web-components/loader";
defineCustomElements();
```

### Step three

You can now use any of the ICDS components so long as your HTML page includes the output file defined in your `webpack.config.js`. For example, including an [ic-status-tag](../../components/status-tags/code) below:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started with ICDS</title>
  </head>
  <body>
    <script src="dist/main.js"></script>
    <ic-status-tag label="Neutral"></ic-status-tag>
  </body>
</html>
```

## Typescript

If your project is making use of Typescript, you can import the custom types used in the ICDS component library. For details on the types implemented in each component, refer to the Props table on the Code page for each Component on the [Design System Guidance site](https://design.sis.gov.uk/components/select/code)

Types can be imported from the @ukic/web-components package as per the below example.

```ts
import { IcSelectTypes, IcMenuOption } from '@ukic/web-components';

const selectType: IcSelectTypes = "single";

const options: IcMenuOption[] = [
  {
    label: "Americano",
    value: "ame",
    description: "Classic black coffee",

  },
  {
    label: "Latte",
    value: "lat",
    description: "This coffee has milk in, we know that much",
    disabled: true
  }
];
```


## Contributing

We have a couple of resources to help you with contributing.

- To find out more about the different types of contributions, the criteria, raising issues or our release roadmap, read [how to contribute to the Design System and UI Kit](https://design.sis.gov.uk/community/contribute).
- Make sure to also read our [coding standards and technical instructions](https://github.com/mi6/ic-ui-kit/blob/main/CONTRIBUTING.md).
- [IC Design System guidance site repository](https://github.com/mi6/ic-design-system) contains the code and content for the Design System guidance site.
- [IC UI Kit repository](https://github.com/mi6/ic-ui-kit) contains the code and content for the web components.

### Security

If you've found a vulnerability, we want to know so that we can fix it. [Our security policy](https://github.com/mi6/ic-ui-kit/blob/main/SECURITY.md) tells you how to do this.

## Questions about the departments

The team is only able to talk about the projects we've put on GitHub. We unfortunately can't talk about the work of our departments.

Visit our websites to learn more about:

- The [Secret Intelligence Service (MI6)](https://www.sis.gov.uk).
- The [Government Communications Headquarters (GCHQ)](https://www.gchq.gov.uk).
- The [Security Service (MI5)](https://www.mi5.gov.uk).
- [His Majesty's Government Communications Centre (HMGCC)](https://www.hmgcc.gov.uk)- our national security partner.

## License

Unless stated otherwise, the codebase is released under the [MIT License](https://opensource.org/licenses/MIT). This covers both the codebase and any sample code in the documentation. The documentation is and available under the terms of the [Open Government License v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

© Crown copyright 2022