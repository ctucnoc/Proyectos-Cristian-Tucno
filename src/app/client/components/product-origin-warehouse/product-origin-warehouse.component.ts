import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItEntryProductService } from '../../servicies/it-entry-product.service';
import { BITEntreProduct } from '../../models/bitentre-product';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ItRquestProductFormService } from 'src/app/shared/forms/it-rquest-product-form.service';
import { BITRequest } from '../../models/bitrequest';

@Component({
  selector: 'app-product-origin-warehouse',
  templateUrl: './product-origin-warehouse.component.html',
  styleUrls: ['./product-origin-warehouse.component.css']
})
export class ProductOriginWarehouseComponent implements OnInit {

  isFlat = false;
  stock_actual: number;
  stock_min: number;
  listData: BITEntreProduct[];
  bITRequest: BITRequest;
  constructor(
    public dialoRef: MatDialogRef<ProductOriginWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private itEntryProductService: ItEntryProductService,
    private notificationService: NotificationService,
    public itrequestForm: ItRquestProductFormService
  ) { }


  ngOnInit(): void {
  }

  onClear() {
    this.itrequestForm.form.reset();
  }
  onClose() {
    this.dialoRef.close();
  }
  onSelect(row) {
    console.log(row.itentry_product_id);
    this.itrequestForm.onDatoSelect(row);
    this.stock_actual = row.itentry_product_stock_entry;
    this.stock_min = row.itentry_product_min;
    this.isFlat = true;
  }

  onFindByProductName() {
    setTimeout(() => {
      this.onFindByRquestProduct();
    }, 3000);
  }
  onFindByRquestProduct(){
    this.itEntryProductService.findByProductName(this.itrequestForm.form.value.product_name, this.data.id).subscribe(respuesta => {
      this.listData = respuesta;
    });
  }

  onSubmit() {
    if (this.data.id !== null) {
      if (this.itrequestForm.form.value.itrequest_id === null) {
        this.bITRequest = new BITRequest();
        this.bITRequest.product_id = this.itrequestForm.form.value.product_id;
        this.bITRequest.product_name = this.itrequestForm.form.value.product_name;
        this.bITRequest.itrequest_quantity = this.itrequestForm.form.value.product_quantity;
        this.bITRequest.itentry_product_id=this.itrequestForm.form.value.itentry_product_id;
        console.log(this.itrequestForm.form.value.itentry_product_id);
        this.itrequestForm.addItRequest(this.bITRequest);
        this.onClear();
        this.onClose();
      }
    } else {
      this.notificationService.warn('No debe haber un identificador de almacen null');
    }
  }

}
