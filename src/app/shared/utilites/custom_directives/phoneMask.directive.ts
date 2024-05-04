import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][app-phoneMask]',
})
export class PhoneMaskDirective {
  finalVal: any = '';
  constructor(public ngControl: NgControl) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChangeDoThis(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspaceDoThis(event: any) {
    this.onInputChange(event.target.value, true);
 
  }

  onInputChange(event: any, backspace: any) {
    let newVal = event?.replace(/\D/g, '');
    
    if (backspace && newVal.length === 6) {
    
      newVal = newVal.substring(0, newVal.length);
      
      
      this.finalVal = newVal;
    }
    if (backspace && newVal.length === 3) {
      newVal = newVal?.substring(0, newVal.length );
    }
    if (newVal?.length <= 10) {
      if (newVal.length === 0) {
        this.finalVal = newVal;

        newVal = '';
      } else if (newVal.length <= 3) {
        this.finalVal = newVal;

        newVal = newVal;
      } else if (newVal.length <= 6) {
        this.finalVal = newVal;
        newVal = `(${newVal.slice(0, 3)}) ${newVal.slice(3)}`;
      } else if (newVal.length < 10) {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        this.finalVal = newVal;
      } else if (newVal.length === 10) {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        this.finalVal = newVal;
      }
    } else {
      newVal = this.finalVal;
    }
    
    this.ngControl.valueAccessor?.writeValue(newVal);
   
  }
}
