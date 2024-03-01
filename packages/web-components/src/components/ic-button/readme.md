# ic-button

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                | Description                                                                                                                                                           | Type                                                                                                                                                                                     | Default                                        |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `accept`                | `accept`                 | If `fileUpload` is set to `true`, this is the accepted list of file types.                                                                                            | `string`                                                                                                                                                                                 | `"*"`                                          |
| `appearance`            | `appearance`             | The appearance of the button, e.g. dark, light, or the default.                                                                                                       | `"dark" \| "default" \| "light"`                                                                                                                                                         | `"default"`                                    |
| `disableTooltip`        | `disable-tooltip`        | If `true`, the ic-tooltip which is shown for icon variant will be disabled. Title or aria-label must be set if this prop is not applied.                              | `boolean`                                                                                                                                                                                | `false`                                        |
| `disabled`              | `disabled`               | If `true`, the button will be in disabled state.                                                                                                                      | `boolean`                                                                                                                                                                                | `false`                                        |
| `download`              | `download`               | If `true`, the user can save the linked URL instead of navigating to it.                                                                                              | `boolean \| string`                                                                                                                                                                      | `false`                                        |
| `dropdown`              | `dropdown`               | If `true`, the button will show a dropdown icon.                                                                                                                      | `boolean`                                                                                                                                                                                | `false`                                        |
| `dropdownExpanded`      | `dropdown-expanded`      | If `true`, the aria-expanded value will be set to true. This is only applied if the dropdown prop is also true.                                                       | `boolean`                                                                                                                                                                                | `false`                                        |
| `fileInputName`         | `file-input-name`        | The name of the control for the file input, which is submitted with the form data.                                                                                    | `string`                                                                                                                                                                                 | ``ic-button-file-upload-input-${buttonIds++}`` |
| `fileUpload`            | `file-upload`            | If `true`, when the button is clicked the native file explorer will be launched.                                                                                      | `boolean`                                                                                                                                                                                | `false`                                        |
| `form`                  | `form`                   | The <form> element to associate the button with.                                                                                                                      | `string`                                                                                                                                                                                 | `undefined`                                    |
| `formaction`            | `formaction`             | The URL that processes the information submitted by the button. It overrides the action attribute of the button's form owner. Does nothing if there is no form owner. | `string`                                                                                                                                                                                 | `undefined`                                    |
| `formenctype`           | `formenctype`            | The way the submitted form data is encoded.                                                                                                                           | `string`                                                                                                                                                                                 | `undefined`                                    |
| `formmethod`            | `formmethod`             | The HTTP method used to submit the form.                                                                                                                              | `string`                                                                                                                                                                                 | `undefined`                                    |
| `formnovalidate`        | `formnovalidate`         | If `true`, the form will not be validated when submitted.                                                                                                             | `boolean`                                                                                                                                                                                | `undefined`                                    |
| `formtarget`            | `formtarget`             | The place to display the response from submitting the form. It overrides the target attribute of the button's form owner.                                             | `string`                                                                                                                                                                                 | `undefined`                                    |
| `fullWidth`             | `full-width`             | If `true`, the button will fill the width of the container.                                                                                                           | `boolean`                                                                                                                                                                                | `false`                                        |
| `href`                  | `href`                   | The URL that the link points to. This will render the button as an "a" tag.                                                                                           | `string`                                                                                                                                                                                 | `undefined`                                    |
| `hreflang`              | `hreflang`               | The human language of the linked URL.                                                                                                                                 | `string`                                                                                                                                                                                 | `undefined`                                    |
| `loading`               | `loading`                | If `true`, the button will be in loading state.                                                                                                                       | `boolean`                                                                                                                                                                                | `false`                                        |
| `multiple`              | `multiple`               | If `fileUpload` is set to `true`, this boolean determines whether multiple files are accepted.                                                                        | `boolean`                                                                                                                                                                                | `false`                                        |
| `referrerpolicy`        | `referrerpolicy`         | How much of the referrer to send when following the link.                                                                                                             | `"" \| "no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "same-origin" \| "strict-origin" \| "strict-origin-when-cross-origin" \| "unsafe-url"` | `undefined`                                    |
| `rel`                   | `rel`                    | The relationship of the linked URL as space-separated link types.                                                                                                     | `string`                                                                                                                                                                                 | `undefined`                                    |
| `selectedFiles`         | --                       | The list of the files that have been selected by a user.                                                                                                              | `FileList`                                                                                                                                                                               | `undefined`                                    |
| `size`                  | `size`                   | The size of the button to be displayed.                                                                                                                               | `"default" \| "large" \| "small"`                                                                                                                                                        | `"default"`                                    |
| `target`                | `target`                 | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                                                   | `string`                                                                                                                                                                                 | `undefined`                                    |
| `tooltipPlacement`      | `tooltip-placement`      | The position of the tooltip in relation to the button.                                                                                                                | `"bottom" \| "left" \| "right" \| "top"`                                                                                                                                                 | `"bottom"`                                     |
| `transparentBackground` | `transparent-background` | If `true`, the secondary variant of button will have a transparent background rather than white.                                                                      | `boolean`                                                                                                                                                                                | `true`                                         |
| `type`                  | `type`                   | The type of the button.                                                                                                                                               | `"button" \| "reset" \| "submit"`                                                                                                                                                        | `"button"`                                     |
| `variant`               | `variant`                | The variant of the button to be displayed.                                                                                                                            | `"destructive" \| "icon" \| "primary" \| "secondary" \| "tertiary"`                                                                                                                      | `"primary"`                                    |


