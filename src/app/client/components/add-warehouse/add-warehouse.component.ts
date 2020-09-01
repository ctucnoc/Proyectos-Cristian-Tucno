import { Component, OnInit } from '@angular/core';
import { WarehouseFormService } from 'src/app/shared/forms/warehouse-form.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BWarehouse } from '../../models/bwarehouse';
import { WarehouseService } from '../../servicies/warehouse.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BConfigureWarehouse } from '../../models/bconfigure-warehouse';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  bWarehouse: BWarehouse;
  bConfigure_Warehouse:BConfigureWarehouse;
  constructor(public warehouseFrom: WarehouseFormService, public dialoRef: MatDialogRef<AddWarehouseComponent>, private warehouseService: WarehouseService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.warehouseFrom.form.valid) {
      if (!this.warehouseFrom.form.get('warehouse_id').value) {
        this.onInsertAlmacen();
      } else {
        this.onUpdate();
      }
    }
  }
  onClose() {
    this.warehouseFrom.form.reset();
    this.warehouseFrom.initializeFormGroup();
    this.dialoRef.close();
  }

  onInsertAlmacen() {
    this.bWarehouse = new BWarehouse();
    this.bConfigure_Warehouse=new BConfigureWarehouse();
    this.bWarehouse.warehouse_description = this.warehouseFrom.form.value.warehouse_description;
    this.bWarehouse.warehouse_type = this.warehouseFrom.form.value.warehouse_type;
    this.bConfigure_Warehouse.configure_warehouse_dispensary=this.warehouseFrom.converBooleanToString(this.warehouseFrom.form.value.configure_warehouse_dispensary);
    this.bConfigure_Warehouse.configure_warehouse_check_stock=this.warehouseFrom.converBooleanToString(this.warehouseFrom.form.value.configure_warehouse_check_stock);
    this.bConfigure_Warehouse.configure_warehouse_store_online=this.warehouseFrom.converBooleanToString(this.warehouseFrom.form.value.configure_warehouse_store_online);
    this.bWarehouse.bConfigure_Warehouse=this.bConfigure_Warehouse;
    this.warehouseService.add(this.bWarehouse).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onClose();
    }
    );
  }
  onUpdate() {
    this.bWarehouse = new BWarehouse();
    this.bConfigure_Warehouse=new BConfigureWarehouse();
    this.bWarehouse.warehouse_id = this.warehouseFrom.form.value.warehouse_id;
    this.bWarehouse.warehouse_description = this.warehouseFrom.form.value.warehouse_description;
    this.bWarehouse.warehouse_type = this.warehouseFrom.form.value.warehouse_type;
    this.bConfigure_Warehouse.configure_warehouse_id=this.warehouseFrom.form.value.configure_warehouse_id;
    this.bConfigure_Warehouse.configure_warehouse_dispensary=this.warehouseFrom.converBooleanToString(this.warehouseFrom.form.value.configure_warehouse_dispensary);
    this.bConfigure_Warehouse.configure_warehouse_check_stock=this.warehouseFrom.converBooleanToString(this.warehouseFrom.form.value.configure_warehouse_check_stock);
    this.bConfigure_Warehouse.configure_warehouse_store_online=this.warehouseFrom.converBooleanToString(this.warehouseFrom.form.value.configure_warehouse_store_online);
    this.bWarehouse.bConfigure_Warehouse=this.bConfigure_Warehouse;
    this.warehouseService.update(this.bWarehouse).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onClose();
    }
    );
  }

}
