import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserCreationService } from '../../servicies/user-creation.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserCreationFormService } from 'src/app/shared/forms/user-creation-form.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(
    private userCreationService: UserCreationService,
    public userCreationForm: UserCreationFormService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) { }
  searchKey: string;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['NOMBRE DEL USUARIO', 'USERNAME', 'TIPO DE USUARIO', 'SELECCIONE'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
  }

  onCreate() {
    this.userCreationForm.form.reset();
    this.userCreationForm.initialize();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = true;
    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rpta => {
      if (rpta.event === 'ADD') {
        this.onSearchUser(rpta.user_name);
      }
    });
  }

  onSearch(event) {
    this.onSearchUser(this.searchKey);
  }

  onSearchUser(valor: string) {
    this.userCreationService.list(valor).subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }
    );
  }

  onSearchClear() { }
  onUpdate(row) {
    this.userCreationForm.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = false;
    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rpta => {
      if (rpta.event === 'UPDATE') {
        this.onSearchUser(rpta.user_name);
      }
    });
  }
  onDelete(row) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere inhabilitar el usuario?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteUser(row);
        }
      });
  }

  onDeleteUser(row) {
    this.userCreationService.delete(row.user_id).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.onSearchUser(row.user_name);
    });
  }

}
