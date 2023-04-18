# ic-tab-group



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute    | Description                                                                                                                               | Type      | Default     |
| -------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `contextId`          | `context-id` | <span style="color:red">**[DEPRECATED]**</span> This is no longer required. The context id is passed down from `ic-tab-context`<br/><br/> | `string`  | `"default"` |
| `inline`             | `inline`     | If `true`, the tabs and tab panels will be positioned separately.                                                                         | `boolean` | `false`     |
| `label` _(required)_ | `label`      | The label to describe the purpose of the set of tabs to screen reader users.                                                              | `string`  | `undefined` |


## Dependencies

### Depends on

- [ic-horizontal-scroll](../ic-horizontal-scroll)

### Graph
```mermaid
graph TD;
  ic-tab-group --> ic-horizontal-scroll
  ic-horizontal-scroll --> ic-button
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  style ic-tab-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


