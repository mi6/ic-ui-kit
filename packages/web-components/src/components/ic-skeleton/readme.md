# ic-skeleton

When using the skeleton component, an aria-live level should be applied to the parent element of the skeleton and the element that it is
representing so that any changes, such as the real element replacing the skeleton placeholder, are announced to assistive technology like screen readers. The recommendation is to use aria-live="polite" over aria-live="recommended" unless changes are critically important. 

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                                             | Type                                | Default       |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------- |
| `theme`   | `theme`   | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \| "inherit" \| "light"`    | `"inherit"`   |
| `variant` | `variant` | The variant of the skeleton that will be displayed.                                                                                     | `"circle" \| "rectangle" \| "text"` | `"rectangle"` |


----------------------------------------------


