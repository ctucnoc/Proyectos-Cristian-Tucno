import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WarehouseCompanyFormService {

  constructor() { }

  form:FormGroup=new FormGroup({
    multi_company_id:new FormControl(null),
    multi_company_name:new FormControl('')
   });

   initializeFormGroup(){ 
     this.form.setValue({ 
      multi_company_id:null,
      multi_company_name:''
     });
   }

   dataFormCompany(company){
    this.form.controls['multi_company_id'].setValue(company.multi_company_id);
    this.form.controls['multi_company_name'].setValue(company.multi_company_name);
  }
}
