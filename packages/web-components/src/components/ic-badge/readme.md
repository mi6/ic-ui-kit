# ic-badge



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                             | Type                                                                              | Default     |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| `accessibleLabel` | `accessible-label` | The accessible label of the badge component to provide context for screen reader users.                                                                                                 | `string`                                                                          | `undefined` |
| `customColor`     | `custom-color`     | The custom badge colour. This will only style the badge component if variant="custom". Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)". | ``#${string}` \| `rgb(${string})` \| `rgba(${string})``                           | `null`      |
| `maxNumber`       | `max-number`       | The maximum number shown on the badge appended with a +. This will only be displayed if type="text" and textLabel is not empty.                                                         | `number`                                                                          | `undefined` |
| `position`        | `position`         | The positioning of the badge in reference to the parent element.                                                                                                                        | `"far" \| "inline" \| "near"`                                                     | `"far"`     |
| `size`            | `size`             | The size of the badge to be displayed.                                                                                                                                                  | `"default" \| "large" \| "small"`                                                 | `"default"` |
| `textLabel`       | `text-label`       | The text displayed in the badge. This will only be displayed if type="text".                                                                                                            | `string`                                                                          | `undefined` |
| `type`            | `type`             | The type of badge to be displayed.                                                                                                                                                      | `"dot" \| "icon" \| "text"`                                                       | `"text"`    |
| `variant`         | `variant`          | The variant of the badge to be displayed.                                                                                                                                               | `"custom" \| "error" \| "info" \| "light" \| "neutral" \| "success" \| "warning"` | `"neutral"` |


## Methods

### `hideBadge() => Promise<void>`

Use to hide the badge.

#### Returns

Type: `Promise<void>`



### `showBadge() => Promise<void>`

Use to show the badge.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-badge --> ic-typography
  style ic-badge fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


