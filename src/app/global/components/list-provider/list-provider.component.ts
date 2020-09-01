import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProdiverClientService } from '../../servicies/prodiver-client.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { ProviderFormsService } from 'src/app/shared/forms/provider-forms.service';
import { AddProviderComponent } from '../add-provider/add-provider.component';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  constructor(private providerClientService: ProdiverClientService, public dialog: MatDialog, private notificationService: NotificationService,public providerForm:ProviderFormsService) { }

  searchKey: string;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['NOMBRE Y/O RAZON SOCIAL', 'TIPO DE DOCUMENTO', 'NRO. DOCUMENTO', 'SELECCIONE'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

  onCreate() {
    this.providerForm.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(AddProviderComponent, dialogConfig);
  }

  onSearch(event) {
    this.onSearchProvider(this.searchKey);
  }
  onUpdate(row){
    this.providerForm.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(AddProviderComponent, dialogConfig);
  }

  onSearchProvider(valor: string) {
    this.providerClientService.search(valor).subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onDelete(row) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar el Proveedor/Cliente?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteProveedor(row);

        }
      });
  }

  onDeleteProveedor(row) {
    this.providerClientService.delete(row).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onSearchProvider(row.provider_client_name);
    }
    );
  }

  onSearchClear() { 
    this.searchKey='';
  }

}
