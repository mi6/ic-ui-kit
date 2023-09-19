<!-- markdownlint-disable-next-line -->
<p align="center">
  <img width="150px" src="/static/icds-logo.png" alt="Logo of the Intelligence Community Design System">
</p>

# [Canary]: The UK Intelligence Community UI Kit

[![OGL V3 License](https://img.shields.io/badge/license-OGLv3-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)

The [Intelligence Community Design System](https://design.sis.gov.uk) helps the United Kingdom's Intelligence Community (MI6, GCHQ, MI5, and partners) to quickly build powerful capabilities that are accessible and easy to use.

This is a joint project led by [MI6](https://www.sis.gov.uk), working with [GCHQ](https://www.gchq.gov.uk) and [MI5](https://www.mi5.gov.uk).

<!-- markdownlint-disable-next-line -->
<p align="center">
  <img src="/static/icds-orgs.png" alt="SIS (MI6), GCHQ and MI5 Logos">
</p>

This repo holds the UI Kit components. Find the guidance and content of [`design.sis.gov.uk`](https://design.sis.gov.uk) in the [IC Design System guidance site repo](https://github.com/mi6/ic-design-system).

## Installing

To install the canary components, no additional configuration is needed. Chosse a package depending on which framework you're building with:

```sh
# Vanilla JS
# Angular
# Svelte
# Vue
npm install @ukic/canary-web-components @ukic/fonts

# React
npm install @ukic/canary-react @ukic/fonts

```

Once installed, follow the steps within the guidance page skipping the initial installation step:

* [Vanilla JS](packages/web-components/README.md)
* [Angular](https://design.sis.gov.uk/get-started/install-components/angular)
* [Svelte](https://design.sis.gov.uk/get-started/install-components/svelte)
* [Vue](https://design.sis.gov.uk/get-started/install-components/vue)
* [React component](packages/react/README.md)


### Security

If you've found a vulnerability, we want to know so that we can fix it. [Our security policy](SECURITY.md) tells you how to do this.

## License

Unless stated otherwise, the codebase is released under the [MIT License](https://opensource.org/licenses/MIT). This covers both the codebase and any sample code in the documentation. The documentation is and available under the terms of the [Open Government License v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

© Crown copyright 2022