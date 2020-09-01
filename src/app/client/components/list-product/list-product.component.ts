import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../servicies/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProductFormService } from 'src/app/shared/forms/product-form.service';
import { Router } from '@angular/router';
import { ImgProductFormService } from 'src/app/shared/forms/img-product-form.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['PRODUCTO', 'DENOMINACIÓN RESUMEN', 'CATEGORIA', 'SELECCIONE'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  constructor(private productService: ProductService,
    public produtForm: ProductFormService,
    private router: Router,
    private imgProductForm: ImgProductFormService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  onSearch(event) {
    this.onSearchProduct(this.searchKey);
  }

  onSearchProduct(q: string) {
    this.productService.search(q).subscribe(data => {
      console.log(data.length);
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }
  onEdit(row) {
    this.produtForm.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rpta => {
      console.log(rpta);
      if(rpta.event==='UPDATE'){
        this.onSearchProduct(rpta.product_name);
      }
    });
  }
  onAddImg(row) {
    this.imgProductForm.dataProduct(row);
    this.router.navigate(['client/product/imgs/', row.product_id]);
  }
  onCreate() {
    this.produtForm.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(rpta => {
      if(rpta.event==='ADD'){
        this.onSearchProduct(rpta.product_name);
      }
    });
  }


}
