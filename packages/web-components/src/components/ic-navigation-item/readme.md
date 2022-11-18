# ic-navigation-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                           | Type      | Default     |
| ---------- | ---------- | ----------------------------------------------------- | --------- | ----------- |
| `href`     | `href`     | Destination of the navigation item                    | `string`  | `""`        |
| `label`    | `label`    | Label of the navigation item                          | `string`  | `undefined` |
| `selected` | `selected` | If true, sets the navigation item in a selected state | `boolean` | `false`     |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the nav item

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part     | Description                         |
| -------- | ----------------------------------- |
| `"link"` | The `<a>` within ic-navigation-item |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)
- [ic-tooltip](../ic-tooltip)

### Graph
```mermaid
graph TD;
  ic-navigation-item --> ic-typography
  ic-navigation-item --> ic-tooltip
  ic-tooltip --> ic-typography
  style ic-navigation-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


