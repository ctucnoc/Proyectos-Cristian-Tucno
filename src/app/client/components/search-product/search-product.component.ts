import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITEntreProductFormService } from 'src/app/shared/forms/itentre-product-form.service';
import { BProduct } from '../../models/bproduct';
import { ProductService } from '../../servicies/product.service';
import { BITEntreProduct } from '../../models/bitentre-product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  bItEntry_Product: BITEntreProduct;
  constructor(
    public dialoRef: MatDialogRef<SearchProductComponent>,
    public itentryProductForm: ITEntreProductFormService,
    private productService: ProductService
  ) { }

  //array de productos para el filtrado
  datos: BProduct[];
  bProduct: BProduct;

  ngOnInit(): void {
  }
  onClose() {
    this.itentryProductForm.form.reset();
    this.dialoRef.close();
  }
  onSubmit() {
    this.bItEntry_Product = new BITEntreProduct();
    this.bProduct = new BProduct();
    this.bProduct.product_id = this.itentryProductForm.form.value.product_id;
    this.bProduct.product_name = this.itentryProductForm.form.value.itentre_product_name;
    this.bItEntry_Product.bProduct = this.bProduct;
    this.bItEntry_Product.itentry_product_number_lote = this.itentryProductForm.form.value.itentre_product_number_lot;
    this.bItEntry_Product.itentry_product_date_expiration = this.itentryProductForm.form.value.itentry_product_date_expiration;
    this.bItEntry_Product.itentry_product_stock_entry = this.itentryProductForm.form.value.itentry_product_quantity_entre;
    this.bItEntry_Product.itentry_product_min = this.itentryProductForm.form.value.itentry_product_stock_min;
    this.bItEntry_Product.itentry_product_stock_max = this.itentryProductForm.form.value.itentry_product_quantity_entre;
    this.itentryProductForm.addItEntryProducts(this.bItEntry_Product);
    this.onClose();
  }

  onClear() {
    this.itentryProductForm.clearDataProduct();
  }

  onSearchCompany() {
    setTimeout(() => {
      this.onSearchProduct();
    }, 3000);
  }

  onSearchProduct() {
    this.productService.searchQuery(this.itentryProductForm.form.value.itentre_product_name).subscribe(data => {
      this.datos = data;
    });
  }
  onSelect(dato) {
    this.itentryProductForm.dataProduct(dato);
  }

}
