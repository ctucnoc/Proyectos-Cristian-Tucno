import { Component, OnInit, ViewChild } from '@angular/core';
import { WarehouseCompanyFormService } from 'src/app/shared/forms/warehouse-company-form.service';
import { WarehouseCompanyService } from '../../servicies/warehouse-company.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { BMultiCompany } from '../../../client/models/bmulti-company';
import { MultiCompanyService } from '../../../client/servicies/multi-company.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { SearchWarehouseComponent } from '../search-warehouse/search-warehouse.component';


@Component({
  selector: 'app-list-warehouse-company',
  templateUrl: './list-warehouse-company.component.html',
  styleUrls: ['./list-warehouse-company.component.css']
})
export class ListWarehouseCompanyComponent implements OnInit {


  constructor(
    private multiCompanyService: MultiCompanyService,
    public warehouseCompanyForm: WarehouseCompanyFormService,
    private warehouseCompanyService: WarehouseCompanyService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ALMACÉN', 'ACCIONES'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  datos: BMultiCompany[];
  id: number;


  ngOnInit(): void {
    this.onClear();
  }

  onClear() {
    this.warehouseCompanyForm.form.reset();
    this.warehouseCompanyForm.initializeFormGroup();
    this.datos = null;
    this.listData = null;
  }

  onSearchCompany() {
    setTimeout(() => {
      this.multiCompanyService.search(this.warehouseCompanyForm.form.value.multi_company_name).subscribe(data => {
        this.datos = data;
      });
    }, 3000);
  }
  onLoadWarehouse(q) {
    this.warehouseCompanyService.list(q).subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onSelect(dato) {
    if (dato.multi_company_id != null) {
      this.warehouseCompanyForm.dataFormCompany(dato);
      this.onLoadWarehouse(dato.multi_company_id);
      this.id = dato.multi_company_id;
    } else {
      this.id = null;
    }
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = this.id;
    const dialogRef = this.dialog.open(SearchWarehouseComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rtpa => {
      if (rtpa.event === 'ADD') {
        this.onLoadWarehouse(this.id);
      }
    });
  }
  onDelete(row) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar el almacén?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteWarehouse(row);
        }
      });
  }

  onDeleteWarehouse(row) {
    this.warehouseCompanyService.delete(row).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onLoadWarehouse(row.bMulti_Company.multi_company_id);
    });
  }

}
