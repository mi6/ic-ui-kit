import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ic-text-field, ic-search-bar, ic-switch, ic-date-input, ic-date-picker',
  host: {
    '(icChange)': 'handleChangeEvent($event.target?.["value"])'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
