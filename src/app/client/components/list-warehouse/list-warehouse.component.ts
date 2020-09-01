import { Component, OnInit, ViewChild } from '@angular/core';
import { WarehouseService } from '../../servicies/warehouse.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WarehouseFormService } from 'src/app/shared/forms/warehouse-form.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AddWarehouseComponent } from '../add-warehouse/add-warehouse.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements OnInit {

  constructor(private warehouseService: WarehouseService, public dialog: MatDialog, public warehouseForm: WarehouseFormService, private notificationService: NotificationService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ALMACEN', 'TIPO DE ALMACEN', 'SELECCIONE'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void {
  }

  onSearchClear() {
    this.searchKey = '';
    this.listData.filter = this.searchKey.trim().toUpperCase();
  }

  onEdit(row) {
    this.warehouseForm.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddWarehouseComponent, dialogConfig);
  }

  onSearch(events) {
    this.warehouseService.search(this.searchKey).subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onCreate() {
    this.warehouseForm.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddWarehouseComponent, dialogConfig);
  }

  onDelete(row) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar el Almacén?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteWarehouse(row);
        }
      });
  }

  onDeleteWarehouse(row) {
    this.warehouseService.delete(row).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
    }
    );
  }


}
