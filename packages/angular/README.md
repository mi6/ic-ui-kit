# The UK Intelligence Community Angular UI Kit

[![OGL V3 License](https://img.shields.io/badge/license-OGLv3-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)

The [Intelligence Community Design System](https://design.sis.gov.uk) helps the United Kingdom's Intelligence Community (MI6, GCHQ, MI5, and partners) to quickly build powerful capabilities that are accessible and easy to use.

This is a joint project led by [MI6](https://www.sis.gov.uk), working with [GCHQ](https://www.gchq.gov.uk), [MI5](https://www.mi5.gov.uk) and [HMGCC](https://www.hmgcc.gov.uk) (our national security partner).

## Installing

> Last tested with Angular 20.3.0

To install the components you have a two different methods. Either using the ng add command to streamline the process or a manual install:

### Using ng add

This will install all the necessary packages and setup your project. In the root of your project:

```shell
ng add @ukic/angular
```

### Manual setup

#### Step one

```shell
// using npm
npm install @ukic/angular @ukic/fonts

// using yarn
rm package-lock.json
yarn add @ukic/angular @ukic/fonts
```

### Step two

To get the correct styling with the ICDS components, you will need to import the core CSS file and the fonts css file.

Add the following into your angular.json file in the build styles config

```json
{
    "styles": [
        ...
        "node_modules/@ukic/fonts/dist/fonts.css",
        "node_modules/@ukic/angular/css/core.css"
    ]
}
```

In order to be rendered consistently across browsers and in line with modern standards, each of the ICDS components uses styles from a global CSS file based on [Normalize.css](https://necolas.github.io/normalize.css/). 

If you would like to import these styles to apply them to the rest of your project and slotted elements used within any of the ICDS components, add the following into the top level CSS file as well.

```json
{
    "styles": [
        ...
        "node_modules/@ukic/angular/css/normalize.css"
    ]
}
```

### Step three

Due to a conflicting issue with typescript you need to add `skipLibCheck: true` to your `tsconfig.json`.

## Using the components in your app

To use the ICDS components in angular your usage will vary based on if you are using a standalone project or using NgModules.

### NgModule application

You will need to import the `ICDSModule` from `@ukic/angular` into your NgModule. This will import all of the components and make them available and then you can follow the web component documentation.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ICDSModule } from '@ukic/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ICDSModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Standalone application

You will need to import each component as you need it into your components from `@ukic/angular/standalone`. If you are using a form control you will need to also import `ICDSValueAccessorModule` into your component. Once you've imported it you can then you can follow the web component documentation.

```typescript
import { Component } from '@angular/core';
import { IcButton } from '@ukic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IcButton],
  template: `<ic-button variant="primary">I am a button</ic-button>`
})
export class AppComponent {}
```

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IcTextField, ICDSValueAccessorModule } from '@ukic/angular/standalone';

@Component({
  selector: 'app-root',
  template: `<ic-text-field label="Text field control" placeholder="Text field..." [formControl]="textFieldControl"></ic-text-field>`,
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IcTextField,
    ICDSValueAccessorModule
  ]
})
export class FormControlsComponent {
  textFieldControl = new FormControl('i am a text field');
}

```

## Testing locally

To test the current angular output of your local repo there are numerous approaches. The following guide will likely be the simplest approach.
This is useful for testing that changes made to the web components are accurately reflected in the angular wrappers and also to ensure the "add" schematic is functioning properly.

### 1 - Prep the source

From the root of ic-ui-kit
- Build the components: `npm run build`
- Pack them: `./pack-all-tars.sh`

Whenever changes are made to the components or angular output config this step will need to be run again.
They can be prepped more efficiently by sitting in the web-components or angular package folders and running the `npm [build|pack]` commands.

### 2 - Create the test app

```shell
ng new add-test
cd add-test
```

### 3 - Point npm at the local artefacts

In the `package.json` of the new app add the following to the "dependencies" manually (changing the version numbers appropriately):
```json
"@ukic/angular": "<path to ic-ui-kit root>/packages/angular/ukic-angular-#.#.#.tgz",
"@ukic/web-components": "<path to ic-ui-kit root>/packages/web-components/ukic-web-components-#.#.#.tgz"
```

Run `npm install`

### 4 - Run the schematic

```bash
ng add @ukic/angular
```

You'll now be able to add icds components to a vanilla Angular app setup [as above](#Using-the-components-in-your-app).

> NOTE: Once changes have been made and packaged as per step 1, the test app will need to have the @ukic packages updated/re-installed to pick up the latest changes.

### Previewing changes
Potentially when trying to serve the new app and load it in a browser for preview Vite will block access and return an error along the lines of "`<hostname>` is not a permitted origin".

This can be resolved by adding the following to the `projects.architect.serve` block of the app's angular.json:
```json
"options": {
  "allowedHosts": ["0a299867d52e4df19aec765b281c7e9a.vfs.cloud9.eu-west-2.amazonaws.com"],
},
```

### Alternate: `npm link`

Potentially using npm's link command to create a symlink between the test app and the local dist folder could be a neater solution and would be more responsive to changes once built.
That approach however seems more prone to issues from multiple different causes and so a specific guide will not be provided.

## Contributing

We have a couple of resources to help you with contributing.

- To find out more about the different types of contributions, the criteria, raising issues or our release roadmap, read [how to contribute to the Design System and UI Kit](https://design.sis.gov.uk/community/contribute).
- Make sure to also read our [coding standards and technical instructions](https://github.com/mi6/ic-ui-kit/blob/main/CONTRIBUTING.md).
- [IC Design System guidance site repository](https://github.com/mi6/ic-design-system) contains the code and content for the Design System guidance site.
- [IC UI Kit repository](https://github.com/mi6/ic-ui-kit) contains the code and content for the web components.

## Changelog

For a comprehensive changelog of the Angular components, please read the web components [CHANGELOG](https://github.com/mi6/ic-ui-kit/blob/main/CHANGELOG.md). The released updates made to the web components are reflected on the Angular components. 

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