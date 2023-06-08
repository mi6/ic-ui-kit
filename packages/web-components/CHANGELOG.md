# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0-beta.15](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.14...v2.1.0-beta.15) (2023-06-05)

### Bug Fixes

* **web-components:** add aria-hidden to see more/see less typography ([4e439fd](https://github.com/mi6/ic-ui-kit/commit/4e439fdef16ab4059dd17e3fedee730cfc6084d3)), closes [#712](https://github.com/mi6/ic-ui-kit/issues/712)
* **web-components:** add condition to menu item aria label so it doesn't read undefined menu group ([c16c9ce](https://github.com/mi6/ic-ui-kit/commit/c16c9ce6d34ee4cdb14b42fb3e45749c1901dd91)), closes [#656](https://github.com/mi6/ic-ui-kit/issues/656)
* **web-components:** added stopImmediatePropagation to icTabSelect ([e25e104](https://github.com/mi6/ic-ui-kit/commit/e25e10413d6f513a77a004606b4f6fcf1b149123))
* **web-components:** changes ic-search-bar animation to match ic-select behaviour ([b9cbe76](https://github.com/mi6/ic-ui-kit/commit/b9cbe76fa0f0a4d4b7e592d0bed4e57b0da4ef99))
* **web-components:** fixed build issue ([ff403a1](https://github.com/mi6/ic-ui-kit/commit/ff403a109083ce8e389511cc1be5b22c72f633c1))
* **web-components:** fixed focus behaviour on blurring of menu for ic-select ([232feb4](https://github.com/mi6/ic-ui-kit/commit/232feb4ce2d6be0bfa5b6245b3931499a88b2579))
* **web-components:** replaced box-shadow for page-header selected nav item ([a58ada3](https://github.com/mi6/ic-ui-kit/commit/a58ada3058fdd83fe891733201769f193da8708a))
* **web-components:** variables changed ([c693f7c](https://github.com/mi6/ic-ui-kit/commit/c693f7c500e05a2500ba8facbf1d392a0eb6fd7a))

### Features

* **web-components:** adds method to set current page to pagination ([dec30f7](https://github.com/mi6/ic-ui-kit/commit/dec30f71cba286d1e1e3e855d347127dbe16c46e))
* **web-components:** truncation ([d9f9166](https://github.com/mi6/ic-ui-kit/commit/d9f916613d9865c272dd9b7112f40ff4b16c78ad))

# [2.1.0-beta.14](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.13...v2.1.0-beta.14) (2023-05-17)

### Bug Fixes

- **web-components:** conditionally render divs for footer logos and caption ([3c0e765](https://github.com/mi6/ic-ui-kit/commit/3c0e76559c13da1945733aca2d04f207d5e43d06))
- **web-components:** moved transform scale from button to svg ([a756924](https://github.com/mi6/ic-ui-kit/commit/a75692452c48c1ae4e2bc056a95d5f3316f72ed0))

# [2.1.0-beta.13](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.12...v2.1.0-beta.13) (2023-05-16)

### Bug Fixes

- **web-components:** add flex-shrink 0 to checkbox and svgs, and align checkbox label ([252079d](https://github.com/mi6/ic-ui-kit/commit/252079d2f181299eb6ed51bc96b7f58535a86d9a)), closes [#659](https://github.com/mi6/ic-ui-kit/issues/659)
- **web-components:** add min-width css custom prop to button with fallback of original min-width ([814c80e](https://github.com/mi6/ic-ui-kit/commit/814c80e87df40a1064fad6aa2d0ed4df17d1c5cc)), closes [#613](https://github.com/mi6/ic-ui-kit/issues/613)
- **web-components:** changes ic-search-bar animation to match ic-select behaviour ([a80abe3](https://github.com/mi6/ic-ui-kit/commit/a80abe32a256102b2c6841a842c0235b9af19bf1))
- **web-components:** fixed focusing of select on menu close ([ec5d812](https://github.com/mi6/ic-ui-kit/commit/ec5d8128891e4b6c540b2e140e9c8a62ae92c9d5))
- **web-components:** fixes space bar bug in ic-menu ([fad6ade](https://github.com/mi6/ic-ui-kit/commit/fad6ade7ae4a31f862410d7b2805af6e0a560f04))
- **web-components:** ic-card will always have interaction section placed at the bottom ([8c446ae](https://github.com/mi6/ic-ui-kit/commit/8c446aec5ab8205ef438468796afc0bf3bd95f3d)), closes [#528](https://github.com/mi6/ic-ui-kit/issues/528)
- **web-components:** return out of onBlur for select if scrollbar/group title is clicked ([07da6d6](https://github.com/mi6/ic-ui-kit/commit/07da6d6b6277470faf107febc476972f512d504a)), closes [#596](https://github.com/mi6/ic-ui-kit/issues/596)
- **web-components:** update type of min and max on text field to be consistent with native input ([70e2bb9](https://github.com/mi6/ic-ui-kit/commit/70e2bb93068c7305805fd3d4716808225767ab09)), closes [#677](https://github.com/mi6/ic-ui-kit/issues/677)
- **web-components:** update typography visual tests ([8a907eb](https://github.com/mi6/ic-ui-kit/commit/8a907eb1fe96e665df8a98d2458064e1bfa11853)), closes [#601](https://github.com/mi6/ic-ui-kit/issues/601)
- **web-components:** updated aria-hidden on mobile menu button ([25d4d00](https://github.com/mi6/ic-ui-kit/commit/25d4d00b3de20dfc5e7641cef40890de0fbe9a92))
- **web-components:** updated select searchable to update emitted events ([2f484a6](https://github.com/mi6/ic-ui-kit/commit/2f484a641a718301c7d9c66713b548bbb0bfd411))
- **web-components:** updating blur functionality on ic-menu ([8cdc83f](https://github.com/mi6/ic-ui-kit/commit/8cdc83f30e3653c7d9436d3eddffc32a6a9cd060))

### Features

- **web-components:** add internal prop to allow for validation without text or icon ([6aa58ab](https://github.com/mi6/ic-ui-kit/commit/6aa58ab6d44cf2e1b0a88144cb604176cd394e12)), closes [#612](https://github.com/mi6/ic-ui-kit/issues/612)
- **web-components:** added loading state ([cbe329d](https://github.com/mi6/ic-ui-kit/commit/cbe329d299124a54ab1bf679b7a9764796bd755b))
- **web-components:** added public method to change tooltip display ([fb162b7](https://github.com/mi6/ic-ui-kit/commit/fb162b74832fc5d031f9c79c7c61320f960d24c8))
- **web-components:** allow text for app status and version number to wrap in side nav ([ac9d6d7](https://github.com/mi6/ic-ui-kit/commit/ac9d6d7b6aba76d9ed71ae547cd21376e6603469)), closes [#550](https://github.com/mi6/ic-ui-kit/issues/550)
- **web-components:** changed event.detail for ic-checkbox icChange ([b52261d](https://github.com/mi6/ic-ui-kit/commit/b52261d12b9e3162bd583b1e1f3c44036eaf6f9e))
- **web-components:** ic-pagination and ic-pagination-item created ([3f3658d](https://github.com/mi6/ic-ui-kit/commit/3f3658dc0f4e2cca4831d7ab0c5c902f49f84959))

# [2.1.0-beta.12](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.11...v2.1.0-beta.12) (2023-05-03)

### Bug Fixes

- **web-components:** add code typography tokens ([8a7c423](https://github.com/mi6/ic-ui-kit/commit/8a7c42374399cca4a4c4465cc9681d4c9f02c41c)), closes [#544](https://github.com/mi6/ic-ui-kit/issues/544)
- **web-components:** add flex-wrap CSS styling to interaction controls slot in ic-card ([610e80c](https://github.com/mi6/ic-ui-kit/commit/610e80c43ec35b6a43a22d4b4ecedc9d4b7bbfe9)), closes [#529](https://github.com/mi6/ic-ui-kit/issues/529)
- **web-components:** add overlay to pages when top navigation pop out menu is open ([28726b7](https://github.com/mi6/ic-ui-kit/commit/28726b776811174475d204760baa135495d956ab))
- **web-components:** added functionality to deal with tab/tab panels which have been removed ([34bc5e7](https://github.com/mi6/ic-ui-kit/commit/34bc5e78b07e7634b9c73afefc1c70dfff48cfed))
- **web-components:** added functionality to link tabs when added programatically ([e08fda8](https://github.com/mi6/ic-ui-kit/commit/e08fda892175d1abccfd326905913b0b6acdeec3))
- **web-components:** added wrap to interaction-container to stack buttons zoomed in ([3cf4d66](https://github.com/mi6/ic-ui-kit/commit/3cf4d664a9d2bb41d168e999a805bbe83d0d9a47))
- **web-components:** fix failing visual regression tests ([0136c51](https://github.com/mi6/ic-ui-kit/commit/0136c51c0f6d98f394d964c9416b08101c8ca13e))
- **web-components:** fix-auto-fill-ic-select-prettier ([0572594](https://github.com/mi6/ic-ui-kit/commit/0572594756122626529d730bf5b58d1fc575e1df))
- **web-components:** fixed boolean css properties ([676c7e5](https://github.com/mi6/ic-ui-kit/commit/676c7e5f315c3fbeb340241a9a7f51565d68c4cf))
- **web-components:** fixed closing of popover menu ([60c5602](https://github.com/mi6/ic-ui-kit/commit/60c56022694db615ebe0e36f108601a541798cc7))
- **web-components:** fixes tooltips on side navigation items ([fb120c0](https://github.com/mi6/ic-ui-kit/commit/fb120c09a7ad15b9bc7a3f77fc85c587c1932ffe))
- **web-components:** fixes warnings and errors in unit tests ([5dee579](https://github.com/mi6/ic-ui-kit/commit/5dee57969d6e1af0d9a870034d764c119a58c76c))
- **web-components:** removed initialRender ([09e6cac](https://github.com/mi6/ic-ui-kit/commit/09e6cac9590e87815f9161ffa589c9805be33240))
- **web-components:** removed negative left margin in app title container ([e2f50b5](https://github.com/mi6/ic-ui-kit/commit/e2f50b537637bc10b769a64afe560dee1a1e764d))
- **web-components:** update border radius of chips and status tags, and update padding of status tag ([bada834](https://github.com/mi6/ic-ui-kit/commit/bada8347a5bee86dba90430fddf3a87c49b286eb)), closes [#332](https://github.com/mi6/ic-ui-kit/issues/332)
- **web-components:** update navigation buttons to have 100% height ([1c42a20](https://github.com/mi6/ic-ui-kit/commit/1c42a205495b84ad0f3b8150668f2fce0fe17ff4)), closes [#598](https://github.com/mi6/ic-ui-kit/issues/598)
- **web-components:** update status and version tags in top nav to wrap ([af7ee95](https://github.com/mi6/ic-ui-kit/commit/af7ee95aa20d9e6ac82a8ede8329e41ee527bda3)), closes [#573](https://github.com/mi6/ic-ui-kit/issues/573)
- **web-components:** updated alert.css file ([37c533c](https://github.com/mi6/ic-ui-kit/commit/37c533ca06a3a7af78e56300d145f20484fa3a42))
- **web-components:** updated tabs to pass down context-id ([265c62d](https://github.com/mi6/ic-ui-kit/commit/265c62df5353da376a03f8960d56fceb2cd91c01))

### Features

- **web-components:** add form attributes to button ([1cd8a0f](https://github.com/mi6/ic-ui-kit/commit/1cd8a0f1d5c8ed34177dd6a50cea64f6646a2edb))
- **web-components:** add min/max to TextField ([8ac928f](https://github.com/mi6/ic-ui-kit/commit/8ac928fca275d8666ae3895bf6b9b013c5e09e97))

# [2.1.0-beta.11](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.10...v2.1.0-beta.11) (2023-04-12)

### Bug Fixes

- **web-components:** add support query for hover/focus of links ([416f185](https://github.com/mi6/ic-ui-kit/commit/416f18567ab2383b51d6bd22ed67f9e1ebee138c)), closes [#508](https://github.com/mi6/ic-ui-kit/issues/508)
- **web-components:** adds z-index value for toasts ([e5ef9e8](https://github.com/mi6/ic-ui-kit/commit/e5ef9e82eb7043182a809c978c05423c97915c66))
- **web-components:** deprecate charactersUntilSuggestions prop for select and remove stories/tests ([6621255](https://github.com/mi6/ic-ui-kit/commit/66212558f8ec636ea7cf08da1cebd364a975f0bf))
- **web-components:** fixes changing disable prop ([1c161aa](https://github.com/mi6/ic-ui-kit/commit/1c161aa9738a2ca0f35f740888ac5bac834b9b37))
- **web-components:** fixes console errors ([c4ffd17](https://github.com/mi6/ic-ui-kit/commit/c4ffd1798353a52b572a06db4fad69b239126618))
- **web-components:** moved slotted navigation method to set menu items to visible on expanded ([22f25a3](https://github.com/mi6/ic-ui-kit/commit/22f25a3a05b28365aea360227e3ccb782edf22c4))
- **web-components:** removed shadow DOM from ic-menu for a11y fixes ([7b02fa3](https://github.com/mi6/ic-ui-kit/commit/7b02fa341d3b3bc375f2c1ed4e4262a6cd8c388f))
- **web-components:** update popover to use display none instead of opacity 0 ([88d4cc1](https://github.com/mi6/ic-ui-kit/commit/88d4cc10a3921a8a3d508e53b9659a6945e1ce74))

### Features

- **web-components:** add menu item and menu group sub components for new popover menu component ([6346a51](https://github.com/mi6/ic-ui-kit/commit/6346a51303a880fa6fc09f9459fe0e14b36de2cb)), closes [#258](https://github.com/mi6/ic-ui-kit/issues/258) [#433](https://github.com/mi6/ic-ui-kit/issues/433) [#434](https://github.com/mi6/ic-ui-kit/issues/434)
- **web-components:** create popover menu component ([587445f](https://github.com/mi6/ic-ui-kit/commit/587445f8a912ff3e3768fda6428873054de9b39c)), closes [#434](https://github.com/mi6/ic-ui-kit/issues/434)
- **web-components:** show external icon for links when target="\_blank" ([a86f1c4](https://github.com/mi6/ic-ui-kit/commit/a86f1c49dace06013324eb776a844db1d28cd513)), closes [#512](https://github.com/mi6/ic-ui-kit/issues/512)

# [2.1.0-beta.10](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.9...v2.1.0-beta.10) (2023-03-28)

### Bug Fixes

- **web-components:** add check to search isSubmitDisabled for if the value length is too low ([436614e](https://github.com/mi6/ic-ui-kit/commit/436614eed34e74ad79c959e96bc138e0fd08678f)), closes [#363](https://github.com/mi6/ic-ui-kit/issues/363)
- **web-components:** fixes icChange emitting on every menu item selection ([6d20f8d](https://github.com/mi6/ic-ui-kit/commit/6d20f8dd1b83ab75f37dbb7a631f9d5014633075))
- **web-components:** moved scroll bar calculations to componentDidRender ([be33827](https://github.com/mi6/ic-ui-kit/commit/be338273ae4c5b3602c5cf4f57bea87e08d36a13))
- **web-components:** updated default value functionality ([e24a945](https://github.com/mi6/ic-ui-kit/commit/e24a94584c1a7a7dd2ccf6ae9942c244c3240ccc))

### Features

- **web-components:** add new window icon to navigation item ([791e8ca](https://github.com/mi6/ic-ui-kit/commit/791e8ca1c76e3846010f76cc1fbc38dd37afae53))
- **web-components:** add open in new window functionality and icon to footer link ([cb36abe](https://github.com/mi6/ic-ui-kit/commit/cb36abe5b1de7e5cb0710f5bf3e95538613cfcab))
- **web-components:** add quick keyboard navigation to select - selects option based on characters ([3d3927d](https://github.com/mi6/ic-ui-kit/commit/3d3927d62ae2a0aaca391dc88f00013baf51dc2d)), closes [.#158](https://github.com/./issues/158)

# [2.1.0-beta.9](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.8...v2.1.0-beta.9) (2023-03-21)

### Bug Fixes

- **web-components:** add handleMouseDown, add css active selector, add spec test for handleMouseDown ([837e336](https://github.com/mi6/ic-ui-kit/commit/837e3366cc33a8a05fa300c1c641fa27cb0f5b7c)), closes [.#213](https://github.com/./issues/213)
- **web-components:** added func to allow default values for searchable variant ([6be8255](https://github.com/mi6/ic-ui-kit/commit/6be82554c1029719d1ec433f98e3b9d49ef45e89))
- **web-components:** fix gap appearing under slotted nav items ([5e37d18](https://github.com/mi6/ic-ui-kit/commit/5e37d181806a98ef91dfb6d2dd5ec0e6b1832f74))
- **web-components:** fixed placement issue in top nav ([95b9402](https://github.com/mi6/ic-ui-kit/commit/95b94027e5581cb0a9d8a13d0d52212ea0f22c27))
- **web-components:** fixes page header z-index issue ([fddbd81](https://github.com/mi6/ic-ui-kit/commit/fddbd81d8bcd633b41b0c820d5ddb056a974dc33))
- **web-components:** fixes z-index on top nav dropdown ([7b5a498](https://github.com/mi6/ic-ui-kit/commit/7b5a4981f9dd39d4f58fad4994070ff50ae9d67c))
- **web-components:** updated content aligned behaviour on top navigation ([3ce50c6](https://github.com/mi6/ic-ui-kit/commit/3ce50c634ce2c839fb22dc4bedacbf6a9e5c7a48))
- **web-components:** updated isEmptyString func to deal with undefined and '' ([3f17a39](https://github.com/mi6/ic-ui-kit/commit/3f17a3993af9e6f35b09576d43c88be8d791113a))
- **web-components:** updated top-navigation e2e test ([b469e65](https://github.com/mi6/ic-ui-kit/commit/b469e656d6871d8d5b512c6105263035b5c3e6a7))
- **web-components:** updates z-index values for components ([80335c6](https://github.com/mi6/ic-ui-kit/commit/80335c60173d0e624fade7905a5b413e04947666))

### Features

- **web-components:** create horizontal scroll component and add to tabs and nav items ([1a88bd2](https://github.com/mi6/ic-ui-kit/commit/1a88bd2a45d41f04fcf9a0ab000617fdef0183aa)), closes [.#242](https://github.com/./issues/242)
- **web-components:** implement toast component ([db455fb](https://github.com/mi6/ic-ui-kit/commit/db455fbb16a4e0415908b909a6d47cafe9f10912))

# [2.1.0-beta.8](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.7...v2.1.0-beta.8) (2023-03-01)

### Bug Fixes

- **web-components:** add width and height to chevron svg ([d731ab4](https://github.com/mi6/ic-ui-kit/commit/d731ab48720d4272a0d5f2477bcb66567ccecbaf)), closes [#444](https://github.com/mi6/ic-ui-kit/issues/444)
- **web-components:** added hidden style to ic-tab-panel ([b547ce8](https://github.com/mi6/ic-ui-kit/commit/b547ce842c301b90fc3ca9d2d8d43223e2543f2f))
- **web-components:** convert px to rem on stepper connect widths ([6af22af](https://github.com/mi6/ic-ui-kit/commit/6af22afba8cef23463019ec3837b32583b16f0fb))
- **web-components:** fix icon slots for button and side nav where svg is wrapped in an element ([41549f9](https://github.com/mi6/ic-ui-kit/commit/41549f9d57f85fa03163ae87b4dd6d1099e51ab7))
- **web-components:** fixed flickering link hovering ([ff522a1](https://github.com/mi6/ic-ui-kit/commit/ff522a126ccb7956045f8e66e9fd4ccd0ebac8f8))
- **web-components:** px changed to rem in .css files ([003f7de](https://github.com/mi6/ic-ui-kit/commit/003f7de52bbdc73ff9c7ab3fa3053d65ed40abc4))
- **web-components:** updated full-width style for select and textfield ([3a91e09](https://github.com/mi6/ic-ui-kit/commit/3a91e099933894fe187e6b60ecfffa6e3325bb47))
- **web-components:** updated side navigation z-index ([e555442](https://github.com/mi6/ic-ui-kit/commit/e555442da0724b567038ced77fc1c81735bc1461)), closes [#322](https://github.com/mi6/ic-ui-kit/issues/322)
- **web-components:** updated styling to fix tooltip positioning ([63ca112](https://github.com/mi6/ic-ui-kit/commit/63ca112a0a59b0a0313b5c094ca74c2a47469bb9))
- **web-components:** using isUsedSlot to remove redundant slot from rendering ([bc0cd1b](https://github.com/mi6/ic-ui-kit/commit/bc0cd1b29a0f5b275b8b874d647971ab86b3d636))

### Features

- **web-components:** add set focus methods and tests ([4dbf9e2](https://github.com/mi6/ic-ui-kit/commit/4dbf9e2ba2c85270ca573eab692f4034e9808db0)), closes [#372](https://github.com/mi6/ic-ui-kit/issues/372)
- **web-components:** add the option for radio buttons to be laid out horizonatally. Run audit fix ([5151a55](https://github.com/mi6/ic-ui-kit/commit/5151a55601a38c86f173bca72f77a159ff69d300)), closes [#177](https://github.com/mi6/ic-ui-kit/issues/177)
- **web-components:** adds support for external filtering of options ([68764bb](https://github.com/mi6/ic-ui-kit/commit/68764bb204bea6929a75a6df0eb302117a536ee8))
- **web-components:** allow for use of router links for top nav app title ([bba0edb](https://github.com/mi6/ic-ui-kit/commit/bba0edbe74b62ef3bcf949ce5a56b16a92033f9c))
- **web-components:** implement slotted link to app title of side nav ([8ae587d](https://github.com/mi6/ic-ui-kit/commit/8ae587dfdbb13813c491b330ce72323270d7816b)), closes [#376](https://github.com/mi6/ic-ui-kit/issues/376)
- **web-components:** removed px height and width from SVG ([c6632c1](https://github.com/mi6/ic-ui-kit/commit/c6632c1399bed0f851ca0ce068b75a6725c17543))

# [2.1.0-beta.7](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.6...v2.1.0-beta.7) (2023-02-13)

### Bug Fixes

- **web-components:** 'Latest announcement' box in ic-hero on xs breakpoint bug ([89cdf42](https://github.com/mi6/ic-ui-kit/commit/89cdf42b89baa86e62527a01354e217b6d39e687))
- **web-components:** change functionality of reverse order prop ([54d26b9](https://github.com/mi6/ic-ui-kit/commit/54d26b98bf4e2e4341ff10e83ae021b67dbcc917)), closes [#354](https://github.com/mi6/ic-ui-kit/issues/354)

# [2.1.0-beta.6](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.5...v2.1.0-beta.6) (2023-02-07)

### Bug Fixes

- **web-components:** add conditional so validation area only shows when needed ([65a1dcf](https://github.com/mi6/ic-ui-kit/commit/65a1dcf39bfc63ada99d2072a5347502a6fc30d4)), closes [#348](https://github.com/mi6/ic-ui-kit/issues/348)
- **web-components:** update chip to use icDismiss event and deprecate current dismiss event ([584420a](https://github.com/mi6/ic-ui-kit/commit/584420a538eabf926b92200ed241394470d50455))

# [2.1.0-beta.5](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.4...v2.1.0-beta.5) (2023-02-02)

### Bug Fixes

- **web-components:** add width: 100% to select and text field host ([b9c655d](https://github.com/mi6/ic-ui-kit/commit/b9c655dacdfc5cad99ff17322f2f353be6637637)), closes [#315](https://github.com/mi6/ic-ui-kit/issues/315)

# [2.1.0-beta.4](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.3...v2.1.0-beta.4) (2023-02-01)

### Bug Fixes

- **web-components:** fix for long single-word app titles on top nav ([62dc911](https://github.com/mi6/ic-ui-kit/commit/62dc911857b6a6dc2bd537a0610a0d7b40cc5b36))
- **web-components:** fix radio button bug by adjusting width and margins ([f8b0128](https://github.com/mi6/ic-ui-kit/commit/f8b0128eff0c631786b526e0369275259168ea4d))
- **web-components:** fixes issues with external filtering in searchbar ([4106363](https://github.com/mi6/ic-ui-kit/commit/4106363fe30caa62482909064fb36d6effd1aa96))
- **web-components:** fixes searchbar debounce prop ([0dd99ae](https://github.com/mi6/ic-ui-kit/commit/0dd99aef64023a675f6707b8221e6ff841cb7f22))
- **web-components:** remove contentinfo role from classification banner ([c2750b3](https://github.com/mi6/ic-ui-kit/commit/c2750b34cc03bee4cb7b06d6337904c57b67558a))

### Features

- **web-components:** announced prop added to ic-status-tag ([23728be](https://github.com/mi6/ic-ui-kit/commit/23728be990f232988fabeddd9866c1a86a8cae74)), closes [#20](https://github.com/mi6/ic-ui-kit/issues/20)
- **web-components:** export normalize.css separately from core.css, updated instructions ([a558daa](https://github.com/mi6/ic-ui-kit/commit/a558daacee2a2c3a0eff58bb1e1f77e5565c942a))
- **web-components:** update card with v2 changes ([556e12f](https://github.com/mi6/ic-ui-kit/commit/556e12f0e092802dce4bb7af9864876095772262))

# [2.1.0-beta.3](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.2...v2.1.0-beta.3) (2023-01-23)

### Bug Fixes

- **web-components:** add aria-hidden to tooltip span ([ed23d40](https://github.com/mi6/ic-ui-kit/commit/ed23d409d93d34e2d5980690bc8578d5d37ba9b8))
- **web-components:** changed colour of expand icon on select ([5b3d4a8](https://github.com/mi6/ic-ui-kit/commit/5b3d4a86d5d2fc0dfb66ee6a1b5b8100300cfb6e))
- **web-components:** fix alignment of text fields in data entity, update storybook examples ([60f7ae9](https://github.com/mi6/ic-ui-kit/commit/60f7ae9d0c251e74f3c50cf9103a2df47b4720b9)), closes [mi6/ic-design-system#128](https://github.com/mi6/ic-design-system/issues/128)
- **web-components:** update menu to be >= so that select is scrollable ([3c1ece2](https://github.com/mi6/ic-ui-kit/commit/3c1ece289546893509d9d86fad706bdecfbdbf85))

### Features

- **web-component:** implement chip component ([93da762](https://github.com/mi6/ic-ui-kit/commit/93da76203da81b291a90e8fa62fb286da58162cd)), closes [#141](https://github.com/mi6/ic-ui-kit/issues/141)
- **web-components:** add inner label into loading indicator so it can be used by the compact step ([084e57d](https://github.com/mi6/ic-ui-kit/commit/084e57dd287cd10e06105b6b6b931139f6bab791)), closes [#140](https://github.com/mi6/ic-ui-kit/issues/140)
- **web-components:** enhance functionality of step component ([3647f0a](https://github.com/mi6/ic-ui-kit/commit/3647f0ac2b6bfc0923a80d77352f3095e9158b46)), closes [#140](https://github.com/mi6/ic-ui-kit/issues/140)
- **web-components:** update tooltip to have disableHover prop that shows tooltip on click ([14337de](https://github.com/mi6/ic-ui-kit/commit/14337de2f2f9de6652e879dd05672baa97b25be8)), closes [#243](https://github.com/mi6/ic-ui-kit/issues/243)

# [2.1.0-beta.2](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.1...v2.1.0-beta.2) (2023-01-10)

### Bug Fixes

- **web-components:** fixed issues with search bar ([2b1663b](https://github.com/mi6/ic-ui-kit/commit/2b1663b0f2599d427b5aa57e815b54286be0fbb8))
- **web-components:** fixes back to top positioning ([94ebac7](https://github.com/mi6/ic-ui-kit/commit/94ebac7b9b5b9fe056ff6663429d00f8db678365))
- **web-components:** fixes console error in linear determinate variant ([d15e609](https://github.com/mi6/ic-ui-kit/commit/d15e60960991b382857dc8866ee2340b502b88ef))
- **web-components:** removed chips for a11y testing ([25c060a](https://github.com/mi6/ic-ui-kit/commit/25c060a8ab6fbeeaeebf4d12d91c0930a2c42d28))
- **web-components:** removed empty validation space when no status is provided ([649f040](https://github.com/mi6/ic-ui-kit/commit/649f0408b7bd623c1db1732993404a00d918bddc))
- **web-components:** updated last-of-type styling on footer links ([c0d4057](https://github.com/mi6/ic-ui-kit/commit/c0d40579b025899eaaebaf5bdfc09c9814d4a13b))
- **web-components:** updated side-navigation on lg devices to stick to left hand side ([9e77e05](https://github.com/mi6/ic-ui-kit/commit/9e77e056bdc3806167f3cd90dc13a4407ffeff5b)), closes [#195](https://github.com/mi6/ic-ui-kit/issues/195)

# [2.1.0-beta.1](https://github.com/mi6/ic-ui-kit/compare/v2.1.0-beta.0...v2.1.0-beta.1) (2022-12-23)

### Bug Fixes

- **web-components:** add rgba themes ([6425900](https://github.com/mi6/ic-ui-kit/commit/64259003534964c758be3c4967884b06e4923737)), closes [#4](https://github.com/mi6/ic-ui-kit/issues/4)
- **web-components:** add transparent borders in HCM ([cdda416](https://github.com/mi6/ic-ui-kit/commit/cdda41614a993305bb660dd10139c9d8b2c26543))
- **web-components:** added styles for WHCM ([a285019](https://github.com/mi6/ic-ui-kit/commit/a2850196bd267ed43569bcb849ffb3a95700dc48))
- **web-components:** added WHCM support for select and search bar ([4b7e753](https://github.com/mi6/ic-ui-kit/commit/4b7e753dc1c6174159c955e021611417856d9144))
- **web-components:** added WHCM support for stepper and made changes to loading indicator ([751c5ee](https://github.com/mi6/ic-ui-kit/commit/751c5ee8b088a498c5f635324e0852053c8ff1a4))
- **web-components:** changed text-field when in HC mode ([79ec35d](https://github.com/mi6/ic-ui-kit/commit/79ec35daf51e3ae991e32960c6d04bbc38c0ec39))
- **web-components:** fix components in WHCM ([f4f6bd6](https://github.com/mi6/ic-ui-kit/commit/f4f6bd624f8a752d3b1864335fe07e92f383083e))
- **web-components:** fixed console error ([ff2d715](https://github.com/mi6/ic-ui-kit/commit/ff2d7157e9cdf79ae40b91c569398b96f6c493c0))
- **web-components:** fixed hyphenated title link on Safari ([0269ff2](https://github.com/mi6/ic-ui-kit/commit/0269ff2bcfadc4b92f60dbe409c137cf79b93300))
- **web-components:** fixes issue with nested inputs values on form submit ([65fbcd3](https://github.com/mi6/ic-ui-kit/commit/65fbcd393dfb98d95d553c6158a6bacc83ca417e))
- **web-components:** fixes styling when javascript disabled ([6643bc9](https://github.com/mi6/ic-ui-kit/commit/6643bc941866f68a6eb025990b159eb05e6300af))
- **web-components:** ic-card changes border colour based on theme ([9d63018](https://github.com/mi6/ic-ui-kit/commit/9d6301859a9f75d371ea5e6a1520d14c4daee224)), closes [#145](https://github.com/mi6/ic-ui-kit/issues/145)
- **web-components:** remove loading indicator background in buttons ([4e1ac52](https://github.com/mi6/ic-ui-kit/commit/4e1ac52b5193f68659eaf829496bc26e2f6b634f)), closes [#5](https://github.com/mi6/ic-ui-kit/issues/5)
- **web-components:** remove unnecessary styles from hero stories ([dcb9b60](https://github.com/mi6/ic-ui-kit/commit/dcb9b609c68089fe3721fa3736c537b27a20c6f8)), closes [#143](https://github.com/mi6/ic-ui-kit/issues/143)
- **web-components:** removed hyphenated title on Safari ([4af0b78](https://github.com/mi6/ic-ui-kit/commit/4af0b78b1f2f20c62d802a19898a413fb1f1be95))
- **web-components:** switch storybook to webpack5 ([47f7b66](https://github.com/mi6/ic-ui-kit/commit/47f7b66819922a0468b606411c7e2be5b3693744)), closes [#156](https://github.com/mi6/ic-ui-kit/issues/156)
- **web-components:** switching out svg for rounded circular determinate indicator ([6dc6bce](https://github.com/mi6/ic-ui-kit/commit/6dc6bcee4294cadcb2ba8abc98f4e1dd41efc0c7)), closes [#118](https://github.com/mi6/ic-ui-kit/issues/118)
- **web-components:** updated foreground colour calculations, added colour contrast check ([ed946fd](https://github.com/mi6/ic-ui-kit/commit/ed946fd48ad75277205cfce3e8a7345f74e19ebe))
- **web-components:** updated stepper and tabs ([2a79411](https://github.com/mi6/ic-ui-kit/commit/2a794113b09bb755e71e84dd6fe73010bec55cf0))

### Features

- **web-components:** fixes radio and checkbox in whcm ([d4f28ec](https://github.com/mi6/ic-ui-kit/commit/d4f28ec2a033d8d498a421ec13119354b859a1e3))
- **web-components:** fixes textfield display in WHCM ([3cd3673](https://github.com/mi6/ic-ui-kit/commit/3cd36733de9c13cf05548032961738019a68db61))
- **web-components:** removes required flag for internal props ([20c7e01](https://github.com/mi6/ic-ui-kit/commit/20c7e01d3ceab44739ca7e48768eb0fc68dc271b))

### Reverts

- Revert "fix(web-components): fixed hyphenated title link on Safari" ([8cd3426](https://github.com/mi6/ic-ui-kit/commit/8cd34264624b9b9715d7f9de0e4b5d0996f7b95c))

# 2.1.0-beta.0 (2022-12-01)

### Bug Fixes

- **web-components:** fix light footer link turning blue ([65fce93](https://github.com/mi6/ic-ui-kit/commit/65fce932261218d29d4c917e04878ada47be5c5d)), closes [#84](https://github.com/mi6/ic-ui-kit/issues/84)
- **web-components:** fix the width of the hero for mobile devices ([fe97d64](https://github.com/mi6/ic-ui-kit/commit/fe97d6496ec659b4addd595a9621b1bd9799858d)), closes [#78](https://github.com/mi6/ic-ui-kit/issues/78)
- **web-components:** remove clashing button styles from dismissable alert ([ce96e41](https://github.com/mi6/ic-ui-kit/commit/ce96e41a79bdb86425700775caf4edcc78d6be18))
- **web-components:** remove margin left on end component and add max width to value on xs breakpoint ([a540147](https://github.com/mi6/ic-ui-kit/commit/a540147f33c5c2f826c7fc70f2076c09b09fe7f0)), closes [#92](https://github.com/mi6/ic-ui-kit/issues/92)
- **web-components:** remove min-width on the title area that was causing an overflow ([43aaa57](https://github.com/mi6/ic-ui-kit/commit/43aaa572104c8c7f030b26bcfce87f006639c714)), closes [#77](https://github.com/mi6/ic-ui-kit/issues/77)
- **web-components:** set text field input width to 100% ([716cb39](https://github.com/mi6/ic-ui-kit/commit/716cb399865f9d819daa3ca4fdbdc190edfa0f84)), closes [#92](https://github.com/mi6/ic-ui-kit/issues/92)
- **web-components:** update alert neutral colour ([671df91](https://github.com/mi6/ic-ui-kit/commit/671df91c20ffc71f2ec66140a52396483523f631)), closes [#88](https://github.com/mi6/ic-ui-kit/issues/88)

### Features

- **web-components:** add "no results" state to search bar variant with disabled filter ([43a21a6](https://github.com/mi6/ic-ui-kit/commit/43a21a6f16fbcbc856e3ac659cecec1597fd6f72))
- **web-components:** add appearance prop to tab panel and switch around appearance light/dark ([dc75131](https://github.com/mi6/ic-ui-kit/commit/dc75131e23ea9e19f447ed7272ab2c0b1f698fa5)), closes [#112](https://github.com/mi6/ic-ui-kit/issues/112)
- **web-components:** adds focus borders for high contrast mode ([d273596](https://github.com/mi6/ic-ui-kit/commit/d27359627724d2a6b9f585f861c2278b50af69a1))
- **web-components:** adds support for form reset event ([466b996](https://github.com/mi6/ic-ui-kit/commit/466b996071f9a6a1dc41f78a964c7960fe73b5a6)), closes [#80](https://github.com/mi6/ic-ui-kit/issues/80)
- **web-components:** renames entry point for unpkg ([a261bf9](https://github.com/mi6/ic-ui-kit/commit/a261bf9fcb6104312adafd1c9ed32e27c57b5d5a))

# 2.0.0 (2022-11-21)

**Note:** Version bump only for package @ukic/web-components
