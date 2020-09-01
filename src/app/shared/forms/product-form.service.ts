import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConverStringToBooleanPipe } from 'src/app/pipes/conver-string-to-boolean.pipe';
import { ConverBooleanToStringPipe } from 'src/app/shared/pipes/conver-boolean-to-string.pipe';

@Injectable({
  providedIn: 'root'
})
export class ProductFormService {

  constructor(
    private converStringToBoolean:ConverStringToBooleanPipe,
    private converBooleanTostring:ConverBooleanToStringPipe
    ) { }

  form: FormGroup = new FormGroup({
    product_id: new FormControl(null),
    product_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
    product_name_summary: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    product_print_label: new FormControl(false),
    product_refrigeration: new FormControl(false),
    product_control_lot: new FormControl(false),
    product_control_expiration: new FormControl(false),
    category_id: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      product_id: null,
      product_name: '',
      product_name_summary: '',
      product_print_label: false,
      product_refrigeration: false,
      product_control_lot: false,
      product_control_expiration: false,
      category_id: ''
    });
  }

  populateForm(product) {
    this.form.setValue({
      product_id: product.product_id,
      product_name: product.product_name == "" ? "" : product.product_name,
      product_name_summary: product.product_name_summary,
      product_print_label: product.product_print_label== "" ? "" : this.converStringToBoolean.transform(product.product_print_label,"S"),
      product_refrigeration: product.product_refrigeration== "" ? "" : this.converStringToBoolean.transform(product.product_refrigeration,"S"),
      product_control_lot: product.product_control_lot== "" ? "" : this.converStringToBoolean.transform(product.product_control_lot,"S"),
      product_control_expiration: product.product_control_expiration== "" ? "" : this.converStringToBoolean.transform(product.product_control_expiration,"S"),
      category_id: product.bCategory.category_id
    });
  }

  dataFormCategory(category){
    this.form.controls['category_id'].setValue(category.category_id);
  }

  converBooleanToString(data):string{
    return this.converBooleanTostring.transform(data);
  }
}

