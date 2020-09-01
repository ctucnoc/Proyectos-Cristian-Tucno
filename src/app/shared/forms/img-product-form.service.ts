import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BProduct } from 'src/app/client/models/bproduct';

@Injectable({
  providedIn: 'root'
})
export class ImgProductFormService {

  constructor() { }

  productForm: FormGroup = new FormGroup({
    product_id: new FormControl(null),
    product_name: new FormControl('')
  });

  dataProduct(bProduct: BProduct) {
    this.productForm.setValue({
      product_id: bProduct.product_id,
      product_name: bProduct.product_name
    });
  }
}
