# ic-tab-context



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                               | Type                                          | Default       |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------- |
| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing 'Enter' or 'Space') when they receive focus using keyboard navigation. | `"automatic" \| "manual" \| undefined`        | `"automatic"` |
| `contextId`        | `context-id`         | The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                | `string \| undefined`                         | `"default"`   |
| `monochrome`       | `monochrome`         | If `true`, the tabs will display as black in the light theme.                                                                             | `boolean \| undefined`                        | `false`       |
| `selectedTabIndex` | `selected-tab-index` | The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.                      | `number \| undefined`                         | `undefined`   |
| `theme`            | `theme`              | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.   | `"dark" \| "inherit" \| "light" \| undefined` | `"inherit"`   |


## Events

| Event         | Description                        | Type                                  |
| ------------- | ---------------------------------- | ------------------------------------- |
| `icTabSelect` | Emitted when a user selects a tab. | `CustomEvent<IcTabSelectEventDetail>` |


----------------------------------------------


