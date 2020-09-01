import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { OrderLayoutComponent } from './layout/order-layout/order-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './pages/order/order.component';
import { ITOrderComponent } from './pages/itorder/itorder.component';
import { ListItOrderComponent } from './components/list-it-order/list-it-order.component';


@NgModule({
  declarations: [
    ListOrderComponent, 
    OrderLayoutComponent,
    OrderComponent,
    ITOrderComponent,
    ListItOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class OrderModule { }
