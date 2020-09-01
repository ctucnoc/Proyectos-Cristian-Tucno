import { Component, OnInit, Input } from '@angular/core';
import { ProductFormService } from 'src/app/shared/forms/product-form.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SearchCategoryComponent } from '../search-category/search-category.component';
import { BProduct } from '../../models/bproduct';
import { BCategory } from '../../models/bcategory';
import { ProductService } from '../../servicies/product.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  action:string;
  bProduct: BProduct;
  bCategoria: BCategory;

  constructor(
    public productForm: ProductFormService,
    public dialog: MatDialog,
    private productService: ProductService,
    private notificationService: NotificationService,
    public dialoRef: MatDialogRef<AddProductComponent>
  ) { }
  @Input() disabled = false;

  onClose() {
    this.dialoRef.close({event:this.action,product_name:this.productForm.form.value.product_name});
  }

  ngOnInit(): void {
  }

  onLoadSearchCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(SearchCategoryComponent, dialogConfig);
  }

  onSubmit() {
    if (this.productForm.form.valid) {
      if (!this.productForm.form.get('product_id').value) {
        this.onInsertProduct();
      } else {
        this.onUpdateProduct();
      }
    }
  }

  onInsertProduct() {
    this.bProduct = new BProduct();
    this.bCategoria = new BCategory();
    this.bCategoria.category_id = this.productForm.form.value.category_id;
    this.bProduct.product_name = this.productForm.form.value.product_name;
    this.bProduct.product_name_summary = this.productForm.form.value.product_name_summary;
    this.bProduct.product_control_expiration = this.productForm.converBooleanToString(this.productForm.form.value.product_control_expiration);
    this.bProduct.product_control_lot = this.productForm.converBooleanToString(this.productForm.form.value.product_control_lot);
    this.bProduct.product_print_label = this.productForm.converBooleanToString(this.productForm.form.value.product_print_label);
    this.bProduct.product_refrigeration = this.productForm.converBooleanToString(this.productForm.form.value.product_refrigeration);
    this.bProduct.bCategory = this.bCategoria;
    this.productService.add(this.bProduct).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action='ADD';
      this.onClose();
    });
  }

  onClear() {
    this.productForm.form.reset();
    this.productForm.initializeFormGroup();
  }

  onUpdateProduct() {
    this.bProduct = new BProduct();
    this.bCategoria = new BCategory();
    this.bCategoria.category_id = this.productForm.form.value.category_id;
    this.bProduct.product_id = this.productForm.form.value.product_id;
    this.bProduct.product_name = this.productForm.form.value.product_name;
    this.bProduct.product_name_summary = this.productForm.form.value.product_name_summary;
    this.bProduct.product_control_expiration = this.productForm.converBooleanToString(this.productForm.form.value.product_control_expiration);
    this.bProduct.product_control_lot = this.productForm.converBooleanToString(this.productForm.form.value.product_control_lot);
    this.bProduct.product_print_label = this.productForm.converBooleanToString(this.productForm.form.value.product_print_label);
    this.bProduct.product_refrigeration = this.productForm.converBooleanToString(this.productForm.form.value.product_refrigeration);
    this.bProduct.bCategory = this.bCategoria;
    this.productService.update(this.bProduct).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.action='UPDATE';
      this.onClose();
    });
  }

}
