import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converStringToBoolean'
})
export class ConverStringToBooleanPipe implements PipeTransform {

  transform(cadena:string,condicion:string): any {
    if(cadena==condicion){
      return true;
    }
    return false;
  }

}
