import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BITEntreProduct } from 'src/app/client/models/bitentre-product';
import { BehaviorSubject } from 'rxjs';
const ITENTRY_PRODUCT_KEY = 'products_entry_it';
@Injectable({
  providedIn: 'root'
})
export class ITEntreProductFormService {


  itentryproductss: BITEntreProduct[] = [];
  private itentryproduct = new BehaviorSubject<BITEntreProduct[]>([]);
  public itentryproduct$ = this.itentryproduct.asObservable();
  constructor() {
    if (this.getCartProduct() === null) {
      this.itentryproductss = [];
    } else {
      this.itentryproductss = JSON.parse(this.getCartProduct());
      this.itentryproduct.next(this.itentryproductss);
    }
  }

  itEntryProducts: BITEntreProduct[] = [];

  form: FormGroup = new FormGroup({
    itentre_product_id: new FormControl(null),
    itentre_product_name: new FormControl('', [Validators.required, Validators.max(60)]),
    itentre_product_number_lot: new FormControl(''),
    itentry_product_date_expiration: new FormControl(''),
    itentry_product_quantity_entre: new FormControl(0),
    itentre_product_stock_max: new FormControl(0),
    itentry_product_stock_min: new FormControl(0),
    product_id: new FormControl(''),
    entre_Product_id: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      itentre_product_id: null,
      itentre_product_name: '',
      itentre_product_number_lot: '',
      itentry_product_date_expiration: '',
      itentry_product_quantity_entre: 0,
      itentre_product_stock_max: 0,
      itentry_product_stock_min: 0,
      product_id: '',
      entre_Product_id: ''
    });
  }
  dataProduct(product) {
    this.form.controls['itentre_product_name'].setValue(product.product_name);
    this.form.controls['product_id'].setValue(product.product_id);
  }

  clearDataProduct(){
    this.form.controls['itentre_product_name'].setValue('');
    this.form.controls['product_id'].setValue('');
  }
  dataItEntryProduct(row: BITEntreProduct) {
    this.form.setValue({
      itentre_product_id: null,
      itentre_product_name: row.bProduct.product_name,
      itentre_product_number_lot: row.itentry_product_number_lote,
      itentry_product_date_expiration: row.itentry_product_date_expiration,
      itentry_product_quantity_entre: row.itentry_product_stock_entry,
      itentre_product_stock_max: row.itentry_product_stock_max,
      itentry_product_stock_min: row.itentry_product_min,
      product_id: row.bProduct.product_id,
      entre_Product_id: null
    });
  }

  removeLocalStorage() {
    localStorage.removeItem(ITENTRY_PRODUCT_KEY);
  }

  public addItEntryProducts(itentryproduct: BITEntreProduct) {
    this.itentryproductss = [...this.itentryproductss, itentryproduct];
    this.setItEntryProductProduct(this.itentryproductss);
    this.itentryproduct.next(this.itentryproductss);
  }

  public setItEntryProductProduct(itentryproductss) {
    window.localStorage.removeItem(ITENTRY_PRODUCT_KEY);
    window.localStorage.setItem(ITENTRY_PRODUCT_KEY, JSON.stringify(itentryproductss));
  }

  public getCartProduct(): string {
    return localStorage.getItem(ITENTRY_PRODUCT_KEY);
  }
  public removeItEntryProduct(itentryproduct: BITEntreProduct){
    const entityToDelete=this.itentryproductss.findIndex((item)=>(item.bProduct.product_id===itentryproduct.bProduct.product_id));
    this.itentryproductss.splice(entityToDelete,1);
    this.setItEntryProductProduct(this.itentryproductss);
    this.itentryproduct.next(this.itentryproductss);
  }

}
