# ic-accordion



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                   | Type                              | Default     |
| ---------- | ---------- | --------------------------------------------- | --------------------------------- | ----------- |
| `disabled` | `disabled` | If `true`, the accordion will be disabled.    | `boolean`                         | `false`     |
| `expanded` | `expanded` | If `true`, the accordion appears expanded.    | `boolean`                         | `false`     |
| `heading`  | `heading`  | The section header outlining section content. | `string`                          | `""`        |
| `message`  | `message`  | The main body message of the accordion.       | `string`                          | `""`        |
| `size`     | `size`     | The size of the accordion.                    | `"default" \| "large" \| "small"` | `"default"` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on accordion heading.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-accordion --> ic-typography
  style ic-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


