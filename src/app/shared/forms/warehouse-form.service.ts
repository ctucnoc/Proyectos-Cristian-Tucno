import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConverStringToBooleanPipe } from 'src/app/pipes/conver-string-to-boolean.pipe';
import { ConverBooleanToStringPipe } from '../pipes/conver-boolean-to-string.pipe';

@Injectable({
  providedIn: 'root'
})
export class WarehouseFormService {

  constructor(
    private converStringToBoolean:ConverStringToBooleanPipe,
    private converBooleanTostring:ConverBooleanToStringPipe
  ) { }
  form: FormGroup = new FormGroup({
    warehouse_id: new FormControl(null),
    warehouse_description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
    warehouse_type: new FormControl(''),
    configure_warehouse_id:new FormControl(null),
    configure_warehouse_dispensary: new FormControl(false),
    configure_warehouse_check_stock: new FormControl(false),
    configure_warehouse_store_online: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      warehouse_id: null,
      warehouse_description: '',
      warehouse_type: '',
      configure_warehouse_id:null,
      configure_warehouse_dispensary: false,
      configure_warehouse_check_stock: false,
      configure_warehouse_store_online: false
    });
  }
  populateForm(warehouse) {
    console.log(warehouse);
    this.form.setValue({
      warehouse_id: warehouse.warehouse_id,
      warehouse_description: warehouse.warehouse_description,
      warehouse_type: warehouse.warehouse_type,
      configure_warehouse_id:warehouse.bConfigure_Warehouse.configure_warehouse_id,
      configure_warehouse_dispensary:warehouse.bConfigure_Warehouse.configure_warehouse_dispensary== "" ? "" : this.converStringToBoolean.transform(warehouse.bConfigure_Warehouse.configure_warehouse_dispensary,"S"),
      configure_warehouse_check_stock:warehouse.bConfigure_Warehouse.configure_warehouse_check_stock== "" ? "" : this.converStringToBoolean.transform(warehouse.bConfigure_Warehouse.configure_warehouse_check_stock,"S"),
      configure_warehouse_store_online:warehouse.bConfigure_Warehouse.configure_warehouse_store_online== "" ? "" : this.converStringToBoolean.transform(warehouse.bConfigure_Warehouse.configure_warehouse_store_online,"S")
    });
  }
  converBooleanToString(data):string{
    return this.converBooleanTostring.transform(data);
  }
}
