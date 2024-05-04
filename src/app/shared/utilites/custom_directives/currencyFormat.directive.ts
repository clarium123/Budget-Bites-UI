import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[formControlName][app-currencyFormat]',
  providers: [CurrencyPipe],
})
export class CurrencyFormatDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.value = this.currencyPipe.transform(
      this.element.value,
      'USD'
    ) as string;
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: any) {
    this.element.value = value.replace(/[^0-9.]+/g, '');

    this.element.select();
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: any) {
    this.element.value = this.currencyPipe.transform(value, 'USD') as string;
  }
}
