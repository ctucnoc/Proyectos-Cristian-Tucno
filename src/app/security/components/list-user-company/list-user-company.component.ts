import { Component, OnInit } from '@angular/core';
import { BUserMultiCompany } from '../../models/buser-multi-company';
import { WarehouseCompanyFormService } from 'src/app/shared/forms/warehouse-company-form.service';
import { BMultiCompany } from 'src/app/client/models/bmulti-company';
import { MultiCompanyService } from 'src/app/client/servicies/multi-company.service';
import { UserCompanyService } from '../../servicies/user-company.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchUserComponent } from '../search-user/search-user.component';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { NotificationService } from 'src/app/shared/services/notification.service';


@Component({
  selector: 'app-list-user-company',
  templateUrl: './list-user-company.component.html',
  styleUrls: ['./list-user-company.component.css']
})
export class ListUserCompanyComponent implements OnInit {
  listData: BUserMultiCompany[] = [];
  datos: BMultiCompany[]=[];
  id: number;
  displayedColumns: string[] = ['USUARIO','CUENTA','SELECCIONE'];

  constructor(
    public warehouseCompanyForm: WarehouseCompanyFormService,
    private multiCompanyService: MultiCompanyService,
    private userCompanyService:UserCompanyService,
    private dialog: MatDialog,
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
    this.onClear();
  }
  
  onCreate() { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = this.id;
    const dialogRef = this.dialog.open(SearchUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rpta=> {
        if(rpta.event==='ADD'){ 
          this.onLoadWarehouse(rpta.id);
        }
    });
  }

  onSearchCompany(){
    this.multiCompanyService.search(this.warehouseCompanyForm.form.value.multi_company_name).subscribe(data => {
      this.datos = data;
    });
   }

  onDelete(row){
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar el Detalle?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteUserCompany(row);
        }
      });
   }

   onDeleteUserCompany(row){
     console.log(row);
    this.userCompanyService.delete(row).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onLoadWarehouse(row.multi_Company.multi_company_id);
    });
   }

  onClear(){
    this.warehouseCompanyForm.form.reset();
    this.warehouseCompanyForm.initializeFormGroup();
    this.datos = null;
    this.listData = null;
   }
  onSelect(dato){
    if (dato.multi_company_id != null) {
      this.warehouseCompanyForm.dataFormCompany(dato);
      this.onLoadWarehouse(dato.multi_company_id);
      this.id = dato.multi_company_id;
    } else {
      this.id = null;
    }
   }

   onLoadWarehouse(q:number) {
    this.userCompanyService.list(q).subscribe(data => {
      this.listData = data;
    });
  }

}
