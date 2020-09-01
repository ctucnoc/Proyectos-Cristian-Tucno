import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converCharToString'
})
export class ConverCharToStringPipe implements PipeTransform {

  transform(value: any,message_one:string,message_two:string): string {
    if (value === 'S') {
      return message_one;
    } else {
      return message_two;
    }
  }

}
