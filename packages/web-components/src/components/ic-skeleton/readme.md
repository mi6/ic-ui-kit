# ic-skeleton

When using the skeleton component, an aria-live level should be applied to the parent element of the skeleton and the element that it is
representing so that any changes, such as the real element replacing the skeleton placeholder, are announced to assistive technology like screen readers. The recommendation is to use aria-live="polite" over aria-live="recommended" unless changes are critically important. 

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                               | Type                                | Default       |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------- |
| `appearance` | `appearance` | The appearance of the skeleton.                                                                                                           | `"default" \| "light"`              | `"default"`   |
| `light`      | `light`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `appearance` to "light" instead.<br/><br/> | `boolean`                           | `false`       |
| `variant`    | `variant`    | The variant of the skeleton that will be displayed.                                                                                       | `"circle" \| "rectangle" \| "text"` | `"rectangle"` |


----------------------------------------------


