# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
