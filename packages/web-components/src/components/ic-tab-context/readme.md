# ic-tab-context



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                               | Type                      | Default       |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------- |
| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing 'Enter' or 'Space') when they receive focus using keyboard navigation. | `"automatic" \| "manual"` | `"automatic"` |
| `appearance`       | `appearance`         | Determines whether the light or dark variant of the tabs should be displayed.                                                             | `"dark" \| "light"`       | `"dark"`      |
| `contextId`        | `context-id`         | Provide a unique context if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                 | `string`                  | `"default"`   |
| `selectedTabIndex` | `selected-tab-index` | Allows the user to control the selected tab. Must be used alongside the tabSelect event to manage tab selection.                          | `number`                  | `undefined`   |


## Events

| Event       | Description                        | Type                                  |
| ----------- | ---------------------------------- | ------------------------------------- |
| `tabSelect` | Emitted when a user selects a tab. | `CustomEvent<IcTabSelectEventDetail>` |


----------------------------------------------


