# The UK Intelligence Community React UI Kit

[![OGL V3 License](https://img.shields.io/badge/license-OGLv3-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)

The [Intelligence Community Design System](https://design.sis.gov.uk) helps the United Kingdom's Intelligence Community (MI6, GCHQ, MI5, and partners) to quickly build powerful capabilities that are accessible and easy to use.

This is a joint project led by [MI6](https://www.sis.gov.uk), working with [GCHQ](https://www.gchq.gov.uk) and [MI5](https://www.mi5.gov.uk).

## Installing

To install the components:

### Step one

In the root of your project:

```shell
// using npm
npm install @ukic/react @ukic/fonts

// using yarn
rm package-lock.json
yarn add @ukic/react @ukic/fonts
```

### Step two

Import the component(s) in your React files.

```jsx
import { IcComponent } from "@ukic/react";
```

### Step three

To get the correct styling with the ICDS components, import the core CSS file.

Add the following into the top level CSS file for your project.

```css
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/react/dist/core/core.css";
```

### Step four

The `@ukic/react` package will need to be transformed before you can use these components in Jest tests.

Add a `transformIgnorePatterns` field with the value `["/node_modules/(?!@ukic/react)"]` to your Jest config.

## Contributing

We have a couple of resources to help you with contributing.

- To find out more about the different types of contributions, the criteria, raising issues or our release roadmap, read [how to contribute to the Design System and UI Kit](https://design.sis.gov.uk/community/contribute).
- Make sure to also read our [coding standards and technical instructions](https://github.com/mi6/ic-ui-kit/blob/main/CONTRIBUTING.md).
- [IC Design System guidance site repository](https://github.com/mi6/ic-design-system) contains the code and content for the Design System guidance site.
- [IC UI Kit repository](https://github.com/mi6/ic-ui-kit) contains the code and content for the web components.

## Changelog

For a comprehensive changelog of the React components, please read the web components [CHANGELOG](https://github.com/mi6/ic-ui-kit/blob/main/CHANGELOG.md). The released updates made to the web components are reflected on the React components. 

## Security

If you've found a vulnerability, we want to know so that we can fix it. [Our security policy](https://github.com/mi6/ic-ui-kit/blob/main/SECURITY.md) tells you how to do this.

## Questions about the departments

The team is only able to talk about the projects we've put on GitHub 🕵️. We unfortunately can't talk about the work of our departments 😢.

Visit our websites to learn more about:

- The [Secret Intelligence Service (MI6)](https://www.sis.gov.uk).
- The [Government Communications Headquarters (GCHQ)](https://www.gchq.gov.uk).
- The [Security Service (MI5)](https://www.mi5.gov.uk).

## License

Unless stated otherwise, the codebase is released under the [MIT License](https://opensource.org/licenses/MIT). This covers both the codebase and any sample code in the documentation. The documentation is and available under the terms of the [Open Government License v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

© Crown copyright 2022