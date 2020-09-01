import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BConfigureWarehouse } from 'src/app/client/models/bconfigure-warehouse';

@Injectable({
  providedIn: 'root'
})
export class ConfigureWarehouseFormService {

  constructor() { }

  form:FormGroup=new FormGroup({ 
    configure_warehouse_id:new FormControl(null),
    configure_warehouse_dispensary:new FormControl(false),
    configure_warehouse_check_stock:new FormControl(false),
    configure_warehouse_store_online:new FormControl(false)
  });
  initializeFormGroup() {
    this.form.setValue({
    configure_warehouse_id:null,
    configure_warehouse_dispensary:'',
    configure_warehouse_check_stock:'',
    configure_warehouse_store_online:''
    });
  }

  populateForm(row:BConfigureWarehouse) {
    this.form.setValue({
      configure_warehouse_id:row.configure_warehouse_id,
      configure_warehouse_dispensary:row.configure_warehouse_dispensary,
      configure_warehouse_check_stock:row.configure_warehouse_check_stock,
      configure_warehouse_store_online:row.configure_warehouse_store_online
    });
  }
}
