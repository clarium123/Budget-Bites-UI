import { Directive, Input, Optional, ElementRef, Renderer2, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Directive({
  selector: 'mat-checkbox[appCheckboxValue]'
})
export class CheckboxValueDirective implements ControlValueAccessor {
  @Input() trueValue = "Yes";
  @Input() falseValue = "No";

  constructor(@Optional() @Self() private ngControl: NgControl, private checkbox: MatCheckbox) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    if (value === "YES" || value === "Yes") {
      this.checkbox.writeValue(true)
    }
    else if (value === "NO" || value === "No") {
      this.checkbox.writeValue(false)
    }
  }


  registerOnChange(fn: any): void {
    this.checkbox.registerOnChange((checked: boolean) => {
      fn(checked ? this.trueValue : this.falseValue);
    });
  }

  registerOnTouched(fn: any): void {
    this.checkbox.registerOnTouched(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.checkbox.setDisabledState(isDisabled);
  }

}
