import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mapToKeys', pure: false})

export class MapToKeysPipe implements PipeTransform {
    transform(value: any) : any {
        let keys = [];
        for (let key in value) {
          keys.push({key: key, value: value[key]});
        }
        return keys;
      }
}