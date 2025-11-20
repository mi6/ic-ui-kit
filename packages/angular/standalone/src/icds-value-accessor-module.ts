import { NgModule } from "@angular/core";

import { TextValueAccessor } from "./directives/text-value-accessor";
import { BooleanValueAccessor } from "./directives/boolean-value-accessor";
import { SelectValueAccessor } from "./directives/select-value-accessor";
import { RadioValueAccessor } from "./directives/radio-value-accessor";

const DECLARATIONS = [
  // Generated value accessors
  TextValueAccessor,
  BooleanValueAccessor,
  SelectValueAccessor,
  RadioValueAccessor,
];

@NgModule({
  imports: DECLARATIONS,
  exports: DECLARATIONS,
  providers: [],
})
export class ICDSValueAccessorModule {}