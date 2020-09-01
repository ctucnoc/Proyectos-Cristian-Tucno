import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BITRequest } from 'src/app/client/models/bitrequest';
import { BITEntreProduct } from 'src/app/client/models/bitentre-product';
const ITREQUEST_KEY = 'itRequests';

@Injectable({
  providedIn: 'root'
})
export class ItRquestProductFormService {

  itRequests: BITRequest[] = [];
  constructor() { }

  form: FormGroup = new FormGroup(
    {
      itrequest_id: new FormControl(null),
      product_id: new FormControl(''),
      product_name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      product_quantity: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(1000)]),
      itentry_product_id:new FormControl('')
    }
  );

  initializeFormGroup() {
    this.form.setValue({
      itrequest_id: null,
      product_id: '',
      product_name: '',
      product_quantity: 0,
      itentry_product_id:''
    });
  }

  onDataITRquest(row: BITRequest) {
    this.form.setValue({
      itrequest_id: row.itrequest_id,
      product_id: row.product_id,
      product_name: row.product_name,
      product_quantity: row.itrequest_quantity,
      itentry_product_id:row.itentry_product_id
    });
  }
  onDatoSelect(row: BITEntreProduct) {
    console.log(row.itentry_product_id);
    this.form.controls['product_id'].setValue(row.bProduct.product_id);
    this.form.controls['product_name'].setValue(row.bProduct.product_name);
    this.form.controls['itentry_product_id'].setValue(row.itentry_product_id);
  }

  addItRequest(bITRequest: BITRequest) {
    //this.itEntryProducts.push(itEntryProduct);
    let itRequests: BITRequest[] = [];
    if (sessionStorage.getItem(ITREQUEST_KEY) === null) {
      itRequests.push(bITRequest);
      sessionStorage.setItem(ITREQUEST_KEY, JSON.stringify(itRequests));
    } else {
      itRequests = JSON.parse(sessionStorage.getItem(ITREQUEST_KEY));
      itRequests.push(bITRequest);
      sessionStorage.setItem(ITREQUEST_KEY, JSON.stringify(itRequests));
    }
  }

  removeLocalStorage() {
    sessionStorage.removeItem(ITREQUEST_KEY);
  }
  lenthLocalstorage(): number {
    return sessionStorage.getItem(ITREQUEST_KEY).length;
  }

  getItRequest():BITRequest[] {
    if (sessionStorage.getItem(ITREQUEST_KEY) === null) {
      this.removeLocalStorage();
      return this.itRequests;
    } else {
      return this.itRequests = JSON.parse(sessionStorage.getItem(ITREQUEST_KEY));
    }
  }

  removeItRequest(bITRequest:BITRequest){
    const entityToDelete=this.itRequests.findIndex((item)=>(item.product_id===bITRequest.product_id));
    this.itRequests.splice(entityToDelete,1);
    sessionStorage.setItem(ITREQUEST_KEY,JSON.stringify(this.itRequests));   
  }

}
