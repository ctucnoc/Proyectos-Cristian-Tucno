import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MultiCompanyService } from 'src/app/client/servicies/multi-company.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { MultiCompanyFormsService } from 'src/app/shared/forms/multi-company-forms.service';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  listData: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['RAZÓN SOCIAL', 'RUC', 'REPRESENTANTE', 'SELECCIONE'];

  constructor(private multiCompanyService: MultiCompanyService, public dialog: MatDialog, public companyForm: MultiCompanyFormsService, private notificationService: NotificationService) { }

  ngOnInit() {

  }

  onCreate() {
    this.companyForm.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddCompanyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(resp => {
      console.log(resp);
      if (resp.event === 'ADD') {
        this.onSearchCompany(resp.multi_company_name);
      }
    });
  }

  onUpdate(row) {
    this.companyForm.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddCompanyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(resp => {
      console.log(resp);
      if (resp.event === 'UPDATE') {
        this.onSearchCompany(resp.multi_company_name);
      }
    });
  }

  onDelete(row) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar la empresa?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteMultiCompany(row);
        }
      });
  }

  onDeleteMultiCompany(row) {
    this.multiCompanyService.delete(row).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
    }
    );
  }
  onSearchClear() {

  }

  onLoadMultiCompany() {
    this.onSearchCompany(this.searchKey);
  }

  onSearchCompany(q: string) {
    this.multiCompanyService.search(q).subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

}
