import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../servicies/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoryFormService } from 'src/app/shared/forms/category-form.service';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID_CATEGORIA', 'CATEGORIA', 'SELECCIONE'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    public categoryForm: CategoryFormService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.loadCategory();
  }
  loadCategory(): void {
    this.categoryService.list().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      console.log(this.listData);
      this.listData.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(ele => {
          return ele != 'SELECCIONE' && data[ele].toLowerCase().indexOf(filter) != -1;
        });
      };
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  onCreate() {
    this.categoryForm.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddCategoryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rpta => {
      if (rpta.event === 'ADD') {
        this.loadCategory();
      }
    });
  }
  onEdit(row) {
    this.categoryForm.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(AddCategoryComponent, dialogConfig);
  }
  onDelete(id) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar la Categoria?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteCategory(id);
        }
      });
  }
  onDeleteCategory(id): void {
    this.categoryService.delete(id).subscribe(data => {
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
      this.refreshTable();
    }
    );
  }
  private refreshTable() {
    this.listData.paginator = this.paginator;
  }

}
