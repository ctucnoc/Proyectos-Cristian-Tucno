import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCreation } from 'src/app/security/models/user-creation';
import { UserCreationService } from 'src/app/security/servicies/user-creation.service';
import { ValidatorService } from './../../security/validators/validator.service';

@Injectable({
  providedIn: 'root'
})
export class UserCreationFormService {

  constructor(private userCreationService:UserCreationService) { }
  form: FormGroup = new FormGroup({
    user_id: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15),ValidatorService.checkUserId(this.userCreationService)]),
    user_name: new FormControl(''),
    user_privilege: new FormControl('')
  });

  initialize() {
    this.form.setValue({
      user_id: null,
      user_name: '',
      user_privilege: ''
    });
  }

  populateForm(row: UserCreation) {
    this.form.setValue({
      user_id: row.user_id,
      user_name: row.user_name,
      user_privilege: row.user_privilege
    });
  }
}
