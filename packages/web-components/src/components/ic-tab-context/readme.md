# ic-tab-context



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                               | Type                      | Default       |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------- |
| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing 'Enter' or 'Space') when they receive focus using keyboard navigation. | `"automatic" \| "manual"` | `"automatic"` |
| `appearance`       | `appearance`         | The appearance of the tab context, e.g dark, or light.                                                                                    | `"dark" \| "light"`       | `"dark"`      |
| `contextId`        | `context-id`         | The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                | `string`                  | `"default"`   |
| `selectedTabIndex` | `selected-tab-index` | The selected tab to be controlled by the user. Must be used alongside the tabSelect event to manage tab selection.                        | `number`                  | `undefined`   |


## Events

| Event       | Description                        | Type                                  |
| ----------- | ---------------------------------- | ------------------------------------- |
| `tabSelect` | Emitted when a user selects a tab. | `CustomEvent<IcTabSelectEventDetail>` |


----------------------------------------------


