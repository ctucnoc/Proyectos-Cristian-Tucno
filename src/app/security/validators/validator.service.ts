import { Injectable } from '@angular/core';
import { UserCreationService } from '../servicies/user-creation.service';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService{

  constructor() { }

  static checkUserId(userCreationServices:UserCreationService){ 
    return (control:AbstractControl)=> {
      const value=control.value;
      console.log(value);
      return userCreationServices.exits(value).subscribe(data=> {
        console.log(data);
        return data ? true: { notAvailable:true}
      });
    }
  }
}
