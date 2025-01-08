# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-canary.6](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@3.0.0-canary.5...@ukic/canary-web-components@3.0.0-canary.6) (2025-01-08)

### Bug Fixes

- **canary-web-components:** Allow the IcDataTable to handle empty cell data values ([e35433f](https://github.com/mi6/ic-ui-kit/commit/e35433f03721b39d8fbafa6ee0ed1867bcce7ef6))
- **canary-web-components:** fix for items displayed on brand color background ([81dbda4](https://github.com/mi6/ic-ui-kit/commit/81dbda4b894b9caf4adbd5f2578b79c595410ae9))
- **canary-web-components:** prevent mutation of ic-pagination-bar items per page options prop ([e28c005](https://github.com/mi6/ic-ui-kit/commit/e28c005fb53e18e428e5d9a822af60697bde3747))
- **canary-web-components:** removed disabled attribute from components ([786c21d](https://github.com/mi6/ic-ui-kit/commit/786c21d893508044bc3527b71eb00dede545e724))
- **canary-web-components:** set horizontal card image size directly on image to fix Safari issue ([d0c344f](https://github.com/mi6/ic-ui-kit/commit/d0c344f7dee7d18606b986ab78b98a6e72f5cc7b))
- **canary-web-components:** update webkit autofill colours for date input dark mode ([2800ef2](https://github.com/mi6/ic-ui-kit/commit/2800ef20a4daadb2fcff019e4218fc03f107e114)), closes [#2915](https://github.com/mi6/ic-ui-kit/issues/2915)

### Features

- **canary-web-components:** added action-element, tests and stories ([7538788](https://github.com/mi6/ic-ui-kit/commit/75387882a0cbd629c62972b5d7184782a6dfc015))
- **canary-web-components:** allow specifying target for anchor in ic-data-table cell ([69fd1b6](https://github.com/mi6/ic-ui-kit/commit/69fd1b6fe3273d3222776e2905c3ef89e2d77e34)), closes [#2751](https://github.com/mi6/ic-ui-kit/issues/2751)
- **canary-web-components:** update tree view/tree item to text wrap by default ([e156511](https://github.com/mi6/ic-ui-kit/commit/e15651173bf550b41901dcebb3e90417d00217e1)), closes [#2895](https://github.com/mi6/ic-ui-kit/issues/2895)
- **canary-web-components:** updates due to ic-theme components changes ([6b5afe3](https://github.com/mi6/ic-ui-kit/commit/6b5afe37727bca895a897b89f50fe7db7e557eaa))

### BREAKING CHANGES

- **canary-web-components:** change to IcTheme types, now IcBrand
- **canary-web-components:** Default behaviour for tree view changed from truncation to text wrap

# [3.0.0-canary.5](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@3.0.0-canary.4...@ukic/canary-web-components@3.0.0-canary.5) (2024-12-09)

### Bug Fixes

- **canary-web-components:** [#2848](https://github.com/mi6/ic-ui-kit/issues/2848) Default ic-pagination-bar totalItems prop to zero if data is null ([da9477c](https://github.com/mi6/ic-ui-kit/commit/da9477ce8c139fa2c6bc21c63a8674f3c035a3a4))
- **canary-web-components:** add slotted columns to correct positions, skip the column if present in data ([8db7cb9](https://github.com/mi6/ic-ui-kit/commit/8db7cb9ca43b162868b1af2a12564f2b7803be9d)), closes [#2743](https://github.com/mi6/ic-ui-kit/issues/2743)
- **canary-web-components:** update canary css files based on colour/token updates ([5645647](https://github.com/mi6/ic-ui-kit/commit/5645647aeb50feaf802d1156934fb19a322b5dc2))
- **canary-web-components:** update showLoadingIndicator to check this.loadingIndicator exists ([16778a6](https://github.com/mi6/ic-ui-kit/commit/16778a694aecbd84925cd67b5830715f5652a840)), closes [#2789](https://github.com/mi6/ic-ui-kit/issues/2789)
- **canary-web-components:** updated card horizontal border colours to align with dark-mode ([6fc7b92](https://github.com/mi6/ic-ui-kit/commit/6fc7b92ba81f6f0222a06185f20bde665e4ce7a2))

### Features

- **canary-web-components:** added theme prop to ic-data-table ([1c7df06](https://github.com/mi6/ic-ui-kit/commit/1c7df06547c1b26d1b2aa554dcc3f659eb1d23c0))
- **canary-web-components:** adds dark mode theme prop for date components ([a4588fd](https://github.com/mi6/ic-ui-kit/commit/a4588fd435b2649705fcd7ce4c4346fac2135718))
- **canary-web-components:** dark mode ([1ff7629](https://github.com/mi6/ic-ui-kit/commit/1ff76297de3e96bb7a4745cd1124b7c57b3a6448))
- **react:** add dark mode page header story and Cypress test ([bb17dfe](https://github.com/mi6/ic-ui-kit/commit/bb17dfee2ea3ad0ced16a6fc172809b8465d2026)), closes [#1214](https://github.com/mi6/ic-ui-kit/issues/1214)
- **web-components:** add dark mode tokens for page header and add dark mode page header story ([541ce78](https://github.com/mi6/ic-ui-kit/commit/541ce7894c0917cf12689939fc431bbea562818d)), closes [#1214](https://github.com/mi6/ic-ui-kit/issues/1214)

### BREAKING CHANGES

- **canary-web-components:** new theme prop and colour switching
- **canary-web-components:** dark mode
- **canary-web-components:** removed appearance option from loadingOptions and updatingOptions

# [3.0.0-canary.4](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@3.0.0-canary.3...@ukic/canary-web-components@3.0.0-canary.4) (2024-11-14)

### Bug Fixes

- **canary-web-components:** add check to event.key to ensure it exists in date input ([a373b58](https://github.com/mi6/ic-ui-kit/commit/a373b5882752c4e2149f4670293c239ef5695ab5)), closes [#1967](https://github.com/mi6/ic-ui-kit/issues/1967)
- **canary-web-components:** adjust spacing between helper text and input field to match designs ([c190a24](https://github.com/mi6/ic-ui-kit/commit/c190a245d646e69a8dc1b74bb8b292c912a66ea1)), closes [#2301](https://github.com/mi6/ic-ui-kit/issues/2301)
- **canary-web-components:** fixes truncation of tree items ([add24b7](https://github.com/mi6/ic-ui-kit/commit/add24b77f1ac94bba36db87a81e17b506570211b))
- **canary-web-components:** fixes version in package-lock ([6e0426f](https://github.com/mi6/ic-ui-kit/commit/6e0426f1114e23fb354d4b9bf8a3a441f398c0fb))

### Features

- **canary-web-components:** add pagination styles to pagination bar with theme prop ([267b821](https://github.com/mi6/ic-ui-kit/commit/267b8212f4fbf5af4e81a1567e9bf2eddc1a930e))
- **canary-web-components:** added theme prop to ic-card-horizontal ([2972e07](https://github.com/mi6/ic-ui-kit/commit/2972e0787ed960eb357325f649cd45efb9bc5902))
- **canary-web-components:** implements column header truncation ([d33da48](https://github.com/mi6/ic-ui-kit/commit/d33da48213cd9c68e15434f6fd3e7ab8592243a4))
- **canary-web-components:** remove appearance prop and add theme prop to tree view ([84f69d0](https://github.com/mi6/ic-ui-kit/commit/84f69d0ce48b4442f5a0191416595c8937b2aaa8))

### BREAKING CHANGES

- **canary-web-components:** adding new theme prop
- **canary-web-components:** Increase the size of the component overall

# [3.0.0-canary.3](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@3.0.0-canary.2...@ukic/canary-web-components@3.0.0-canary.3) (2024-10-31)

### Bug Fixes

- **canary-web-components:** fixes tooltip display issue in data-table ([462ec4f](https://github.com/mi6/ic-ui-kit/commit/462ec4fb416a42d31150f3d8c11d99baeee2a7cf))
- **canary-web-components:** update tree view with heading and expanded improvements ([b821d10](https://github.com/mi6/ic-ui-kit/commit/b821d10c845dfb94b1824fb15a63a047ad7bc4c5))

### Features

- **canary-web-components:** add focus inset prop to tree view items ([37d969d](https://github.com/mi6/ic-ui-kit/commit/37d969d959bb19f378e6ad6518611260475076bb))
- **canary-web-components:** added new hidelabel prop ([23067fa](https://github.com/mi6/ic-ui-kit/commit/23067fa0fcf043639b469164ba7c3022f535cbcd))
- **canary-web-components:** implement hideAllFromItemsPerPage & remove limit on itemsPerPage opts ([d338294](https://github.com/mi6/ic-ui-kit/commit/d338294cbd688c923f16c9e17c4ed7315c281cd5)), closes [#1950](https://github.com/mi6/ic-ui-kit/issues/1950)
- **canary-web-components:** remove all multi-select files (moved to core package) ([39431bd](https://github.com/mi6/ic-ui-kit/commit/39431bd397548750f08fa0c827c07e7f74e7d48d))
- **react:** update Cypress visual regression test baseline images ([f8c044f](https://github.com/mi6/ic-ui-kit/commit/f8c044f946fffa17f490bd5bf6477bf0f4fdeb08))

### Performance Improvements

- **canary-web-components:** add the ability to change between themes in Storybook toolbar ([6a40ac1](https://github.com/mi6/ic-ui-kit/commit/6a40ac12b84251505bcf66470505b239e3384196))

# [3.0.0-canary.2](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@3.0.0-canary.1...@ukic/canary-web-components@3.0.0-canary.2) (2024-10-17)

### Bug Fixes

- **canary-web-components:** fixes data-table column width example ([5d19758](https://github.com/mi6/ic-ui-kit/commit/5d1975839d30486669140e57b34f8a141ee8f273))
- **canary-web-components:** fixes issue with icons in datatable ([25be337](https://github.com/mi6/ic-ui-kit/commit/25be3370412c9ece108c1e55187a2f1bca083416))
- **canary-web-components:** fixes tooltips being hidden in datatables ([38d9383](https://github.com/mi6/ic-ui-kit/commit/38d938359b2ea9fe345b0cb0f7fc1addf10fd92c))
- **canary-web-components:** updated breakpoint for data-table ([1c38cea](https://github.com/mi6/ic-ui-kit/commit/1c38cea311219124d663b8dad18d471da5fe8447))

### Features

- **canary-web-components:** added monochrome option to loading indicator options in ic-data-table ([bf29ea1](https://github.com/mi6/ic-ui-kit/commit/bf29ea1fcd6abdb650f52ab7930622d1254fb669))
- **canary-web-components:** adds currentPage prop to pagination bar ([14f985b](https://github.com/mi6/ic-ui-kit/commit/14f985bb3a9cdb1f371c1fd32d2997461c4e5985))
- **canary-web-components:** update existing CSS tokens after the renaming of global tokens ([9dfb23d](https://github.com/mi6/ic-ui-kit/commit/9dfb23daa31262d82e2620b5e439ca2d78b4cc19)), closes [#2466](https://github.com/mi6/ic-ui-kit/issues/2466) [#1214](https://github.com/mi6/ic-ui-kit/issues/1214)

### BREAKING CHANGES

- **canary-web-components:** Rename some of the existing CSS tokens following the move towards primitive, semantic and component tokens

# 3.0.0-canary.1 (2024-10-04)

### Bug Fixes

- **canary-web-components:** dont generate timestamp in stencil ([ae07d9d](https://github.com/mi6/ic-ui-kit/commit/ae07d9d5c655024da0b0ce7cdc1eb5c31ecaadf3))
- **canary-web-components:** ensures that slotted columns now render data in correct order ([264f247](https://github.com/mi6/ic-ui-kit/commit/264f247dc8a0f40e59484c346f0b57e2e5bb366a))
- **canary-web-components:** reapply truncation data on sort ([a0d472b](https://github.com/mi6/ic-ui-kit/commit/a0d472b2771f2ac83b942787c01dfaf8dc9304a4))
- **canary-web-components:** update data table prop description to have spaces ([718fa55](https://github.com/mi6/ic-ui-kit/commit/718fa5503a94c0c3fc6c52cff66192cfb7c723a9))

### Code Refactoring

- **canary-web-components:** size prop changed ([2f24a63](https://github.com/mi6/ic-ui-kit/commit/2f24a63e256a06748874cf1a2043746ac73c5df4))

### Features

- **canary-web-components:** add invalidDateMessage prop to date input and date picker ([6ab5d5f](https://github.com/mi6/ic-ui-kit/commit/6ab5d5f575e05e93724280ff4701e6bc0120b849)), closes [#2248](https://github.com/mi6/ic-ui-kit/issues/2248)
- **canary-web-components:** added data table column width functionality ([cb8d8e0](https://github.com/mi6/ic-ui-kit/commit/cb8d8e005cf994a7cbd752627a24ef552b67dfee)), closes [#1005](https://github.com/mi6/ic-ui-kit/issues/1005)
- **canary-web-components:** delete old visual test screenshots, accessibility tests and E2E tests ([d19b572](https://github.com/mi6/ic-ui-kit/commit/d19b5721baa2d19fdb59ef6ac009f5d830ea8ef2))
- **canary-web-components:** exported missing types for data tables ([195c211](https://github.com/mi6/ic-ui-kit/commit/195c211430a0e402527dd2bc8bc1a9b3c23a1991))
- **canary-web-components:** fixes colors after typography color token change ([5d2b554](https://github.com/mi6/ic-ui-kit/commit/5d2b554a857660c11e6b791c94316f6eb4f27faa))
- **canary-web-components:** update sort on data tables to emit event ([9ff601c](https://github.com/mi6/ic-ui-kit/commit/9ff601c142a8a988049660767e17eaa9290a5042)), closes [#2179](https://github.com/mi6/ic-ui-kit/issues/2179)

### BREAKING CHANGES

- **canary-web-components:** prop change

# [2.0.0-canary.23](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.22...@ukic/canary-web-components@2.0.0-canary.23) (2024-08-28)

### Code Refactoring

- **canary-web-components:** class names on host of date picker, and multi select updated ([3283416](https://github.com/mi6/ic-ui-kit/commit/3283416e65a186f0931b381acd497971199f1a7f)), closes [#1156](https://github.com/mi6/ic-ui-kit/issues/1156)
- **canary-web-components:** remove form attributes from multi select ([b1a496b](https://github.com/mi6/ic-ui-kit/commit/b1a496b89d7b3e41393a10b17c600fdb44dd5f62)), closes [#2000](https://github.com/mi6/ic-ui-kit/issues/2000)

### Features

- **canary-web-components:** remove deprecated props ([759eac6](https://github.com/mi6/ic-ui-kit/commit/759eac67089a679caeb57e0b976e64e49446be94)), closes [#230](https://github.com/mi6/ic-ui-kit/issues/230)
- **canary-web-components:** update multi select to match v3 prop name changes ([548ff98](https://github.com/mi6/ic-ui-kit/commit/548ff98519a703e7e77e24db7a92e58d89a9af37))

### BREAKING CHANGES

- **canary-web-components:** Props formaction, formenctype, formmethod, formnovalidate and formtarget removed
  from multi select
- **canary-web-components:** Deprecated props have been removed. This affects ic-menu and ic-select.
- **canary-web-components:** Class names on host of date picker and multi select updated to include component
  name e.g. disabled updated to ic-select-disabled. Should only affect tests searching for class names
- **canary-web-components:** Multi select disable filter prop renamed to disable auto filtering

# [2.0.0-canary.22](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.21...@ukic/canary-web-components@2.0.0-canary.22) (2024-08-21)

### Bug Fixes

- **canary-web-components:** updating table-container styling ([fa2082c](https://github.com/mi6/ic-ui-kit/commit/fa2082c8b099e07e9f80e8fc0be201fc00b41cfe))

### Features

- **canary-web-components:** add hideHelperText to date input and date picker ([a02a31f](https://github.com/mi6/ic-ui-kit/commit/a02a31f6280b84739548b4e32c046d83a7ab39ec)), closes [#1728](https://github.com/mi6/ic-ui-kit/issues/1728)
- **canary-web-components:** built truncation and text wrap functionality ([280dead](https://github.com/mi6/ic-ui-kit/commit/280dead0a7abe2a2e479efa811b116976ae6d756)), closes [#1003](https://github.com/mi6/ic-ui-kit/issues/1003)
- **canary-web-components:** implement tree view component ([de2d450](https://github.com/mi6/ic-ui-kit/commit/de2d45061ad76f7b16fbb1697c14d0c1a2df6e3a)), closes [#758](https://github.com/mi6/ic-ui-kit/issues/758)

# [2.0.0-canary.21](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.20...@ukic/canary-web-components@2.0.0-canary.21) (2024-08-07)

### Bug Fixes

- **canary-web-components:** fixes changing startOfWeek prop after load ([28ff2e7](https://github.com/mi6/ic-ui-kit/commit/28ff2e716ae2ee5123abf1cb4eaddd06d3575055))

### Features

- **canary-web-components:** implement horizontal card component ([f30265d](https://github.com/mi6/ic-ui-kit/commit/f30265d283d25d3ee71c3f1ec9afe2d7028d86fc)), closes [#1025](https://github.com/mi6/ic-ui-kit/issues/1025)

# [2.0.0-canary.20](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.19...@ukic/canary-web-components@2.0.0-canary.20) (2024-07-24)

### Bug Fixes

- **canary-web-components:** reword misspelled words ([97ab9e7](https://github.com/mi6/ic-ui-kit/commit/97ab9e7566436f855597115094556f2c7e08ed22))

# [2.0.0-canary.19](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.18...@ukic/canary-web-components@2.0.0-canary.19) (2024-07-10)

### Bug Fixes

- **canary-web-components:** fixes focus and accessibility issues ([9728589](https://github.com/mi6/ic-ui-kit/commit/9728589f212cd6a39cb461d401a06f219b0bf8cb))

# [2.0.0-canary.18](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.17...@ukic/canary-web-components@2.0.0-canary.18) (2024-06-27)

### Features

- **canary-web-components:** added slot for pagination bar to ic-data-table ([d2da54f](https://github.com/mi6/ic-ui-kit/commit/d2da54f74186c6c2e0a9387b778ee464434391c8))

# [2.0.0-canary.17](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.16...@ukic/canary-web-components@2.0.0-canary.17) (2024-06-12)

**Note:** Version bump only for package @ukic/canary-web-components

# [2.0.0-canary.16](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.15...@ukic/canary-web-components@2.0.0-canary.16) (2024-05-29)

### Bug Fixes

- **canary-web-components:** fixes issue with SlottedSVG not appearing in data table cell ([dd7da6f](https://github.com/mi6/ic-ui-kit/commit/dd7da6f7c80c431527148a43b45c13ae5f88bef8))
- **canary-web-components:** fixes passing of props from data table to pagination bar ([bdebf84](https://github.com/mi6/ic-ui-kit/commit/bdebf8439207130819bc8a2eadb7966a2e6686b2))

# [2.0.0-canary.15](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.14...@ukic/canary-web-components@2.0.0-canary.15) (2024-05-15)

### Features

- **canary-web-components:** adds enhanced keyboard support to multi-select ([f1f5bbb](https://github.com/mi6/ic-ui-kit/commit/f1f5bbb660b12ddb8df70db7b43b59922d66bd49))
- **canary-web-components:** new data table functionality ([a342661](https://github.com/mi6/ic-ui-kit/commit/a342661f52914adedebded8389328cd638cf2d01))
- **canary-web-components:** pagination bar fixes and props rename ([78c2334](https://github.com/mi6/ic-ui-kit/commit/78c2334bdec5eb5894610b9a288744a156b6f456))

### BREAKING CHANGES

- **canary-web-components:** props name changes itemLabel > rangeItemLabel, labelType > rangeLabelType, hideItemsPerPageLabel > hideRangeLabel
- **canary-web-components:** Updated ic-pagination-bar props to align with ic-pagination
  props. Additional updates to ic-pagination-bar to use ic-pagination
  types

# [2.0.0-canary.14](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.13...@ukic/canary-web-components@2.0.0-canary.14) (2024-05-01)

### Bug Fixes

- **canary-web-components:** date input helper text returns to default ([c9a25e9](https://github.com/mi6/ic-ui-kit/commit/c9a25e948451b8c9334428037323d201649eba5b))
- **canary-web-components:** make focus indicator in data-input more specific ([d12c8a4](https://github.com/mi6/ic-ui-kit/commit/d12c8a4c48a4899d498e0638d328ff0582e83fd3))

# [2.0.0-canary.13](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.12...@ukic/canary-web-components@2.0.0-canary.13) (2024-04-17)

### Bug Fixes

- **canary-web-components:** version bump ([9b2cad1](https://github.com/mi6/ic-ui-kit/commit/9b2cad1f1d4d40eefbc3ca3b9a3371165e882818))

# [2.0.0-canary.12](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.11...@ukic/canary-web-components@2.0.0-canary.12) (2024-04-17)

### Bug Fixes

- **canary-web-components:** fixes props not updating ([b71566b](https://github.com/mi6/ic-ui-kit/commit/b71566b8651354e58df03c9e991f7b436387d9a5))
- **canary-web-components:** fixes required prop change not updating label ([510f2fa](https://github.com/mi6/ic-ui-kit/commit/510f2fadb00a8a6ac8b863864f8747838705e49b))

# [2.0.0-canary.11](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.10...@ukic/canary-web-components@2.0.0-canary.11) (2024-04-08)

### Bug Fixes

- **canary-web-components:** improves emitting of icchange event ([73f6c44](https://github.com/mi6/ic-ui-kit/commit/73f6c44b0c4fa10a6524cad73a96f0bbe6c7eb9e))

### Features

- **canary-web-components:** add helper function for testing that waits for component hydration ([e4afb84](https://github.com/mi6/ic-ui-kit/commit/e4afb84f1117e79ea1b8930bed193c74b80c679b)), closes [#293](https://github.com/mi6/ic-ui-kit/issues/293)

# [2.0.0-canary.10](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.9...@ukic/canary-web-components@2.0.0-canary.10) (2024-03-28)

### Bug Fixes

- **canary-web-components:** fixes issues with icChange event ([ccd8725](https://github.com/mi6/ic-ui-kit/commit/ccd87259cd0d1a359d75b55bf29aa935fad1a85d))

# [2.0.0-canary.9](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.8...@ukic/canary-web-components@2.0.0-canary.9) (2024-03-26)

### Bug Fixes

- **canary-web-components:** update date input calendar and clear to update appearance ([7b93a51](https://github.com/mi6/ic-ui-kit/commit/7b93a519a1c4dfdbaca7d08ba5c6e287000529bc))
- **canary-web-components:** updated date input action buttons ([e8e8a96](https://github.com/mi6/ic-ui-kit/commit/e8e8a96607198ad073262f825823214d5999974c))

### Features

- **canary-web-components:** adds canary datepicker component ([bf4bf5f](https://github.com/mi6/ic-ui-kit/commit/bf4bf5f9dee0e66cdc3cf231644e6a25ee6d4e0d))
- **canary-web-components:** date input implementation ([3803830](https://github.com/mi6/ic-ui-kit/commit/38038303dbb00da11cc3036394e6cdfe25f19b43)), closes [#1364](https://github.com/mi6/ic-ui-kit/issues/1364)
- **web-components:** updated core components for date input implementation ([a0fdff2](https://github.com/mi6/ic-ui-kit/commit/a0fdff2deee2a85b650379a8f509c46c5b07bede))

# [2.0.0-canary.8](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.7...@ukic/canary-web-components@2.0.0-canary.8) (2024-03-20)

### Bug Fixes

- **canary-web-components:** improve screen reader behaviour for multi-select ([4b6db0c](https://github.com/mi6/ic-ui-kit/commit/4b6db0c65b77da316b4339a1b95208352dd10cae)), closes [.#257](https://github.com/./issues/257)

### Features

- **canary-web-components:** add multi-select variant to the ic-select ([66bf9d9](https://github.com/mi6/ic-ui-kit/commit/66bf9d95776d877c278c9f12c98b644e93175d6e)), closes [.#257](https://github.com/./issues/257)
- **canary-web-components:** referencing styling from core web-components package ([9d835e3](https://github.com/mi6/ic-ui-kit/commit/9d835e3a8417900ae635044057cc5c9f5d86140e))
- **canary-web-components:** renamed getting started page and added to top of stories list ([fccf365](https://github.com/mi6/ic-ui-kit/commit/fccf3654901bedca2f06a7207788ef2daaa062d1))

# [2.0.0-canary.7](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.6...@ukic/canary-web-components@2.0.0-canary.7) (2024-02-29)

**Note:** Version bump only for package @ukic/canary-web-components

# [2.0.0-canary.6](https://github.com/mi6/ic-ui-kit/compare/@ukic/canary-web-components@2.0.0-canary.5...@ukic/canary-web-components@2.0.0-canary.6) (2024-02-21)

**Note:** Version bump only for package @ukic/canary-web-components

# 2.0.0-canary.5 (2024-02-07)

### Bug Fixes

- **canary-web-components:** remove stencil index file ([c132a06](https://github.com/mi6/ic-ui-kit/commit/c132a069a31ce13ea7dfdb17d4ed5a3d905a4078))
- **canary-web-components:** updating github markdown css file ([8165ce5](https://github.com/mi6/ic-ui-kit/commit/8165ce5df2e4c7a8b1991d5a7e87c505df942e98))

### Features

- **canary-web-components:** canary-web-components package integration ([012e267](https://github.com/mi6/ic-ui-kit/commit/012e267db3a46a37874bb07ce7ade4d55a7925b3)), closes [#1264](https://github.com/mi6/ic-ui-kit/issues/1264)
- **canary-web-components:** update canary web-components storybook to v7.6.10 ([855e747](https://github.com/mi6/ic-ui-kit/commit/855e74756fe982e7a7f20609686478ee86b03931))
- **web-components:** updated web-components to include props required for canary components ([a957b05](https://github.com/mi6/ic-ui-kit/commit/a957b056335e3d0cd3129fa24c91e30ec9ca0780))
- **web-components:** updated web-components to include props required for canary components ([04ba22a](https://github.com/mi6/ic-ui-kit/commit/04ba22a29a6c61701110ab1f0439e0416f845502))

# 2.0.0-canary.4 (2024-01-25)

### Bug Fixes

- **canary-web-components:** remove stencil index file ([c132a06](https://github.com/mi6/ic-ui-kit/commit/c132a069a31ce13ea7dfdb17d4ed5a3d905a4078))
- **canary-web-components:** updating github markdown css file ([8165ce5](https://github.com/mi6/ic-ui-kit/commit/8165ce5df2e4c7a8b1991d5a7e87c505df942e98))

### Features

- **canary-web-components:** canary-web-components package integration ([012e267](https://github.com/mi6/ic-ui-kit/commit/012e267db3a46a37874bb07ce7ade4d55a7925b3)), closes [#1264](https://github.com/mi6/ic-ui-kit/issues/1264)
- **web-components:** updated web-components to include props required for canary components ([a957b05](https://github.com/mi6/ic-ui-kit/commit/a957b056335e3d0cd3129fa24c91e30ec9ca0780))
- **web-components:** updated web-components to include props required for canary components ([04ba22a](https://github.com/mi6/ic-ui-kit/commit/04ba22a29a6c61701110ab1f0439e0416f845502))

# [2.0.0-canary.3](https://github.com/mi6/ic-ui-kit/compare/v2.0.0-canary.2...v2.0.0-canary.3) (2023-09-22)

**Note:** Version bump only for package @ukic/canary-web-components

# [2.0.0-canary.2](https://github.com/mi6/ic-ui-kit/compare/v2.0.0-canary.1...v2.0.0-canary.2) (2023-09-21)

**Note:** Version bump only for package @ukic/canary-web-components
