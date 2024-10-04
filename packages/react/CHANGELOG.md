# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-alpha.1](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@3.0.0...@ukic/react@3.0.0-alpha.1) (2024-10-04)

### Bug Fixes

- **react:** fix cypress tests broken by big rebase ([ece6697](https://github.com/mi6/ic-ui-kit/commit/ece6697d3b536461b8ee4f48395e4db1b7663ca3))
- **react:** fix Slotted Heading react storybook for accordion ([a1cf975](https://github.com/mi6/ic-ui-kit/commit/a1cf975b769c9b9e21dfec77538aeec19190aafd))
- **react:** update accordion story to be lowercase ([bffe63b](https://github.com/mi6/ic-ui-kit/commit/bffe63b59e2a803072f2281cf928b5642397504d))
- **react:** update loading indicator stories/cypress tests for changing label ([ed4d165](https://github.com/mi6/ic-ui-kit/commit/ed4d1653e1ab67e8c37b63192680ec860f79718a)), closes [#248](https://github.com/mi6/ic-ui-kit/issues/248)
- **react:** update storybook/cypress tests with tab context theme changes ([73e8a3c](https://github.com/mi6/ic-ui-kit/commit/73e8a3cc1afa4389377a250dd53249e985e74c21))
- **react:** update theme storybook to have a visualisation playground ([ca6b69c](https://github.com/mi6/ic-ui-kit/commit/ca6b69cae995a69302be817a52f6cd53f7fdf2b8))
- **react:** updating packages ([3aaf726](https://github.com/mi6/ic-ui-kit/commit/3aaf726ad9d4845cac81db16ee5d383c310f337c))
- **root:** fixes after big rebase ([490c292](https://github.com/mi6/ic-ui-kit/commit/490c292e9294c97d938575ea114f769a730628bc))

### Code Refactoring

- **react:** component size prop options changed ([61b3921](https://github.com/mi6/ic-ui-kit/commit/61b39213f184e4fca002962fb7800be01fe7c867))

### Features

- **react:** add Cypress tests for icon button variants with tooltip ([1b9daca](https://github.com/mi6/ic-ui-kit/commit/1b9dacaec94feaa9216d9b749e1e4bc7fd01436d))
- **react:** add maxLengthMessage prop to text field ([edb89af](https://github.com/mi6/ic-ui-kit/commit/edb89af8471d9583528ba2f6e1911a6a9c9507d0))
- **react:** add react stories and cypress tests for showDefaultIcon prop and neutral-icon slot for alert ([be1ec44](https://github.com/mi6/ic-ui-kit/commit/be1ec44268843879822113858d5dd79decbddb36))
- **react:** added test for new IcToastRegion componentDidLoad ([13a7cbb](https://github.com/mi6/ic-ui-kit/commit/13a7cbb6e46670109edb3bb71032585e424bc1b1))
- **react:** adds theme playground for testing dark mode ([cd6b853](https://github.com/mi6/ic-ui-kit/commit/cd6b8535898963dc24d881d39f42b909678797e7))
- **react:** improve component prop names ([d979d0d](https://github.com/mi6/ic-ui-kit/commit/d979d0d9397f3e4871f0591e11a650138371ba46))
- **react:** typography color and theme prop changes ([e496a94](https://github.com/mi6/ic-ui-kit/commit/e496a94fc3ce084734b932b43f4396f186c48349))
- **react:** update badge to use theme to set dark/light mode colour ([a97d04d](https://github.com/mi6/ic-ui-kit/commit/a97d04d04e73c4a5ed1ff2a21d76f77c4a087cf5))
- **react:** update data list and data row to have theme prop ([342d834](https://github.com/mi6/ic-ui-kit/commit/342d8344fabee674554598d2f8cdeab6f857f93e))
- **react:** update link and breadcrumb to use theme prop instead of appearance ([d0dc78b](https://github.com/mi6/ic-ui-kit/commit/d0dc78bd6d43b6a9683a9f2a784455d41938aeaf))
- **react:** update status tags to use theme prop to determine light/dark mode ([d1672ec](https://github.com/mi6/ic-ui-kit/commit/d1672ec0c66e67df4e1a070d49d2cf41b184dfdf))
- **react:** updates tooltip storybook for theme prop ([12df2da](https://github.com/mi6/ic-ui-kit/commit/12df2da7b6a2988d2a0e930ea14e6396392714f2))

### BREAKING CHANGES

- **react:** For link and breadcrumb components, appearance has been replaced by theme and
  monochrome
- **react:** prop type changed
- **react:** Instead of passing "loading/still loading" to a loading indicator to dynamically
  change the label, it's now passed as ["loading", "still loading"]
- **react:** Accordion group and footer link group “groupTitle” renamed to “label”, badge
  “textLabel” renamed to “label”, empty state “bodyMaxLines” renamed to “maxLines”, input label
  “error” renamed to “status” with error as an option, pagination “boundaryCount” and “adjacentCount”
  renamed to “boundaryPageCount” and “adjacentPageCount”, search bar and select “disableFilter”
  renamed to “disableAutoFiltering”, search bar “hintText” renamed to “assistiveHintText”, step props
  had the word “step” removed from the start e.g “stepStatus” renamed to “status”, toggle button
  “toggleChecked” renamed to “checked”.

# [3.0.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.26.0...@ukic/react@3.0.0) (2024-08-28)

### Bug Fixes

- **react:** update story book for test to react horizontal ([849a69d](https://github.com/mi6/ic-ui-kit/commit/849a69d2b8aa90ec9b12450d6a51c21e0a0f4e5a))
- **react:** updates test following component change ([7c85c95](https://github.com/mi6/ic-ui-kit/commit/7c85c95eebc36590a52bf503409a7186102bfbbb))

### Code Refactoring

- **react:** change the name of the data-entity component to data-list ([7ffe6ea](https://github.com/mi6/ic-ui-kit/commit/7ffe6ea26b41ac315c2c8a2956149a2d08127e45)), closes [#79](https://github.com/mi6/ic-ui-kit/issues/79)
- **react:** icCard renamed to IcCardVertical ([88eeaeb](https://github.com/mi6/ic-ui-kit/commit/88eeaeb10b2b6c91d8b2ab96d4813878cb0247e2)), closes [#2216](https://github.com/mi6/ic-ui-kit/issues/2216)

### Features

- **react:** add chip and typography stories for in AG Grid ([e9d5561](https://github.com/mi6/ic-ui-kit/commit/e9d5561092d18d3500a5e1c683f1a1b8f00122d5))
- **react:** adds theme playground for testing dark mode ([723fe46](https://github.com/mi6/ic-ui-kit/commit/723fe462dddc7d76b45d69f429fd10579e1c545e))
- **react:** improve component prop names ([268e75f](https://github.com/mi6/ic-ui-kit/commit/268e75f57cb953050283634171a9da2f1ace911b))
- **react:** remove references to deprecated props ([cb4ade4](https://github.com/mi6/ic-ui-kit/commit/cb4ade45dce5f434685a85c6af6c6b694528d6ea)), closes [#230](https://github.com/mi6/ic-ui-kit/issues/230)
- **react:** update Cypress visual regression test baseline images ([b641bb4](https://github.com/mi6/ic-ui-kit/commit/b641bb478351fa47f1757fd1c8752034d1365330))
- **react:** update usage of sideNavExpanded and topNavResized events to use new names ([63b533c](https://github.com/mi6/ic-ui-kit/commit/63b533c3c55cc2c98bc132afc45a97dccaad95fd)), closes [.#1354](https://github.com/./issues/1354)
- **react:** updated radio cypress tests to remove shadow reference ([9f8b426](https://github.com/mi6/ic-ui-kit/commit/9f8b4264c55072b260c3e88558df8c7b9d98a01f))

### Tests

- **react:** edit Cypress test files to account for v3 changes ([f6e5035](https://github.com/mi6/ic-ui-kit/commit/f6e50359e892291045431b0198899d0871690a05))
- **react:** update Cypress test files with v3 changes and generate missing VR images ([5f5d910](https://github.com/mi6/ic-ui-kit/commit/5f5d910632973f47eb99c008d548c9487e7ed7ea))
- **react:** update test data files to use v3 prop names and fix failing tests ([c60810e](https://github.com/mi6/ic-ui-kit/commit/c60810eae40d6a86a29042b5632b0b41d12078fd))

### BREAKING CHANGES

- **react:** IcCard renamed to IcCardVertical, IcPagination adjacentCount and boundaryCount
  props renamed to adjacentPageCount and boundaryPageCount respectively, IcEmptyState bodyMaxLines
  prop renamed to maxLines, IcFooter groupTitle prop renamed to label, IcRadio disabled class renamed
  to ic-radio-option-disabled
- **react:** Renaming IcCard to IcCardVertical and IcDataEntity to IcDataList
- **react:** IcCard renamed to IcCardVertical
- **react:** Accordion group 'groupTitle' renamed to 'label' and badge 'textLabel' renamed to
  'label'
- **react:** Deprecated props/slots/methods/events removed.
- **react:** component now uses an ic-button under the covers, so internal structure has changed
- **react:** This change involves a component name change from data-entity to data-list
- **react:** Accordion group and footer link group “groupTitle” renamed to “label”, badge
  “textLabel” renamed to “label”, empty state “bodyMaxLines” renamed to “maxLines”, input label
  “error” renamed to “status” with error as an option, pagination “boundaryCount” and “adjacentCount”
  renamed to “boundaryPageCount” and “adjacentPageCount”, search bar and select “disableFilter”
  renamed to “disableAutoFiltering”, search bar “hintText” renamed to “assistiveHintText”, step props
  had the word “step” removed from the start e.g “stepStatus” renamed to “status”, toggle button
  “toggleChecked” renamed to “checked”.
- **react:** Since radio is no longer a shadow component, the old tests will no longer work

# [2.26.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.25.1...@ukic/react@2.26.0) (2024-08-21)

### Bug Fixes

- **react:** update story book for test to react horizontal ([849a69d](https://github.com/mi6/ic-ui-kit/commit/849a69d2b8aa90ec9b12450d6a51c21e0a0f4e5a))

### Features

- **react:** add chip and typography stories for in AG Grid ([e9d5561](https://github.com/mi6/ic-ui-kit/commit/e9d5561092d18d3500a5e1c683f1a1b8f00122d5))

## [2.25.1](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.25.0...@ukic/react@2.25.1) (2024-08-07)

### Bug Fixes

- **react:** update components so that slots can update after initial render ([ecdbed1](https://github.com/mi6/ic-ui-kit/commit/ecdbed143907fe9b391f3cf03429655884c20808))

# [2.25.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.24.0...@ukic/react@2.25.0) (2024-07-24)

### Bug Fixes

- **react:** adds missing images and updates some thresholds ([b8507e2](https://github.com/mi6/ic-ui-kit/commit/b8507e2e28de06daf8901afdbede519e53291464))
- **react:** adds test case for hiding tooltip fix ([0fc6361](https://github.com/mi6/ic-ui-kit/commit/0fc6361ecccae201cc8a3fdbcd176cd01c048167))
- **react:** cypress test update after tooltip change ([7f4d8ee](https://github.com/mi6/ic-ui-kit/commit/7f4d8eeabab5634e788ed3e8472342e9a46dd8ed))
- **react:** reword misspelled words ([d9cebde](https://github.com/mi6/ic-ui-kit/commit/d9cebde5f6bae151b00f9415a9f4082e441b7c6a))

### Features

- **react:** add buttons to 'Page example' back to top story ([3c9cdfc](https://github.com/mi6/ic-ui-kit/commit/3c9cdfc15a4a6eafffd6d8e8f31eae1d54b28a35))
- **react:** update card 'Reduced width' story to show increased width as well ([a211e69](https://github.com/mi6/ic-ui-kit/commit/a211e69597e4933331ed1245dcfd8d361f20fa30))

# [2.24.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.23.0...@ukic/react@2.24.0) (2024-07-10)

### Bug Fixes

- **react:** uncomment a11y test ([23c3a11](https://github.com/mi6/ic-ui-kit/commit/23c3a11d0281eefcf9e6e3b3def93e90ab4aecab))

### Features

- **react:** add icon slot for select ([57ef58c](https://github.com/mi6/ic-ui-kit/commit/57ef58c0bbcb34f34bcbb423b6cbdd81f095fac3))
- **react:** added playground to ic-text-field react storybook ([a7b720f](https://github.com/mi6/ic-ui-kit/commit/a7b720f0b057264aefed4c50d5272d931024c477))

# [2.23.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.22.0...@ukic/react@2.23.0) (2024-06-27)

### Bug Fixes

- **react:** update back to top cypress test and merge in ci generated snapshot ([7f2a8cb](https://github.com/mi6/ic-ui-kit/commit/7f2a8cbd142725178cb80fbf87482af9e2dc5a7e))
- **web-components:** update back to top icon variant to match Figma designs ([c8e0f60](https://github.com/mi6/ic-ui-kit/commit/c8e0f60cd259954d27015626373c487f45edda7c)), closes [#1979](https://github.com/mi6/ic-ui-kit/issues/1979)

### Features

- **react:** add a storybook playground for ic-pagination ([6e8758f](https://github.com/mi6/ic-ui-kit/commit/6e8758fc2381a46dde71de8503e1ad0e5bb13ebc))
- **react:** add loading indicator props playground ([fbbf0b6](https://github.com/mi6/ic-ui-kit/commit/fbbf0b6af8de252e5131b7de508d39d94e764800)), closes [.#1970](https://github.com/./issues/1970)
- **react:** adds playground for back to top ([5c6d265](https://github.com/mi6/ic-ui-kit/commit/5c6d265327300881f3762c2a7b4f52558aa5a0a7))
- **react:** tests updated and storybook playground added ([5a62361](https://github.com/mi6/ic-ui-kit/commit/5a62361c8d74c5e06e28093bab81f0c179edd118))
- **react:** update Cypress visual regression test baseline images ([9baef99](https://github.com/mi6/ic-ui-kit/commit/9baef999e08000a7e40c6a16b5112eb7ce6ce827))
- **react:** update select playground argType ([ee5adb4](https://github.com/mi6/ic-ui-kit/commit/ee5adb4a9089b2a7e94b5856867fc71fb29323de)), closes [.#1970](https://github.com/./issues/1970)

# [2.22.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.21.0...@ukic/react@2.22.0) (2024-06-12)

### Bug Fixes

- **react:** update stories and cypress tests to include high contrast mode ([a85b7b7](https://github.com/mi6/ic-ui-kit/commit/a85b7b738afed48ae0a58019f26a1d197a80c8ae))
- **react:** update toggle button icon placement to be overridden by group icon placement ([73f1000](https://github.com/mi6/ic-ui-kit/commit/73f1000e29f4da515065b2758f411f55514f449e))
- **react:** updates test baseline image for toggle button change ([478b4e5](https://github.com/mi6/ic-ui-kit/commit/478b4e5d75cc5f40f1344d08abfe8578f9bab25b))

### Features

- **react:** update Cypress visual regression test baseline images ([47522c5](https://github.com/mi6/ic-ui-kit/commit/47522c56767c01c4b560ef68a751dcbca581cad8))

# [2.21.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.20.0...@ukic/react@2.21.0) (2024-05-29)

### Bug Fixes

- **react:** [ic-button] storybook playground ([b8d2499](https://github.com/mi6/ic-ui-kit/commit/b8d249917e8c26a4322b92af6cc5d3b301d78be8))
- **react:** adds tests and updates stories for textfield ([93ea71b](https://github.com/mi6/ic-ui-kit/commit/93ea71bc079d6c4e6a4b7aa7c542366f9060d96a))
- **react:** storybook playground added ([775aae8](https://github.com/mi6/ic-ui-kit/commit/775aae8eae938c363731e640e6fccd694a08e336))
- **react:** update checkbox border colour ([8b63c7e](https://github.com/mi6/ic-ui-kit/commit/8b63c7e31c8db214096bf8e113daaadd0242ff6a)), closes [#1886](https://github.com/mi6/ic-ui-kit/issues/1886)
- **react:** update dialog, card and data entity stories and cypress tests ([6088816](https://github.com/mi6/ic-ui-kit/commit/6088816e14cf75e72121b56c49ad861c2592d1c2))
- **react:** update stories and cypress tests for footer, hero and loading indicator ([f7c2680](https://github.com/mi6/ic-ui-kit/commit/f7c26809c1bd050a31ce6b267637e783ada6d2ae))
- **react:** updates visual test baseline images ([9640cb3](https://github.com/mi6/ic-ui-kit/commit/9640cb3e3770bf4a54d085585dd8beea7ff35abb))

### Features

- **react:** added story for conditional tabs/additional field to ic-top-navigation/radio react stories ([1aa0759](https://github.com/mi6/ic-ui-kit/commit/1aa07594f19ae9bf408534096e938099a9fc341b))
- **react:** update Cypress visual regression test baseline images ([e75f785](https://github.com/mi6/ic-ui-kit/commit/e75f78578a48c3cd4c3e7160c20a636002486cdd))
- **react:** update Cypress visual regression test baseline images ([1445e86](https://github.com/mi6/ic-ui-kit/commit/1445e865e2424e48d972936862d3b64d79df1125))
- **react:** update Cypress visual regression test baseline images ([9ed2530](https://github.com/mi6/ic-ui-kit/commit/9ed25302cf2f56c8860a9616b1a3f9df57d71ff2))
- **react:** update Cypress visual regression test baseline images ([0af5ee8](https://github.com/mi6/ic-ui-kit/commit/0af5ee889c6a7fa7d7b9c7f05a8af581b9c4e0f6))

# [2.20.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.19.0...@ukic/react@2.20.0) (2024-05-15)

### Features

- **react:** add missing slot for accordion group title. Add stories for 3 comps ([98c568f](https://github.com/mi6/ic-ui-kit/commit/98c568f2676de2caa4726984b76530490ff5a474))
- **react:** added stories and tests for dynamic checkbox loading ([f57e479](https://github.com/mi6/ic-ui-kit/commit/f57e479b4520af3b4779192cb43ab4b89ccc3a79))

# [2.19.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.18.1...@ukic/react@2.19.0) (2024-05-01)

### Features

- **react:** add custom colour prop to chip to alter background/border colour ([0c3a627](https://github.com/mi6/ic-ui-kit/commit/0c3a6274c3e5890dad7d293d2407c907f0103d39)), closes [#1468](https://github.com/mi6/ic-ui-kit/issues/1468)
- **react:** add light appearance to stepper component ([a969417](https://github.com/mi6/ic-ui-kit/commit/a96941782c7b4e4b287a95ec5ae63ed0537b47d6)), closes [#1553](https://github.com/mi6/ic-ui-kit/issues/1553)
- **react:** adds tests and stories for dynamic options ([e95af5d](https://github.com/mi6/ic-ui-kit/commit/e95af5d2ab24c787531eaf2d2c47098929b1acd2))
- **react:** removes duplicate helper function ([bec491b](https://github.com/mi6/ic-ui-kit/commit/bec491b459c85eb3b3c1325e0d9bb8eb245b5da9))

## [2.18.1](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.18.0...@ukic/react@2.18.1) (2024-04-17)

### Bug Fixes

- **react:** version bump ([6267440](https://github.com/mi6/ic-ui-kit/commit/6267440970e09c295ac669e92e1a0e279f49d646))

# [2.18.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.17.0...@ukic/react@2.18.0) (2024-04-17)

### Features

- **react:** updates tests for dialogs with accordions ([81305f6](https://github.com/mi6/ic-ui-kit/commit/81305f61bb4a5ed549316de23547ff030b514997))

# [2.17.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.15.1...@ukic/react@2.17.0) (2024-04-08)

### Bug Fixes

- **react:** update React package version number to be in sync with web components version ([78211e8](https://github.com/mi6/ic-ui-kit/commit/78211e82e7b872682765e5c1af5c81a30a4132b4))

### Features

- **react:** add examples of components with type="dot" badge ([3f5c4a7](https://github.com/mi6/ic-ui-kit/commit/3f5c4a781961d042b43162850fd1d9311ef58c9c)), closes [.#1391](https://github.com/./issues/1391)

## [2.15.1](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.15.0...@ukic/react@2.15.1) (2024-03-28)

**Note:** Version bump only for package @ukic/react

# [2.15.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.14.0...@ukic/react@2.15.0) (2024-03-26)

### Bug Fixes

- **react:** add Description import to select mdx files, adjust storybook folder structure ([fe6505d](https://github.com/mi6/ic-ui-kit/commit/fe6505dc384a5298e5fbf8dcbfbf71bb60f3002e))

### Features

- **react:** added tabbing and other interactions into cypress tests suite ([69b914a](https://github.com/mi6/ic-ui-kit/commit/69b914a6be314e007a5fa73966c51727347e3c6b))
- **react:** adds new constant for datepicker tests ([b57223d](https://github.com/mi6/ic-ui-kit/commit/b57223d6aafaf79a6d1ae8e487c2c7c0d08564ca))

# [2.14.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.13.0...@ukic/react@2.14.0) (2024-03-20)

### Bug Fixes

- **react:** fix filename casing on footer screenshot ([5c610f1](https://github.com/mi6/ic-ui-kit/commit/5c610f162a51010579e600bb484b91d81aa9566c))
- **react:** updating packages ([c92d76e](https://github.com/mi6/ic-ui-kit/commit/c92d76ebe6ba20c094aae3fadb50a90fd823526a))

### Features

- **react:** add router item slot for buttons ([1d3b09e](https://github.com/mi6/ic-ui-kit/commit/1d3b09e8e662f735465a6d23af56f9292190ddc4)), closes [#1500](https://github.com/mi6/ic-ui-kit/issues/1500)
- **react:** ic-toggle-button-group ([ee879b0](https://github.com/mi6/ic-ui-kit/commit/ee879b0d3d1a6a80e9f55fcacf3eca49c4f9b446))
- **react:** split single and searchable select stories out into separate files ([b62052f](https://github.com/mi6/ic-ui-kit/commit/b62052f9b831ce2b089b52052e3be2c93953dd84)), closes [.#257](https://github.com/./issues/257)
- **react:** update Cypress visual regression test baseline images ([de15548](https://github.com/mi6/ic-ui-kit/commit/de1554857d14f0723c3d44300921ca85ddedaf54))
- **react:** update how react storybook displays stories title ([ec525df](https://github.com/mi6/ic-ui-kit/commit/ec525df0f280302c156eaca5d3bbad5c32201517))
- **react:** updates stories for icOpen and icClose events ([104c3fb](https://github.com/mi6/ic-ui-kit/commit/104c3fb686e1cc8337c3d5f53421fc364a2d4589))
- **web-components:** ic-toggle-button-group ([20f3319](https://github.com/mi6/ic-ui-kit/commit/20f33192a2e44d088433b77e1453446f16c77341))

### Reverts

- **react:** removed dark color-scheme from react storybook ([e53d63a](https://github.com/mi6/ic-ui-kit/commit/e53d63a70914e8fcc2eb64da74a6e9802f3a9517))

# [2.13.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.12.0...@ukic/react@2.13.0) (2024-02-29)

### Features

- **react:** add file upload button feature into react storybook ([2ea0def](https://github.com/mi6/ic-ui-kit/commit/2ea0defb59a853e9424d57f777f747fadab7ee37))
- **react:** added threshold function for cypress tests ([b5c73b9](https://github.com/mi6/ic-ui-kit/commit/b5c73b902687f5cfb199cafa1a9bbf7c87fcb613))

# [2.12.0](https://github.com/mi6/ic-ui-kit/compare/@ukic/react@2.11.0...@ukic/react@2.12.0) (2024-02-21)

### Bug Fixes

- **react:** fix the react IcPopover stories for the open and closed state ([95eab1a](https://github.com/mi6/ic-ui-kit/commit/95eab1ad70dcb67367e357d920007b817e8d5392))
- **react:** update expanded on side nav to allow state to be set programmatically ([820762f](https://github.com/mi6/ic-ui-kit/commit/820762f63870b092914e03eb56a76c8ac26ee0b6)), closes [#1474](https://github.com/mi6/ic-ui-kit/issues/1474)

### Features

- **web-components:** native maxlength and minlength added to textfield ([2ec3fd7](https://github.com/mi6/ic-ui-kit/commit/2ec3fd708608f4e6f00d00d1a4a8390464e1d13b))

# 2.11.0 (2024-02-07)

### Bug Fixes

- **react:** fix package-lock ([c788af4](https://github.com/mi6/ic-ui-kit/commit/c788af4bb2e6134867fe2b31bf987eb68f4999e6))

### Features

- **react:** add dropdown option to button ([266d4c8](https://github.com/mi6/ic-ui-kit/commit/266d4c8435beeea3fb7632e088e54d46de1e4afb)), closes [#1321](https://github.com/mi6/ic-ui-kit/issues/1321)
- **react:** add toggle button component ([dabdc1c](https://github.com/mi6/ic-ui-kit/commit/dabdc1c35a782d1d9c2a587f93876cf851d9f3ee)), closes [#264](https://github.com/mi6/ic-ui-kit/issues/264)
- **react:** adds thresholds to cypress tests ([2d56e8f](https://github.com/mi6/ic-ui-kit/commit/2d56e8f00e2c9c21c4363fbd1bda8d63dbd9da00))
- **react:** migrated accordion tests to cypress ([1842ed6](https://github.com/mi6/ic-ui-kit/commit/1842ed64c8c47be215b876756a011750c681edd9))
- **react:** update react storybook to v7.6.7 ([d6df566](https://github.com/mi6/ic-ui-kit/commit/d6df566ff2ed75710be9b92eb3069cc4ad79ae58)), closes [#977](https://github.com/mi6/ic-ui-kit/issues/977)

# 2.9.0 (2024-01-15)

# 2.10.0 (2024-01-25)

### Bug Fixes

- **react:** fix package-lock ([c788af4](https://github.com/mi6/ic-ui-kit/commit/c788af4bb2e6134867fe2b31bf987eb68f4999e6))

### Features

- **react:** add dropdown option to button ([266d4c8](https://github.com/mi6/ic-ui-kit/commit/266d4c8435beeea3fb7632e088e54d46de1e4afb)), closes [#1321](https://github.com/mi6/ic-ui-kit/issues/1321)
- **react:** adds thresholds to cypress tests ([2d56e8f](https://github.com/mi6/ic-ui-kit/commit/2d56e8f00e2c9c21c4363fbd1bda8d63dbd9da00))
- **react:** migrated accordion tests to cypress ([1842ed6](https://github.com/mi6/ic-ui-kit/commit/1842ed64c8c47be215b876756a011750c681edd9))

# 2.9.0 (2024-01-15)

### Bug Fixes

- **react:** update sideNavExpanded and topNavResized to work as other events ([cc30b7b](https://github.com/mi6/ic-ui-kit/commit/cc30b7bd68b8d598551a33f4335216117726d02a))

### Features

- **react:** add appearance story for ic-breadcrumb-group ([f5a2eb0](https://github.com/mi6/ic-ui-kit/commit/f5a2eb0936955193718e14445cf88e093bf18582)), closes [#1259](https://github.com/mi6/ic-ui-kit/issues/1259)
- **react:** add optional white background to button and chip components ([7dd50e8](https://github.com/mi6/ic-ui-kit/commit/7dd50e8f5c65a71caa95a83b585809e305cfb84b)), closes [#1322](https://github.com/mi6/ic-ui-kit/issues/1322)

# 2.8.0 (2023-12-13)

### Bug Fixes

- **react:** open React IcDialog during initialisation using open prop ([34c8289](https://github.com/mi6/ic-ui-kit/commit/34c8289455af8e0c5aa9c10e2b06fb5f24674e19))

### Features

- **react:** add a new slot to top nav for routing using short app title ([76d5b33](https://github.com/mi6/ic-ui-kit/commit/76d5b33aaa4f2689cda1fdf10a6070fd6698f46b)), closes [#1248](https://github.com/mi6/ic-ui-kit/issues/1248)
- **react:** add selectOnEnter prop to determine when icOptionSelect is emitted ([eddafe4](https://github.com/mi6/ic-ui-kit/commit/eddafe44c9c4d8ef3b14c27293d87b16865aceda)), closes [#1273](https://github.com/mi6/ic-ui-kit/issues/1273)

# 2.7.0 (2023-11-22)

### Bug Fixes

- **react:** adds accordion expanded story ([3f3db49](https://github.com/mi6/ic-ui-kit/commit/3f3db49aee99db7b797df61ef195a4383c0b89de))
- **react:** react story added for checkbox fix ([daf8ca8](https://github.com/mi6/ic-ui-kit/commit/daf8ca86fad66fae8f7c7785526ef28f01f51833))

### Features

- **react:** deprecate setVisible method on toast region and add openToast prop ([091bca2](https://github.com/mi6/ic-ui-kit/commit/091bca23ef6c7969d0ae6a9c655eccb98f1bc728)), closes [#1210](https://github.com/mi6/ic-ui-kit/issues/1210)

# 2.6.0 (2023-11-07)

### Features

- **react:** add badge slot to card, navigation item and navigation button ([d4e105a](https://github.com/mi6/ic-ui-kit/commit/d4e105a6f6aa33049d7f47c9fff81d30d5a9e056)), closes [#1167](https://github.com/mi6/ic-ui-kit/issues/1167)
- **react:** add prop to side navigation to disable top bar behaviour ([8adf5fa](https://github.com/mi6/ic-ui-kit/commit/8adf5fab265125918dfb932162373a937ce96868))
- **react:** add story for new maxLines prop in ic-tooltip ([b890693](https://github.com/mi6/ic-ui-kit/commit/b89069361f1df6e66ea36b8591d55579e1340a95)), closes [#1225](https://github.com/mi6/ic-ui-kit/issues/1225)

# 2.5.0 (2023-10-10)

### Bug Fixes

- **react:** adds react story for unnamed slot ([849784d](https://github.com/mi6/ic-ui-kit/commit/849784d7c6f54cb94aebc2ebef553c070022a443))
- **web-components:** update labelledby ids ([22bed11](https://github.com/mi6/ic-ui-kit/commit/22bed114385a23928e719286e402a4a0473d2726))

### Features

- **react:** added accordion react stories ([21f0767](https://github.com/mi6/ic-ui-kit/commit/21f076793e0512e3f4951033ef9311e3778228db))
- **react:** create badge component ([750cc43](https://github.com/mi6/ic-ui-kit/commit/750cc43f43e96d8c88ece94f7412b1ef7a398451))

## 2.4.1 (2023-09-19)

### Bug Fixes

- **react:** update buttons to add viewbox to icon to avoid sizing issues ([108bfe0](https://github.com/mi6/ic-ui-kit/commit/108bfe087969f0605ca857a70b73afe4b8f38cb0)), closes [#1065](https://github.com/mi6/ic-ui-kit/issues/1065)

# 2.4.0 (2023-09-13)

### Features

- **react:** add icons and elements to select ([4cedb9c](https://github.com/mi6/ic-ui-kit/commit/4cedb9cbe0bcb58d7aed52af60b7abd4c11bd0eb)), closes [#224](https://github.com/mi6/ic-ui-kit/issues/224)

# 2.3.0 (2023-09-04)

### Bug Fixes

- **react:** fix for react package error running bootstrap ([ba9a5a7](https://github.com/mi6/ic-ui-kit/commit/ba9a5a77e154c82133e356c2b89d1f6ff8c47e1d))
- **react:** run new audit fix command ([85a1e3c](https://github.com/mi6/ic-ui-kit/commit/85a1e3c5302c9ca7ff74c71bb63c43b4e5c4cf55))

### Features

- **react:** add stories for empty state component ([defecfa](https://github.com/mi6/ic-ui-kit/commit/defecfafc0f7f53bf3db77e7421e75d57fa09139)), closes [#655](https://github.com/mi6/ic-ui-kit/issues/655)
- **react:** add story for new sizes for checkboxes ([6656c9c](https://github.com/mi6/ic-ui-kit/commit/6656c9c98c5854a1023909e09321b17f312b28e8)), closes [#643](https://github.com/mi6/ic-ui-kit/issues/643)
- **react:** update button to use left-icon slot ([a600ce9](https://github.com/mi6/ic-ui-kit/commit/a600ce9a6a6646393da6ee3ff297751602e31936)), closes [#974](https://github.com/mi6/ic-ui-kit/issues/974)
- **react:** update stories for typography to show new props ([ddb4404](https://github.com/mi6/ic-ui-kit/commit/ddb440484202acd6682da64b4d8983d2e9df2ff0)), closes [#988](https://github.com/mi6/ic-ui-kit/issues/988)
- **web-components:** add right icon to ic button, deprecate icon slot and update icon sizes ([2e96862](https://github.com/mi6/ic-ui-kit/commit/2e96862741c4f08a718be89d2cbf914f972686a2)), closes [#974](https://github.com/mi6/ic-ui-kit/issues/974)

# 2.2.0 (2023-08-07)

### Bug Fixes

- **web-components:** added prop to prevent auto highlighting first option ([9b4e755](https://github.com/mi6/ic-ui-kit/commit/9b4e755bf2011a9e735e551d6a8efadca20fc522))

# 2.1.0-beta.18 (2023-07-24)

### Bug Fixes

- **react:** update shortTitle to shortAppTitle for top navigation ([6373cce](https://github.com/mi6/ic-ui-kit/commit/6373cceb8c014bce66e5be64f60dd3561b2f60f0)), closes [#853](https://github.com/mi6/ic-ui-kit/issues/853)

### Features

- **react:** add story for short app title for top navigation ([02a4c01](https://github.com/mi6/ic-ui-kit/commit/02a4c01ef1159b7f69f0202c7aed8898d51afabc)), closes [#853](https://github.com/mi6/ic-ui-kit/issues/853)

# 2.1.0-beta.17 (2023-07-13)

### Features

- **react:** remove selected prop from radio story, add reset button ([5d0b96e](https://github.com/mi6/ic-ui-kit/commit/5d0b96e348d15de1fd4abd1d61b32fd7a80110e4)), closes [.#822](https://github.com/./issues/822)

# 2.1.0-beta.16 (2023-06-26)

### Bug Fixes

- **react:** adds footer example with no links ([00130eb](https://github.com/mi6/ic-ui-kit/commit/00130eb26002c0ff3dee44325222ab989e7b63da))
- **react:** update status tag stories to appearance outlined ([9098ba0](https://github.com/mi6/ic-ui-kit/commit/9098ba0e6a73abc74601190b571bbe34668da002)), closes [#781](https://github.com/mi6/ic-ui-kit/issues/781)

### Features

- **react:** adds react stories for ic-dialog ([57e6e6c](https://github.com/mi6/ic-ui-kit/commit/57e6e6ce7b336876eef8c8b7c6b7ddb35706ade5))
- **react:** adds react storybook example ([b19664b](https://github.com/mi6/ic-ui-kit/commit/b19664bfb8a0da2295f8e1999aa3acd95219c146))
- **react:** upgrade stencil to V3 ([a34c41b](https://github.com/mi6/ic-ui-kit/commit/a34c41b19b7cfe22f7298a096354d48937521b5a)), closes [#386](https://github.com/mi6/ic-ui-kit/issues/386)
- **web-components:** add ic-dialog component ([1f37206](https://github.com/mi6/ic-ui-kit/commit/1f37206c20f8b9175a34dc390c152db0756c4740))

# 2.1.0-beta.15 (2023-06-05)

### Features

- **react:** adds story for typography truncation ([b7ea9ba](https://github.com/mi6/ic-ui-kit/commit/b7ea9baff2f2743952b18f0d8232cf1fe73def50))

# 2.1.0-beta.14 (2023-05-17)

# 2.1.0-beta.13 (2023-05-16)

### Bug Fixes

- **react:** ic-card will always have interaction section placed at the bottom ([eb56b1a](https://github.com/mi6/ic-ui-kit/commit/eb56b1a6519be3ec1f26f5952c09c84da12d7a47)), closes [#528](https://github.com/mi6/ic-ui-kit/issues/528)

### Features

- **react:** add story for new internal inline validation prop ([ce43499](https://github.com/mi6/ic-ui-kit/commit/ce434996a995434db3d5c9d96143f5dadbffd91c)), closes [#612](https://github.com/mi6/ic-ui-kit/issues/612)
- **react:** add story to show app status and version number text wrapping in side nav ([b451f4a](https://github.com/mi6/ic-ui-kit/commit/b451f4ae4649112bd84728d23b29ebf3e6dfa2e6)), closes [#550](https://github.com/mi6/ic-ui-kit/issues/550)
- **react:** added react story ([5ac3554](https://github.com/mi6/ic-ui-kit/commit/5ac3554b0bb613c6f0154a9aedb498d6789ba5b6))
- **react:** updated react stories ([a504677](https://github.com/mi6/ic-ui-kit/commit/a504677acd7fcf3828f3bbe92c9a17ca74c4bbf8))
- **react:** updated react story ([2546fa6](https://github.com/mi6/ic-ui-kit/commit/2546fa666bb2cf5c72b25d6490fa66f2d2d88034))
- **web-components:** ic-pagination and ic-pagination-item created ([3f3658d](https://github.com/mi6/ic-ui-kit/commit/3f3658dc0f4e2cca4831d7ab0c5c902f49f84959))

# 2.1.0-beta.12 (2023-05-03)

### Bug Fixes

- **react:** add code typography variants to React Storybook ([1a81ad2](https://github.com/mi6/ic-ui-kit/commit/1a81ad2dcbb88785ccc69b1cc99a43f19a732d33)), closes [#544](https://github.com/mi6/ic-ui-kit/issues/544)

### Features

- **react:** add min/max to TextField ([6b236d3](https://github.com/mi6/ic-ui-kit/commit/6b236d3d1b2b7f4df83ccfe2dc460b6108302847))
- **web-components:** add min/max to TextField ([8ac928f](https://github.com/mi6/ic-ui-kit/commit/8ac928fca275d8666ae3895bf6b9b013c5e09e97))

# 2.1.0-beta.11 (2023-04-12)

### Bug Fixes

- **react:** remove charactersUntilSuggestions stories ([dd10547](https://github.com/mi6/ic-ui-kit/commit/dd10547e1dc3e4798701f8792e665c45965dc827))

### Features

- **react:** add menu item and menu group to React components.ts ([60b815d](https://github.com/mi6/ic-ui-kit/commit/60b815d45ca04bbb0a49e57159cbfb381bb62774)), closes [#258](https://github.com/mi6/ic-ui-kit/issues/258) [#433](https://github.com/mi6/ic-ui-kit/issues/433) [#434](https://github.com/mi6/ic-ui-kit/issues/434)
- **react:** create popover menu component ([96bc93c](https://github.com/mi6/ic-ui-kit/commit/96bc93c6ff137b042aff7d4908791312334ccb7b))

# 2.1.0-beta.10 (2023-03-28)

### Bug Fixes

- **react:** updates React stories for ic-select change ([960284d](https://github.com/mi6/ic-ui-kit/commit/960284d164b27ae044298634b98b189e0b34add8))

### Features

- **react:** add option with space to ic-select 'Scroll behaviour' story ([e5cc132](https://github.com/mi6/ic-ui-kit/commit/e5cc1327a85dde0d69c923237fa4484ae4a16f50)), closes [.#158](https://github.com/./issues/158)

# 2.1.0-beta.9 (2023-03-21)

### Features

- **react:** add more tabs / nav items to stories for scroll demonstration ([925602b](https://github.com/mi6/ic-ui-kit/commit/925602b046734a867ae1d74a4a4e7306c14068fe)), closes [.#242](https://github.com/./issues/242)
- **web-components:** implement toast component ([db455fb](https://github.com/mi6/ic-ui-kit/commit/db455fbb16a4e0415908b909a6d47cafe9f10912))

# 2.1.0-beta.8 (2023-03-01)

### Bug Fixes

- **react:** fixes react storybook not running ([ab0802c](https://github.com/mi6/ic-ui-kit/commit/ab0802c92cbd19bd9f60883b8c2b5d6259dae706))

### Features

- **react:** add story for horizontal radio groups, run audit fix ([ef1a7c3](https://github.com/mi6/ic-ui-kit/commit/ef1a7c3bdc3c7bf1031aaef9c63ec913773fe732)), closes [#177](https://github.com/mi6/ic-ui-kit/issues/177)
- **react:** adds react storybook example of external filtering ([9bd2b05](https://github.com/mi6/ic-ui-kit/commit/9bd2b05461fa66d6600cf1305011733b32c8946d))
- **react:** update react router story to use router slot for app title ([1a7596c](https://github.com/mi6/ic-ui-kit/commit/1a7596c71a064aaa01bfc11ced2c82269dbd7eb9))
- **react:** update react router story to use router slot for app title in side nav ([ff392de](https://github.com/mi6/ic-ui-kit/commit/ff392de0b996a4db8ce51b22c697dcbc9e570baa)), closes [#376](https://github.com/mi6/ic-ui-kit/issues/376)
- **web-components:** allow for use of router links for top nav app title ([bba0edb](https://github.com/mi6/ic-ui-kit/commit/bba0edbe74b62ef3bcf949ce5a56b16a92033f9c))

# 2.1.0-beta.7 (2023-02-13)

# 2.1.0-beta.6 (2023-02-07)

### Features

- **react:** enhances slottedsvg component ([d3c0a93](https://github.com/mi6/ic-ui-kit/commit/d3c0a933c17ca36722c5ed46e56c9b230cec1318))

# 2.1.0-beta.5 (2023-02-02)

# 2.1.0-beta.4 (2023-02-01)

### Bug Fixes

- **react:** adds story for external filtering ([d03c294](https://github.com/mi6/ic-ui-kit/commit/d03c2946e00bfc8b518aefd4074a97085ec4a952))
- **react:** fixes react storybook docs ([d51bc38](https://github.com/mi6/ic-ui-kit/commit/d51bc3832e41d3720280de58b31b8822aefafba8))

### Features

- **react:** add script to copy normalize.css, update React instructions ([3f6330a](https://github.com/mi6/ic-ui-kit/commit/3f6330a925b1b4bca6e759737d902cde2dba9a82))
- **react:** add story for long single-word app title on top nav ([dac2645](https://github.com/mi6/ic-ui-kit/commit/dac2645ad29e209282fe2350ff0c6bdf49f878bf))
- **react:** update card with v2 changes ([b5434bf](https://github.com/mi6/ic-ui-kit/commit/b5434bf81d6cb6e48429e9827c17a10815e2fdbf))

# 2.1.0-beta.3 (2023-01-23)

### Features

- **react:** add chips stories ([2d7045d](https://github.com/mi6/ic-ui-kit/commit/2d7045d3cacaf123bb08fc4f2dd116db1eb5db6f)), closes [#141](https://github.com/mi6/ic-ui-kit/issues/141)
- **react:** add slotted svg component to react library ([3546f89](https://github.com/mi6/ic-ui-kit/commit/3546f8972bcf980ecf457af686e1b1d5e5df9cc6)), closes [#280](https://github.com/mi6/ic-ui-kit/issues/280)
- **react:** change buttons in editable data entity story ([5ede6a7](https://github.com/mi6/ic-ui-kit/commit/5ede6a7cd5fd8b4a6cb290821f68fc195d7c51a7)), closes [mi6/ic-design-system#128](https://github.com/mi6/ic-design-system/issues/128)
- **react:** update loading indicator & stepper stories ([670208b](https://github.com/mi6/ic-ui-kit/commit/670208b0e8e1efc4d9ab1496cda3e7cb8c80b8ca)), closes [#140](https://github.com/mi6/ic-ui-kit/issues/140)
- **react:** update tooltips to have disableHover prop that requires a click to display ([94da0b4](https://github.com/mi6/ic-ui-kit/commit/94da0b42b793de3ccbfec4c14ee957207c952b06)), closes [#243](https://github.com/mi6/ic-ui-kit/issues/243)

# 2.1.0-beta.2 (2023-01-10)

### Bug Fixes

- **react:** import text field into react radio examples ([8e4faf0](https://github.com/mi6/ic-ui-kit/commit/8e4faf037a1436e59f5872da2aeb01cb83c95c72)), closes [#221](https://github.com/mi6/ic-ui-kit/issues/221)
- **react:** updated css copy script ([50689f0](https://github.com/mi6/ic-ui-kit/commit/50689f0846acecd8c7292346658c0e4f65bc3882)), closes [#206](https://github.com/mi6/ic-ui-kit/issues/206)

# 2.1.0-beta.1 (2022-12-22)

### Bug Fixes

- **react:** ic-hero story updated to reflect web-components version ([14d78b9](https://github.com/mi6/ic-ui-kit/commit/14d78b956017287d9909e06c2d252ab372d7a629)), closes [#145](https://github.com/mi6/ic-ui-kit/issues/145)
- **react:** remove unnecessary added styles to hero stories ([90cd2c1](https://github.com/mi6/ic-ui-kit/commit/90cd2c1d822059d18d4f6b540d0999d2e3169001)), closes [#143](https://github.com/mi6/ic-ui-kit/issues/143)
- **react:** switch storybook to webpack5 ([1dd9943](https://github.com/mi6/ic-ui-kit/commit/1dd994378d023cd3157f7ca043be3f02bafa2f29)), closes [#156](https://github.com/mi6/ic-ui-kit/issues/156)

# 2.1.0-beta.0 (2022-12-01)

### Features

- **react:** update react stories to have appearance light for tabs ([8c5a3c7](https://github.com/mi6/ic-ui-kit/commit/8c5a3c7042561d0c7bb4fb17f0e6114dfd33ef44)), closes [#112](https://github.com/mi6/ic-ui-kit/issues/112)
