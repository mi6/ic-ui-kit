# Contributing to the Intelligence Community UI Kit

Welcome and thank you for contributing to the Intelligence Community UI Kit. This guide will take you through the technical considerations for contributing.

**Table of contents**

- [Code of conduct](#code-of-conduct)

- [How to contribute](#how-to-contribute)
    - [Making a suggestion or raising a bug](#making-a-suggestion-or-raising-a-bug)
    - [Contributing code](#contributing-code)
    - [Setting up the UI Kit codebase](#setting-up-the-ui-kit-codebase)
    - [Documentation](#documentation)
    - [Pull requests](#pull-requests)
    - [React](#react)

- [Coding standards and practices](#coding-standards-and-practices)
    - [Style guide](#style-guide)
    - [Git commit](#git-commit)
    - [Interfaces and types](#interfaces-and-types)
    - [Styling](#styling)

- [Testing](#testing)
    - [Accessibility](#accessibility)
    - [Unit tests](#unit-tests)
    - [End-to-end tests / integration tests](#end-to-end--integration-tests)
    - [Visual regression tests](#visual-regression-tests)

- [Useful links](#useful-links)

## Code of conduct

The Intelligence Community Design System (ICDS) has adopted the [Contributor Covenant](https://www.contributor-covenant.org/). Please familiarise yourself with our full [conduct principles](https://github.com/mi6/ic-design-system/blob/main/CODE_OF_CONDUCT.md).

## How to contribute

To find out more about the different types of contributions, the criteria or our release roadmap, read [how to contribute to the Design System and UI Kit](https://design.sis.gov.uk/community/contribute)

### Making a suggestion or raising a bug

You can help us speed up the development of our Design System by contributing new components and patterns, making improvements to existing ones or raising bugs.

> [!NOTE]
> Before getting started, please check our [Github issues](https://github.com/mi6/ic-ui-kit/issues) page to check whether a similar bug or suggestion already exists. If not, create a ticket with as much > information as possible. The working group will triage your ticket and get back to you. The working group meet on a fortnightly basis to review new tickets, but important bugs will be reviewed sooner.

### Contributing code

As part of our vision for the Intelligence Community UI Kit, our aim is to provide a rich set of professionally designed, framework agnostic components, which will allow development teams to build highly accessible and consistent applications. In order to achieve this, we have built our component library using [Stencil](https://stenciljs.com/). 

Each component has its own directory which can be found in `./packages/web-components/src/components`. Feel free to review the current components and familiarise yourself with the Stencil syntax.

### Setting up the UI Kit codebase

[Node 16+](https://nodejs.org/en/) is required to build and run the codebase. 

If you would like to contribute code, please complete the following steps:

1. Select a ticket from our [backlog](https://github.com/mi6/ic-ui-kit/issues)
2. Fork the [IC UI Kit repository](https://github.com/mi6/ic-ui-kit/) and clone your forked repo onto your device.
3. Make sure to add the `mi6/ic-ui-kit` repo as your upstream remote branch, by running:

```
git remote add upstream git@github.com:mi6/ic-ui-kit.git
```

4. Create a new branch in your forked repo, named after the issue number of your contribution (e.g. feature/123-new-feature).
5. Run the following:

**NPM**
```
npm install
npm run bootstrap
npm run build:all
```

**Yarn**
```
rm package-lock.json
yarn install
yarn run bootstrap
yarn run build:all
```

6. To run Storybook, with instances running web and React components, run:

**NPM**
```
npm run storybook
```

**Yarn**
```
yarn run storybook
```

7. Develop your component/make your changes, keeping to the [coding standards and practices](#coding-standards-and-practices).
8. Commit your changes, as per the [Git commit style guide](#git-commit) and push to your feature branch.
9. Submit a [pull request](#pull-requests) to merge to the `develop` branch in the original repository:

   - Click on `Compare & pull request`.
   - Set the base to be the original repository's `develop` branch and the host to be your `forked branch`.
   - Click on `Create pull request`.

### Documentation

Within Storybook, all components must include documentation which:

- Explains the component and includes props documentation.
- Offers basic usage examples.

### Pull requests

All changes will be reviewed via a pull request. Raise the pull request to merge to the `develop` branch. Provide details on what has been changed or added. To make sure there is enough detail in the pull request, our [pull request template](https://github.com/mi6/ic-ui-kit/blob/main/.github/pull_request_template.md) is available.

All pull requests will be reviewed by:

- Checking the change meets the guidance set out on this page.
- Checking the change meets the requirements of the ticket.
- For new components or large changes, testing the project locally by importing the component into a real project.
- Checking anything else deemed relevant by the reviewer.

Pull requests must have the approval of 2 reviewers before they can be merged into the `develop` branch.

Pull requests must also ensure they tick off everything on the checklist. For more information on some of the checklist points, please read the available [checklist guide](CHECKLIST.md).

### React

Stencil provides [plugins](https://stenciljs.com/docs/overview), which outputs wrapped framework agnostic components. During the build stage, React components are dynamically generated and are accessible from the React package.

## Coding standards and practices

### Style guide

Linting tools are ran against the codebase to keep in line with our coding standards. The linting tools used are:
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/) with the following plugins:
    - [Typescript](https://github.com/typescript-eslint/typescript-eslint)
    - [Stencil](https://github.com/ionic-team/stencil-eslint)

These tools are ran as part of the pre-commit and can also be ran separately.

Resolve linting and formatting issues via `npm run lint:fix` and `npm run prettier:fix`.

Refer to the [StencilJS Style Guide](https://stenciljs.com/docs/style-guide) for examples of directory structure and component style (with the caveat that the render() function is always the final method in the class).

### Git user configuration

As a data protection measure, this repository enforces the use of GitHub user email address in your commit. Please follow these steps:

1. Visit your [GitHub email settings](https://github.com/settings/emails)
    - Optionally check the settings "Keep my email addresses private" and "Block command line pushes that expose my email"
2. On this page, under **Primary Email Address** you'll see a user email that follows the pattern `<username>@users.noreply.github.com`.
3. Inside your developer environment, open a command line in the directory of the ic-ui-kit repository
4. Enter the command `git config user.email <EMAIL>` where you replace `<EMAIL>` with the address from step 3. This will be applied to commits made in this repository.

### Git commit

For automated versioning, we use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

[Commitizen](https://github.com/commitizen/cz-cli) is used to provide a step-by-step prompt for committing to your branch.

Please ensure that your commits are [signed](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) when contributing to the IC UI Kit repository.

Follow these steps when making a commit:

1. Ensure your commit only contains changes for one of the scopes: root changes like storybook and lerna config, core web components or React components. If your change affects more than one scope then make multiple commits, i.e. one for each scope.
2. Once your changes are staged, run `git commit`. This will trigger the [Commitizen](https://github.com/commitizen/cz-cli) command line utility.
3. Select the commit type, read each of the options and select the appropriate one.
4. When asked for scope, enter either:

    - `root` if your commit contains changes to the root of the project.
    - `web-components` for changes to the core web components package.
    - `react` for changes specific to the React package.
    - `canary-web-components` for changes to the canary web components package.
    - `canary-react` for changes to the canary React package.

5. Provide a short description of the change.

    - Use the present tense, such as "Add feature" not "Added feature"
    - Reference the issue number at the start of the commit, such as "#123 Add feature"

6. Provide a longer description of the change.
7. If there are breaking changes enter `y` and provide a description.
8. Provide a link to the issue by entering the reference e.g. `#123`.
9. When the editor opens up, check your commit message and press `Ctrl`+`x` to confirm.


### Interfaces and types

- Prefix interfaces and types with `Ic`, e.g.:

```ts
export interface IcMenuOption {
  value?: string;
  label: string;
  description?: string;
  disabled?: boolean;
  recommended?: boolean;
  children?: IcMenuOption[];
}

export type IcInformationStatusOrEmpty = "warning" | "error" | "success" | "";
```
Global interfaces and types should be added to `./packages/web-components/utils/types.ts`

### When to use props, slots or methods

Generally, props have the most usage throughout the components as this is the simplest way to provide the correct functionality for the components without too much flexibility. 

When utilising ICDS components within another ICDS component, some suggestions are:
- If the component requires text (e.g. a heading), use a prop where the correct styling would be applied (e.g h4), but (in most cases) with the option to also slot in a heading.
- If the component requires actions (e.g buttons) or another non-text based ICDS component (e.g status tag), use a slot.

For functionality that a developer would want to control within a component, some suggestions are:
- In most cases, use a prop (e.g. open/visible) that can then be controlled any way a developer would like.
- For setting focus, use a method.

For prop/slot naming standards, please check the [glossary of most common terms](GLOSSARY.md).

### Styling

- Avoid using inline css.
- Refer to the [StencilJS documentation](https://stenciljs.com/docs/styling) for styling components.

## Testing

### Accessibility

Testing should always include accessibility testing. A combination of automated and manual accessibility testing is needed. 
Automated accessibility testing tools are available to fix initial low level issues. The following tools are used:
- [Storybook a11y addon](https://storybook.js.org/addons/@storybook/addon-a11y)
- [cypress-axe](https://github.com/component-driven/cypress-axe)

All changes must meet the criteria for [WCAG 2.1 AA](https://design.sis.gov.uk/accessibility/requirement/wcag). Find out more about the importance of [accessibility](https://design.sis.gov.uk/accessibility) and how to [test for accessibility](https://design.sis.gov.uk/accessibility/testing).

### Unit tests

All components should aim for 100% unit test coverage, but as a very minimum, they must have at least 80% coverage. In addition to coverage, tests should be sufficient enough for the functionality changed or added.

[Jest](https://jestjs.io/) is the testing framework used to run unit tests. Each component directory includes `<component>.spec.ts` file. Unit tests are run via `npm run test`. To view the unit test coverage, run `npm run test:coverage` from the root folder.

Below is an example of a component and how unit tests are used to test the component.

**Component** 

```tsx
// ic-component.tsx

....
export class Component {
    @Prop() label!: string;

    @Prop() status?: string;

    @Event() icComponentThemeChange!: EventEmitter<{ mode: string }>;
        
    @Listen("themeChange", { target: "document" })
    themeChangeHandler(ev: CustomEvent): void {
        this.theme = ev.detail.mode;
    }

    @Method()
    async updateLabel(label: string) {
        this.label = label;
    }

    private theme: IcTheme;

    private updateStatus(status: string) {
        this.status = status;
    }

    private clickHandler() {
        this.icComponentThemeChange.emit({
            mode: "dark"
        });
    }
  ...
```

**Unit test**

```tsx
// ic-component.spec.ts

it("component renders", () => {
    const page = await newSpecPage({
        components: [Component],
        html: `<ic-component label="foo"></ic-component>`
    });

    expect(page.root).toMatchSnapshot();
})

// Testing public methods with @Method annotation
it("tests public methods @Method", async () => {
    const page = await newSpecPage({
        components: [Component],
        html: `<ic-component label="foo"></ic-component>`
    });

    // Public methods are accessible via the root
    expect(page.root.label).toBe("foo");
    await page.root.updateLabel("bar");
    await page.waitForChanges();
    expect(page.root.label).toBe("bar");
});

// Testing private methods
it("tests private method", async () => {
    const page = await newSpecPage({
        components: [Component],
        html: `<ic-component label="foo" status="bar"></ic-component>`
    });

    // heading is accessible via root as props are public properties
    expect(page.root.status).toBe("bar")

    // Private methods are accessible via the rootInstance
    await page.rootInstance.updateStatus("baz");
    await page.waitForChanges();
    expect(page.root.status).toBe("baz");
});

// Testing custom events which are triggered via @Listen annotation
it('tests receiving custom events', async () => {
    const page = await newSpecPage({
      components: [Component]
      html: `<ic-component label="foo"></ic-alert>`
    });

    await page.rootInstance.themeChangeHandler({ detail: { mode: "bar" } });
    await page.waitForChanges();
    expect(page.rootInstance.theme).toBe("bar");
});

// Testing events emitted from the component
it('tests emitted events', async () => {
    const page = await newSpecPage({
        components: [Component],
        html: `<ic-component label="foo"></ic-component>`,
    });

    const callbackFn = jest.fn();
    page.win.addEventListener('icComponentThemeChange', callbackFn);

    // clickHandler emits the icComponentThemeChange event
    await page.rootInstance.clickHandler();
    await page.waitForChanges();
    expect(callbackFn).toHaveBeenCalled();
    expect(callbackFn.mock.calls[0][0].detail).toMatchObject({
        mode: "dark",
    });
});
```

Read more about [Stencil Unit testing](https://stenciljs.com/docs/unit-testing).

### End-to-end / integration tests

[Cypress](https://www.cypress.io/) is the testing framework used to run end-to-end / integration tests. Within the `react/src/component-tests` directory is a folder for each component that includes a `<component>.cy.tsx` file along with any helper data such as `componentConstants.tsx` to store values for testing against, and `componentTestData.tsx` for storing code snippets that improve test readability.

Below is an example of an integration test.

```tsx
it("should have the correct text after the button is clicked", () => {
    mount(
        <div>
            <IcComponent label="foo"></IcComponent>
            <IcTypography>bar</IcTypography>
        </div>
    );

    // Check the component has hydrated to avoid basic errors
    cy.checkHydrated("ic-button");

    // Clicking the button updates the typography text
    cy.clickOnButton("ic-button");

    /*
    * It is possible to select components one level deep into a shadowDOM by using .shadow()
    * Example - cy.get("ic-button").shadow().find("ic-typography")
    * Alternatively - cy.findShadowEl("ic-button", "ic-typography")
    */
    cy.get("ic-typography").should("have.text", "baz")
  });
```

### Visual regression tests

[Cypress](https://www.cypress.io/) itself does not have built-in support for visual regression testing. However the third-party plugin `cypress-image-diff-js` adds this functionality. The tool works by taking screenshots of the components at specific points during tests and then comparing them to the baseline images to detect any visual differences. All reference images are stored within the `react/cypress-visual-screenshots` directory once the test suite is ran. Cypress uses a headless Electron browser for running tests and rendering components.

Below is an example of a visual regression test within an integration test.
```tsx
  it("should create a snapshot for the default component", () => {
    mount( 
        <IcComponent label="foo"></IcComponent>
    );

    // Check the component has hydrated to avoid basic errors
    cy.checkHydrated("ic-button");

    cy.compareSnapshot({
        name: "default", 
        testThreshold: DEFAULT_TEST_THRESHOLD
    });
  });
```

### Testing best practice

- Ensure all props are tested.
- Visual tests should include sufficient padding to allow for focus indicators (and there should be screenshots for showing items when focused).
- Snapshots should be added for any props that affect the visual display of the component.
- A11y tests should be included.
- Ensure all tests are passing consistently, both locally and in CI.

### Useful links

- [Issues](https://github.com/mi6/ic-ui-kit/issues)
- [Code of conduct](https://github.com/mi6/ic-design-system/blob/main/CODE_OF_CONDUCT.md)
- [ICDS guidance site](https://design.sis.gov.uk/)
- [License](./LICENSE)
- [Changelog](./CHANGELOG.md)
- [Security](./SECURITY.md)


