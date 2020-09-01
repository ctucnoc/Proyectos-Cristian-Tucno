import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryFormService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    category_description: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      category_description: ''
    });
  }

  populateForm(categoria) {
    this.form.setValue({
      $key: categoria.category_id,
      category_description: categoria.category_description
    });
  }
}
