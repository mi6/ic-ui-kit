# Codemod

This script is used to modify files which use ICDS components to upgrade from v2 to v3 of the ICDS library.

## What is this used for

This codemod has been developed to help users migrate from v2 of ICDS components to v3. 

Given a directory, it will scan over files and find any relevant ICDS components that require a change either by component name or props used.

## How to run


This package will be usable as an executable, requiring a directory and optional test boolean argument to cover tests 

```console
- npx @ukic/codemod <dir> <test>
```

### Options:

```console
  --dir     Directory your project is located in using ICDS components
    [string]
```
```console
  --test   By default testing is false (with exception of types)
    [boolean]: true | false                                            
```

### Examples:
With tests
```console
- npx @ukic/codemod --dir ./#path/app/src/components --test true
```
Without tests
```console
- npx @ukic/codemod --dir ./#path/app/src/components
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

The team is only able to talk about the projects we've put on GitHub 🕵️. We unfortunately can't talk about the work of our departments 😢.

Visit our websites to learn more about:

- The [Secret Intelligence Service (MI6)](https://www.sis.gov.uk).
- The [Government Communications Headquarters (GCHQ)](https://www.gchq.gov.uk).
- The [Security Service (MI5)](https://www.mi5.gov.uk).


## License

Unless stated otherwise, the codebase is released under the [MIT License](https://opensource.org/licenses/MIT). This covers both the codebase and any sample code in the documentation. The documentation is and available under the terms of the [Open Government License v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

© Crown copyright 2022