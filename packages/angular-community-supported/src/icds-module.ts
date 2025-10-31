import { CommonModule } from "@angular/common";
import { NgModule, provideAppInitializer } from "@angular/core";
import { defineCustomElements } from "@ukic/web-components/loader";

import { DIRECTIVES } from "./directives/proxies-list";
import { TextValueAccessor } from "./directives/text-value-accessor";
import { BooleanValueAccessor } from "./directives/boolean-value-accessor";
import { SelectValueAccessor } from "./directives/select-value-accessor";
import { RadioValueAccessor } from "./directives/radio-value-accessor";

const DECLARATIONS = [
  // Generated proxies
  ...DIRECTIVES,

  // Generated value accessors
  TextValueAccessor,
  BooleanValueAccessor,
  SelectValueAccessor,
  RadioValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
  providers: [
      provideAppInitializer(() => defineCustomElements()),
  ],
})
export class ICDSModule {}