import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberMask',
})
export class phoneMaskPipe implements PipeTransform {
  transform(value: any): string {
    if(value) {
      let phone = value?.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
      let phoneMask = '(' + phone[1] + ') ' + phone[2] + '-' + phone[3];
      return phoneMask;
    } else {
      return '';
    }
  }
}