## Events

| Event             | Description                                                                                            | Type                    |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| `icBlur`          | Emitted when button has blur                                                                           | `CustomEvent<void>`     |
| `icFileSelection` | If `fileUpload` is set to `true`, this will be emitted when a file is selected in the native explorer. | `CustomEvent<FileList>` |
| `icFocus`         | Emitted when button has focus                                                                          | `CustomEvent<void>`     |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `button`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot            | Description                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| `"badge"`       | Badge component overlaying the top right of the button.                                                       |
| `"icon"`        | Deprecated. This slot should not be used anymore. Use left-icon or right-icon slot instead.                   |
| `"left-icon"`   | Content will be placed to the left of the button label.                                                       |
| `"right-icon"`  | Content will be placed to the right of the button label.                                                      |
| `"router-item"` | Handle routing by nesting your routes in this slot. Setting loading to true will have no impact on this slot. |
| `"top-icon"`    | Content will be placed above the button label.                                                                |


## CSS Custom Properties

| Name          | Description                  |
| ------------- | ---------------------------- |
| `--height`    | The height of the button.    |
| `--min-width` | Minimum width of the button. |


## Dependencies

### Used by

 - [ic-accordion-group](../ic-accordion-group)
 - [ic-alert](../ic-alert)
 - [ic-card](../ic-card)
 - [ic-dialog](../ic-dialog)
 - [ic-horizontal-scroll](../ic-horizontal-scroll)
 - [ic-menu](../ic-menu)
 - [ic-menu-item](../ic-menu-item)
 - [ic-navigation-button](../ic-navigation-button)
 - [ic-navigation-menu](../ic-navigation-menu)
 - [ic-pagination](../ic-pagination)
 - [ic-search-bar](../ic-search-bar)
 - [ic-select](../ic-select)
 - [ic-side-navigation](../ic-side-navigation)
 - [ic-toast](../ic-toast)
 - [ic-toggle-button](../ic-toggle-button)
 - [ic-top-navigation](../ic-top-navigation)

### Depends on

- [ic-loading-indicator](../ic-loading-indicator)
- [ic-tooltip](../ic-tooltip)

### Graph
```mermaid
graph TD;
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-accordion-group --> ic-button
  ic-alert --> ic-button
  ic-card --> ic-button
  ic-dialog --> ic-button
  ic-horizontal-scroll --> ic-button
  ic-menu --> ic-button
  ic-menu-item --> ic-button
  ic-navigation-button --> ic-button
  ic-navigation-menu --> ic-button
  ic-pagination --> ic-button
  ic-search-bar --> ic-button
  ic-select --> ic-button
  ic-side-navigation --> ic-button
  ic-toast --> ic-button
  ic-toggle-button --> ic-button
  ic-top-navigation --> ic-button
  style ic-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


