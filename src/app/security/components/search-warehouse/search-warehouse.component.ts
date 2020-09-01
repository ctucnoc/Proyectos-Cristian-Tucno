import { Component, OnInit, Inject } from '@angular/core';
import { BWarehouse } from 'src/app/client/models/bwarehouse';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WarehouseService } from 'src/app/client/servicies/warehouse.service';
import { WarehouseCompanyService } from '../../servicies/warehouse-company.service';
import { BWarehouseCompany } from 'src/app/client/models/bwarehouse-company';
import { BMultiCompany } from 'src/app/client/models/bmulti-company';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-search-warehouse',
  templateUrl: './search-warehouse.component.html',
  styleUrls: ['./search-warehouse.component.css']
})
export class SearchWarehouseComponent implements OnInit {

  event: string;
  bWarehouseCompany: BWarehouseCompany;
  bMulti_Company: BMultiCompany;
  listData: BWarehouse[] = [];
  searchKey: string;
  displayedColumns: string[] = ['ALMACÉN'];
  constructor(
    public dialoRef: MatDialogRef<SearchWarehouseComponent>,
    private warehouseService: WarehouseService,
    private warehouseCompanyService: WarehouseCompanyService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialoRef.close({ event: this.event });
  }

  onSearch(event) {
    event.preventDefault();
    setTimeout(() => {
      this.warehouseService.search(this.searchKey).subscribe(data => {
        this.listData = data;
      });
    }, 3000);
  }

  onLoadWarehouse(row) {
    if (this.id != null) {
      this.bWarehouseCompany = new BWarehouseCompany();
      this.bMulti_Company = new BMultiCompany();
      this.bMulti_Company.multi_company_id = this.id;
      this.bWarehouseCompany.bMulti_Company = this.bMulti_Company;
      this.bWarehouseCompany.bWarehouse = row;
      this.warehouseCompanyService.add(this.bWarehouseCompany).subscribe(data => {
        this.notificationService.success(data.message);
        this.event = 'ADD';
        this.onClose();
      });
    }
  }

}
