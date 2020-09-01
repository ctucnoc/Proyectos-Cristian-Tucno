import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converBooleanToString'
})
export class ConverBooleanToStringPipe implements PipeTransform {

  transform(valor: boolean): any {
    if (valor) {
      return 'S';
    }
    return 'N';
  }

}
