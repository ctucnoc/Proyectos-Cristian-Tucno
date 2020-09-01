import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RequestFormService {

  constructor() { }


  formRequest: FormGroup = new FormGroup({
    request_id: new FormControl(null),
    request_type: new FormControl('', [Validators.required,Validators.minLength(1)]),
    warehouse_destination: new FormControl('',[Validators.required, Validators.minLength(3)])
  });

  initializeFormGroup() {
    this.formRequest.setValue({
      request_id: null,
      request_type: '',
      warehouse_destination: '',
    });
  }
}
