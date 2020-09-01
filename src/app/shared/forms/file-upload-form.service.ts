import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FileUploadFormService {

  constructor() { }
  form: FormGroup = new FormGroup({
    file: new FormControl(''),
    id: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      file: '',
      id: ''
    });
  }

}
