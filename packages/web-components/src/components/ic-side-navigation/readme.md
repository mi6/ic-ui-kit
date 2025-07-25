# ic-side-navigation



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                     | Description                                                                                                                            | Type                   | Default     |
| -------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `appTitle`                 | `app-title`                   | The app title to be displayed. This is required, unless a slotted app title link is used.                                              | `string \| undefined`  | `undefined` |
| `closeOnNavItemClick`      | `close-on-nav-item-click`     | If `true`, the side navigation will close when a navigation item is clicked. This behaviour is only applicable on larger device sizes. | `boolean \| undefined` | `false`     |
| `collapsedIconLabels`      | `collapsed-icon-labels`       | If `true`, the icon and label will appear when side navigation is collapsed.                                                           | `boolean \| undefined` | `false`     |
| `disableAutoParentStyling` | `disable-auto-parent-styling` | If `true`, automatic parent wrapper styling will be disabled.                                                                          | `boolean \| undefined` | `false`     |
| `disableTopBarBehaviour`   | `disable-top-bar-behaviour`   | If `true`, the side navigation will not display as a top bar on small devices.                                                         | `boolean \| undefined` | `false`     |
| `expanded`                 | `expanded`                    | If `true`, the side navigation will display in an expanded state.                                                                      | `boolean \| undefined` | `false`     |
| `href`                     | `href`                        | The URL that the app title link points to.                                                                                             | `string \| undefined`  | `"/"`       |
| `shortAppTitle`            | `short-app-title`             | The short title of the app to be displayed at small screen sizes in place of the app title.                                            | `string \| undefined`  | `""`        |
| `static`                   | `static`                      | If `true`, the menu expand button will be removed (PLEASE NOTE: This takes effect on screen sizes 992px and above).                    | `boolean \| undefined` | `false`     |
| `status`                   | `status`                      | The status of the app to be displayed.                                                                                                 | `string \| undefined`  | `undefined` |
| `version`                  | `version`                     | The version of the app to be displayed.                                                                                                | `string \| undefined`  | `undefined` |


## Events

| Event               | Description                                                 | Type                            |
| ------------------- | ----------------------------------------------------------- | ------------------------------- |
| `icSideNavExpanded` | Emitted when the side navigation is collapsed and expanded. | `CustomEvent<IcExpandedDetail>` |


## Slots

| Slot                     | Description                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| `"app-icon"`             | Content will be rendered adjacent to the app title at the very top of the side navigation. |
| `"app-title"`            | Handle routing by nesting a route in the app title.                                        |
| `"primary-navigation"`   | Content will be rendered at the top of the side navigation.                                |
| `"secondary-navigation"` | Content will be rendered at the bottom of the side navigation.                             |


## CSS Custom Properties

| Name                           | Description                      |
| ------------------------------ | -------------------------------- |
| `--ic-z-index-side-navigation` | z-index of side navigation panel |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)
- [ic-button](../ic-button)
- [ic-divider](../ic-divider)

### Graph
```mermaid
graph TD;
  ic-side-navigation --> ic-typography
  ic-side-navigation --> ic-button
  ic-side-navigation --> ic-divider
  ic-button --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-divider --> ic-typography
  style ic-side-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


