import { NgModule } from '@angular/core';

//Directives
import { CurrencyFormatDirective } from '../../utilites/custom_directives/currencyFormat.directive';
import { PhoneMaskDirective } from '../../utilites/custom_directives/phoneMask.directive';
import { CheckboxValueDirective } from '../../utilites/custom_directives/checkbox-value.directive';
import { InputTextTrimmerDirective } from '../../utilites/custom_directives/input-trim.directive';
import { NumberOnlyDirective } from '../../utilites/custom_directives/number-only.directive';

//Pipes
import { MapToKeysPipe } from '../../utilites/custom_pipes/mapTokeys.pipe';
import { phoneMaskPipe } from '../../utilites/custom_pipes/phoneNumberMask.pipe';

@NgModule({
  declarations: [
    PhoneMaskDirective, 
    CurrencyFormatDirective,
    phoneMaskPipe, 
    MapToKeysPipe,
    CheckboxValueDirective, 
    InputTextTrimmerDirective, 
    NumberOnlyDirective,
  ],
  imports: [],
  exports: [
    PhoneMaskDirective, 
    CurrencyFormatDirective,
    phoneMaskPipe,MapToKeysPipe,
    CheckboxValueDirective, 
    InputTextTrimmerDirective, 
    NumberOnlyDirective,
  ],
})
export class PipeDirectiveModule { }
