import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BMultiCompany } from 'src/app/client/models/bmulti-company';

@Injectable({
  providedIn: 'root'
})
export class MultiCompanyFormsService {

  constructor() { }

  form: FormGroup = new FormGroup({
    multi_company_id: new FormControl(null),
    multi_company_address: new FormControl(''),
    multi_company_email: new FormControl(''),
    multi_company_name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(60)]),
    multi_company_phone: new FormControl(''),
    multi_company_representative: new FormControl(''),
    multi_company_ruc: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    multi_company_type: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      multi_company_id: null,
      multi_company_address: '',
      multi_company_email: '',
      multi_company_name: '',
      multi_company_phone: '',
      multi_company_representative: '',
      multi_company_ruc: '',
      multi_company_type: ''
    });
  }
  populateForm(row:BMultiCompany){ 
    this.form.setValue({
      multi_company_id: row.multi_company_id,
      multi_company_address: row.multi_company_address,
      multi_company_email: row.multi_company_email,
      multi_company_name: row.multi_company_name,
      multi_company_phone: row.multi_company_phone,
      multi_company_representative: row.multi_company_representative,
      multi_company_ruc: row.multi_company_ruc,
      multi_company_type: row.multi_company_type
    })
  }
}
