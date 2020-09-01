import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestFormService } from 'src/app/shared/forms/request-form.service';
import { WarehouseCompanyService } from '../../../security/servicies/warehouse-company.service';
import { BWarehouseCompany } from '../../models/bwarehouse-company';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductOriginWarehouseComponent } from '../product-origin-warehouse/product-origin-warehouse.component';
import { BITRequest } from '../../models/bitrequest';
import { ItRquestProductFormService } from 'src/app/shared/forms/it-rquest-product-form.service';
import { RequestService } from '../../servicies/request.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BRequest } from '../../models/brequest';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  id: number;
  list_warehouse_destination: BWarehouseCompany[];
  listData: BITRequest[];
  bRequest: BRequest;
  constructor(
    public requestFormService: RequestFormService,
    private warehouseCompanyService: WarehouseCompanyService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    public dialog: MatDialog,
    private itrequestForm: ItRquestProductFormService,
    private requestService: RequestService,
    private notificationService: NotificationService
  ) { }

  displayedColumns: string[] = ['PRODUCTO', 'CANTIDAD SOLICITADA', 'SELECCIONE'];
  isExist = false;

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.onLoadWarehouseDestination();
    this.onListRequestProduct();
  }


  onCreate() {
    //this.categoryForm.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = { id: this.id }
    const dialogoRef = this.dialog.open(ProductOriginWarehouseComponent, dialogConfig);
    dialogoRef.afterClosed().subscribe(rpta => {
      this.onListRequestProduct();
    });
  }


  onSubmit() {
    this.bRequest = new BRequest();
    if (this.requestFormService.formRequest.valid) {
      this.bRequest.request_type = this.requestFormService.formRequest.value.request_type;
      this.bRequest.warehouse_origin = this.id;
      this.bRequest.warehouse_destination = this.requestFormService.formRequest.value.warehouse_destination;
      this.bRequest.list = this.listData;
      console.log(this.bRequest);
      this.requestService.add(this.bRequest).subscribe(data => {
        this.notificationService.success(':: Envio Satisfactorio ' + data.message);
        sessionStorage.removeItem('itRequests');
      });
    }
  }

  onLoadWarehouseDestination() {
    this.warehouseCompanyService.listCompanyWarehouse("N").subscribe(data => {
      this.list_warehouse_destination = data;
    });
  }

  onDelete(row) {
    this.itrequestForm.removeItRequest(row);
    this.onListRequestProduct();
  }

  onRegresar() {
    this.itrequestForm.removeLocalStorage();
    this.router.navigate(['client/request-product']);
  }
  onListRequestProduct() {
    this.listData = this.itrequestForm.getItRequest();
    if (this.listData === null) {
      this.isExist = false;
    } else {
      this.isExist = true;
    }
  }

}
