import { Directive, ElementRef, HostListener } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Directive({
    selector: '[formControlName][app-input-trim]',
})

export class InputTextTrimmerDirective {
    constructor(private ngControl: NgControl, private el: ElementRef) {
        trimValueAccessor(ngControl.valueAccessor)
    }

    @HostListener('blur') onBlur() {
        const value = this.el.nativeElement.value;
        if (value) {
            this.el.nativeElement.value = value.trim();
        }
    }
}

function trimValueAccessor(valueAccessor: ControlValueAccessor | null) {
    const original = valueAccessor?.registerOnChange;

    if (valueAccessor) {
        valueAccessor.registerOnChange = (fn: (_: unknown) => void) => {
            return original?.call(valueAccessor, (value: unknown) => {
                return fn(typeof value === 'string' ? value.trim() : value);
            });
        };
    }
}
