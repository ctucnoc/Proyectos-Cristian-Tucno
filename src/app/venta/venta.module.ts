import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VentaLayoutComponent } from './layout/venta-layout/venta-layout.component';
import { VentaComponent } from './pages/venta/venta.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AddVentaComponent } from './components/add-venta/add-venta.component';
import { SearchProductSaleComponent } from './components/search-product-sale/search-product-sale.component';
import { SearchClientComponent } from './components/search-client/search-client.component';


@NgModule({
  declarations: [
    VentaLayoutComponent, 
    VentaComponent, 
    AddVentaComponent, 
    SearchProductSaleComponent, SearchClientComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class VentaModule { }
