# ic-calendar



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                                                                                                                                                                            | Type                                                                                                                                                      | Default             |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `closeOnSelect`        | `close-on-select`         | If `true`, the calendar will close when a date is selected.                                                                                                                                                                                            | `boolean \| undefined`                                                                                                                                    | `true`              |
| `dateFormat`           | `date-format`             | The format in which the date will be displayed.                                                                                                                                                                                                        | `"DD/MM/YYYY" \| "MM/DD/YYYY" \| "YYYY/MM/DD"`                                                                                                            | `"DD/MM/YYYY"`      |
| `disableDays`          | --                        | The days of the week to disable.                                                                                                                                                                                                                       | `IcWeekDays[] \| undefined`                                                                                                                               | `[]`                |
| `disableFuture`        | `disable-future`          | If `true`, dates in the future are not allowed.                                                                                                                                                                                                        | `boolean \| undefined`                                                                                                                                    | `false`             |
| `disablePast`          | `disable-past`            | If `true`, dates in the past are not allowed.                                                                                                                                                                                                          | `boolean \| undefined`                                                                                                                                    | `false`             |
| `disabled`             | `disabled`                | If `true`, the disabled state will be set.                                                                                                                                                                                                             | `boolean`                                                                                                                                                 | `false`             |
| `max`                  | `max`                     | The latest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object. The value of this prop is ignored if `disableFuture` is set to `true`. | `Date \| string`                                                                                                                                          | `""`                |
| `min`                  | `min`                     | The earliest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object. The value of this prop is ignored if `disablePast` is set to `true`. | `Date \| string`                                                                                                                                          | `""`                |
| `open`                 | `open`                    | If `true`, the calendar will be displayed.                                                                                                                                                                                                             | `boolean \| undefined`                                                                                                                                    | `true`              |
| `openAtDate`           | `open-at-date`            | The date visible when the calendar opens. Used if no date is currently selected. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.                             | `Date \| string`                                                                                                                                          | `""`                |
| `showClearButton`      | `show-clear-button`       | If `true`, the `Clear` button on the calendar will be visible.                                                                                                                                                                                         | `boolean \| undefined`                                                                                                                                    | `true`              |
| `showDaysOutsideMonth` | `show-days-outside-month` | If `true`, days outside the current month will be visible in the calendar.                                                                                                                                                                             | `boolean \| undefined`                                                                                                                                    | `true`              |
| `showTodayButton`      | `show-today-button`       | If `true`, the `Go to today` button on the calendar will be visible.                                                                                                                                                                                   | `boolean \| undefined`                                                                                                                                    | `true`              |
| `size`                 | `size`                    | The size of the calendar to be displayed.                                                                                                                                                                                                              | `"large" \| "medium" \| "small"`                                                                                                                          | `"medium"`          |
| `startOfWeek`          | `start-of-week`           | The first day of the week. `0` for Sunday, `1` for Monday, etc. Default is Monday.                                                                                                                                                                     | `IcWeekDays.Friday \| IcWeekDays.Monday \| IcWeekDays.Saturday \| IcWeekDays.Sunday \| IcWeekDays.Thursday \| IcWeekDays.Tuesday \| IcWeekDays.Wednesday` | `IcWeekDays.Monday` |
| `theme`                | `theme`                   | Sets the date picker to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.                                                                                                               | `"dark" \| "inherit" \| "light" \| undefined`                                                                                                             | `"inherit"`         |
| `value`                | `value`                   | The value of the date picker. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.                                                                                | `Date \| null \| string \| undefined`                                                                                                                     | `""`                |


## Events

| Event      | Description                         | Type                                           |
| ---------- | ----------------------------------- | ---------------------------------------------- |
| `icChange` | Emitted when the value has changed. | `CustomEvent<{ selectedDate: Date \| null; }>` |


## Dependencies

### Used by

 - [ic-date-picker](../ic-date-picker)

### Depends on

- ic-button
- ic-typography

### Graph
```mermaid
graph TD;
  ic-calendar --> ic-button
  ic-calendar --> ic-typography
  ic-button --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-date-picker --> ic-calendar
  style ic-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


