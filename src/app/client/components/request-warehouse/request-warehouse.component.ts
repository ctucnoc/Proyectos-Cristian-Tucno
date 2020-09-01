import { Component, OnInit } from '@angular/core';
import { WarehouseCompanyService } from '../../../security/servicies/warehouse-company.service';
import { BWarehouseCompany } from '../../models/bwarehouse-company';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-warehouse',
  templateUrl: './request-warehouse.component.html',
  styleUrls: ['./request-warehouse.component.css']
})
export class RequestWarehouseComponent implements OnInit {

  listData:BWarehouseCompany[];
  displayedColumns: string[] = ['CÓDIGO ALMACÉN', 'ALMACEN', 'TIPO ALMACÉM', 'SELECCIONE'];
  constructor(private warehouseCompanyService:WarehouseCompanyService,private router:Router) { }

  ngOnInit(): void {
    this.onWarehouseOrigen();
  }

  onWarehouseOrigen(){ 
    this.warehouseCompanyService.listCompanyWarehouse("S").subscribe(data => {
      this.listData = data;
    });
  }
  onRequestProductWarehouse(id){ 
    this.router.navigate(['/client/request-product/warehouse/',id]);
  }

}
