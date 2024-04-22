<!-- markdownlint-disable-next-line -->
<p align="center">
  <img width="150px" src="/static/icds-logo.png" alt="Logo of the Intelligence Community Design System">
</p>

# The UK Intelligence Community UI Kit

[![OGL V3 License](https://img.shields.io/badge/license-OGLv3-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)

The [Intelligence Community Design System](https://design.sis.gov.uk) helps the United Kingdom's Intelligence Community (MI6, GCHQ, MI5, and partners) to quickly build powerful capabilities that are accessible and easy to use.

This is a joint project led by [MI6](https://www.sis.gov.uk), working with [GCHQ](https://www.gchq.gov.uk) and [MI5](https://www.mi5.gov.uk).

<!-- markdownlint-disable-next-line -->
<p align="center">
  <img src="/static/icds-orgs.png" alt="SIS (MI6), GCHQ and MI5 Logos">
</p>

This repo holds the UI Kit components. Find the guidance and content of [`design.sis.gov.uk`](https://design.sis.gov.uk) in the [IC Design System guidance site repo](https://github.com/mi6/ic-design-system).

## Why we're doing this

We build a lot of stuff that needs to be quick-to-build, usable and always accessible. We build using a lot of different tech, so creating something that can be consistently accessible and usable across different stacks is critical for us.

The Design System is being used to build our powerful, flexible and complex capabilities that help keep the UK safe and prosperous.

📖 [Read our story](https://design.sis.gov.uk/get-started/a-design-system) to learn more on why we've created our own design system.

### Learning from the best

We track many sources of accessibility expertise, as well as using our internal experts and communities. For example, many of our patterns and components are based on awesome work from the [Government Digital Service (GDS) Design System](https://design-system.service.gov.uk/). Where we can, we'll contribute back!

If you think we could improve something, please do [raise an issue](https://github.com/mi6/ic-ui-kit/issues/new/choose).

## Installing

To install the components, no additional configuration is needed for internal systems. Choose a package depending on which framework you're building with:

* Install the [web component package](packages/web-components/README.md) for use standalone, or with [Svelte](https://design.sis.gov.uk/get-started/install-components/svelte), [Vue](https://design.sis.gov.uk/get-started/install-components/vue) and other web component-compatible frameworks.
* Install the [React component package](packages/react/README.md) for React-based projects.

## Developing

This is a monorepo using `lerna`. To get started is simple:

```
npm install
npm run bootstrap
npm run build
```

Storybook is used during development; this command will launch separate web components and React Storybooks.

```
npm run storybook
```

## Local build and install

Developers are able to build and install components locally, enabling effective testing of apps and IC UI kit components in a local environment.

To get started make sure you are in the top-level directory of `ic-ui-kit`:

```
npm run build
cd packages/docs
npm pack
cd ../fonts
npm pack
cd ../react
npm pack
cd ../web-components
npm pack
```

In the `package.json` of your project replace the value of `@ukic/docs`, `@ukic/fonts`, `@ukic/react` and `@ukic/web-components` with the full filepath to the .tgz file in each respective directory, for example:

```
./package.json
  "@ukic/docs": "../ic-ui-kit/packages/docs/ukic-docs-2.1.0-beta.17.tgz"
  "@ukic/fonts": "../ic-ui-kit/packages/fonts/ukic-fonts-2.1.0-beta.17.tgz",
  "@ukic/react": "../ic-ui-kit/packages/react/ukic-react-2.1.0-beta.17.tgz",
  "@ukic/web-components": "../ic-ui-kit/packages/web-components/ukic-web-components-2.1.0-beta.17.tgz",
```

Finally, install the dependencies:

```
npm install
```


## Contributing

We have a couple of resources to help you with contributing.

- To find out more about the different types of contributions, the criteria, raising issues or our release roadmap, read [how to contribute to the Design System and UI Kit](https://design.sis.gov.uk/community/contribute).
- Make sure to also read our [coding standards and technical instructions](CONTRIBUTING.md).
- [IC Design System guidance site repository](https://github.com/mi6/ic-design-system) contains the code and content for the Design System guidance site.
- [IC UI Kit repository](https://github.com/mi6/ic-ui-kit) contains the code and content for the web components.

### Security

If you've found a vulnerability, we want to know so that we can fix it. [Our security policy](SECURITY.md) tells you how to do this.

## Questions about the departments

The team is only able to talk about the projects we've put on GitHub 🕵️. We unfortunately can't talk about the work of our departments 😢.

Visit our websites to learn more about:

- The [Secret Intelligence Service (MI6)](https://www.sis.gov.uk).
- The [Government Communications Headquarters (GCHQ)](https://www.gchq.gov.uk).
- The [Security Service (MI5)](https://www.mi5.gov.uk).

## License

Unless stated otherwise, the codebase is released under the [MIT License](https://opensource.org/licenses/MIT). This covers both the codebase and any sample code in the documentation. The documentation is and available under the terms of the [Open Government License v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

© Crown copyright 2022