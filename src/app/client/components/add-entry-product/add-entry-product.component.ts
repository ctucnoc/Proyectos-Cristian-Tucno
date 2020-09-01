import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryProductFormService } from 'src/app/shared/forms/entry-product-form.service';
import { WarehouseCompanyService } from '../../../security/servicies/warehouse-company.service';
import { BWarehouseCompany } from '../../models/bwarehouse-company';
import { ProdiverClientService } from 'src/app/global/servicies/prodiver-client.service';
import { BProviderClient } from 'src/app/global/models/bprovider-client';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchProductComponent } from '../search-product/search-product.component';
import { ITEntreProductFormService } from 'src/app/shared/forms/itentre-product-form.service';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BEntryProduct } from '../../models/bentry-product';
import { BWarehouse } from '../../models/bwarehouse';
import { EntryProductService } from '../../servicies/entry-product.service';
import { Observable } from 'rxjs';
import { BITEntreProduct } from '../../models/bitentre-product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-entry-product',
  templateUrl: './add-entry-product.component.html',
  styleUrls: ['./add-entry-product.component.css']
})
export class AddEntryProductComponent implements OnInit {

  listWarehouse: BWarehouseCompany[];
  listProvider: BProviderClient[];

  bEntry_Product: BEntryProduct;
  bWarehouse: BWarehouse;
  bProviderClient: BProviderClient;

  listData$: Observable<BITEntreProduct[]>;
  displayedColumns: string[] = ['PRODUCTO', 'STOCK DE ENTRAGA', 'STOCK MINIMO', 'SELECCIONE'];
  searchKey: string;

  constructor(
    public entryProductForm: EntryProductFormService,
    private warehouseCompanyService: WarehouseCompanyService,
    private providerCienteService: ProdiverClientService,
    public dialog: MatDialog,
    private itentryProductForm: ITEntreProductFormService,
    private notificationService: NotificationService,
    private entryProductService: EntryProductService
  ) {
    this.listData$ = this.itentryProductForm.itentryproduct$;
  }


  ngOnInit(): void {
    this.listWarehouseCompany();
    this.listProviderCompany();
  }
  onSubmit() {
    this.bEntry_Product = new BEntryProduct();
    this.bWarehouse = new BWarehouse();
    this.bProviderClient = new BProviderClient();

    this.bProviderClient.provider_client_id = this.entryProductForm.form.value.provider_client_id;
    this.bWarehouse.warehouse_id = this.entryProductForm.form.value.warehouse_id;
    this.bEntry_Product.entry_product_document_type = this.entryProductForm.form.value.entry_product_document_type;
    this.bEntry_Product.entry_product_document_number = this.entryProductForm.form.value.entry_product_document_number;
    this.bEntry_Product.entry_product_type = this.entryProductForm.form.value.entry_product_type;
    this.bEntry_Product.bWarehouse = this.bWarehouse;
    this.bEntry_Product.bProvider_Client = this.bProviderClient;
    this.bEntry_Product.bITEntry_Product=JSON.parse(this.itentryProductForm.getCartProduct());
    this.entryProductService.add(this.bEntry_Product).subscribe(data => {
      this.itentryProductForm.removeLocalStorage();
      this.entryProductForm.form.reset();
      this.entryProductForm.initializeFormGroup();
      this.notificationService.success(':: Envio Satisfactorio ' + data.message);
    });
  }

  onLoadSearchProduct() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(SearchProductComponent, dialogConfig);
  }

  listWarehouseCompany() {
    this.warehouseCompanyService.listCompanyWarehouse("S").subscribe(data => {
      this.listWarehouse = data;
    });
  }

  listProviderCompany() {
    this.providerCienteService.list().subscribe(data => {
      this.listProvider = data;
    });
  }

  onSearchProdut() {
    alert('hola mundo');
  }

  remover(row) {
    this.dialog
      .open(DialogConfirmationComponent, {
        data: `¿Seguro que quiere eliminar este detalle?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.itentryProductForm.removeItEntryProduct(row);
          this.notificationService.success('Correctamente Eliminado');
          this.listData$ = this.itentryProductForm.itentryproduct$;
        }
      });
  }

  update(row) {
    this.itentryProductForm.dataItEntryProduct(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(SearchProductComponent, dialogConfig);
  }

  onAddProduct() { }
}
