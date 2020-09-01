import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchProductSaleComponent } from '../search-product-sale/search-product-sale.component';
import { SearchClientComponent } from '../search-client/search-client.component';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {

  listData=null;
  displayedColumns: string[] = ['DESCRIPCIÓN PRODUCTO', 'CANTIDAD', 'UNIDAD MEDIDA','PRECIO UNITARIO','DESCUENTO','IMPORTE','SELECCIONE'];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSearchProduct(){ 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(SearchProductSaleComponent, dialogConfig);
  }

  onSearchClient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(SearchClientComponent, dialogConfig);
  }

}
