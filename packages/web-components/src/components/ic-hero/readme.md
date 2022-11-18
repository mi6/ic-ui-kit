# ic-hero



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                     | Description                                                            | Type                                 | Default     |
| --------------------------- | ----------------------------- | ---------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `aligned`                   | `aligned`                     | The alignment of the hero content                                      | `"center" \| "full-width" \| "left"` | `"left"`    |
| `backgroundImage`           | `background-image`            | Optional background image                                              | `string`                             | `undefined` |
| `contentAligned`            | `content-aligned`             | The alignment of the hero content                                      | `"center" \| "left"`                 | `"left"`    |
| `disableBackgroundParallax` | `disable-background-parallax` | Whether the background image (if set) scrolls using a parallax effect. | `boolean`                            | `false`     |
| `heading` _(required)_      | `heading`                     | The heading of the hero                                                | `string`                             | `undefined` |
| `secondaryHeading`          | `secondary-heading`           | Optional secondary heading, replaced by slotted right content          | `string`                             | `undefined` |
| `secondarySubheading`       | `secondary-subheading`        | Optional secondary subheading, replaced by slotted right content       | `string`                             | `undefined` |
| `small`                     | `small`                       | Alter styling for use with small content/pages                         | `boolean`                            | `false`     |
| `subheading`                | `subheading`                  | Description for the hero                                               | `string`                             | `undefined` |


## Slots

| Slot            | Description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| `"heading"`     | Content will be rendered in the title area, in place of the heading.          |
| `"interaction"` | Content will be rendered in the interaction area, adjacent to the title area. |
| `"secondary"`   | Content will be rendered in the secondary content area.                       |
| `"subheading"`  | Content will be rendered in the title area, in place of the subheading.       |


## Dependencies

### Depends on

- [ic-section-container](../ic-section-container)
- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-hero --> ic-section-container
  ic-hero --> ic-typography
  style ic-hero fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


