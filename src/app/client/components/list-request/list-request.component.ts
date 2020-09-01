import { Component, OnInit } from '@angular/core';
import { BWarehouseCompany } from '../../models/bwarehouse-company';
import { WarehouseCompanyService } from '../../../security/servicies/warehouse-company.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BRequest } from '../../models/brequest';
import { RequestService } from '../../servicies/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {
  listData: BRequest[] = [];
  listWarehouse: BWarehouseCompany[];
  displayedColumns: string[] = ['NRO. DE SOLICITUD', 'TIPO DE SOLICITUD', 'CONDICIÓN','ALMACÉN SOLICITANTE', 'VER DETALLE'];
  constructor(
    private warehouseCompanyService: WarehouseCompanyService,
    private requestService: RequestService,
    private router: Router
  ) { }

  form: FormGroup = new FormGroup({
    warehouse_id: new FormControl(null, [Validators.required, Validators.min(1)])
  });

  ngOnInit(): void {
    this.listWarehouseCompany();
  }

  listWarehouseCompany() {
    this.warehouseCompanyService.listCompanyWarehouse("S").subscribe(data => {
      this.listWarehouse = data;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.requestService.listAttend(this.form.value.warehouse_id).subscribe(data => {
        this.listData = data;
      });
    }
  }
  onItAttendRequest(id) {
    this.router.navigate(['client/attend-request/', id]);
  }

}
