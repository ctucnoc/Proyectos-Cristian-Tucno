import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ClientLayoutComponent } from './client_layout/client-layout/client-layout.component';
import { ProductComponent } from './pages/product/product.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { EntryProductComponent } from './pages/entry-product/entry-product.component';
import { GuardAccessGuard as guard } from '../security/guards/guard-access.guard';
import { ImgProductComponent } from './pages/img-product/img-product.component';
import { RequestProductComponent } from './pages/request-product/request-product.component';
import { RequestProductWarehouseComponent } from './pages/request-product-warehouse/request-product-warehouse.component';
import { AttendRequestComponent } from './pages/attend-request/attend-request.component';
import { ItAttendRequestComponent } from './pages/it-attend-request/it-attend-request.component';


const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,canActivate:[guard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: 'warehouse', component: WarehouseComponent },
      { path: 'entry-product', component: EntryProductComponent },
      { path: 'product/imgs/:id', component: ImgProductComponent },
      { path: 'request-product', component: RequestProductComponent },
      { path: 'request-product/warehouse/:id', component: RequestProductWarehouseComponent },
      { path: 'attend-request', component: AttendRequestComponent },
      { path: 'attend-request/:id', component: ItAttendRequestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
