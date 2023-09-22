import { NgModule } from '@angular/core';
import { defineCustomElements } from '@ukic/web-components/loader';
import { DIRECTIVES } from './directives/directives';

defineCustomElements();


@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
  imports: [],
  providers: [],
})
export class UkicModule { }