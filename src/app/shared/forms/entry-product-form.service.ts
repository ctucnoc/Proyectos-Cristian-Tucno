import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EntryProductFormService {

  constructor() { }

  form:FormGroup=new FormGroup({ 
    entry_product_id:new FormControl(null),
    entry_product_document_type:new FormControl('',[,Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
    entry_product_document_number:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    entry_product_type:new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    warehouse_id:new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    provider_client_id:new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(10)])
  });

  initializeFormGroup() {
    this.form.setValue({
      entry_product_id:null,
      entry_product_document_type:'',
      entry_product_document_number:'',
      entry_product_type:'',
      warehouse_id:'',
      provider_client_id:''
    });
  }

}
