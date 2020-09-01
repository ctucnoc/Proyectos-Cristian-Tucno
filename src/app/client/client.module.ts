import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { CategoryComponent } from './pages/category/category.component';
import { ClientLayoutComponent } from './client_layout/client-layout/client-layout.component';
import { RouterModule } from '@angular/router';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchCategoryComponent } from './components/search-category/search-category.component';
import { ListWarehouseComponent } from './components/list-warehouse/list-warehouse.component';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { EntryProductComponent } from './pages/entry-product/entry-product.component';
import { AddEntryProductComponent } from './components/add-entry-product/add-entry-product.component';
import { GlobalModule } from '../global/global.module';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { AddRequestComponent } from './components/add-request/add-request.component';
import { ImgProductComponent } from './pages/img-product/img-product.component';
import { InfoProductComponent } from './components/info-product/info-product.component';
import { ListImageComponent } from './components/list-image/list-image.component';
import { RequestProductComponent } from './pages/request-product/request-product.component';
import { RequestWarehouseComponent } from './components/request-warehouse/request-warehouse.component';
import { RequestProductWarehouseComponent } from './pages/request-product-warehouse/request-product-warehouse.component';
import { ProductOriginWarehouseComponent } from './components/product-origin-warehouse/product-origin-warehouse.component';
import { ListRequestComponent } from './components/list-request/list-request.component';
import { AttendRequestComponent } from './pages/attend-request/attend-request.component';
import { ItAttendRequestComponent } from './pages/it-attend-request/it-attend-request.component';
import { ItRequestComponent } from './components/it-request/it-request.component';

@NgModule({
  declarations: [
    CategoryComponent,
    ClientLayoutComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    HomeComponent,
    AddProductComponent,
    ListProductComponent,
    ProductComponent,
    SearchCategoryComponent,
    ListWarehouseComponent,
    AddWarehouseComponent,
    WarehouseComponent,
    EntryProductComponent,
    AddEntryProductComponent,
    SearchProductComponent,
    AddRequestComponent,
    ImgProductComponent,
    InfoProductComponent,
    ListImageComponent,
    RequestProductComponent,
    RequestWarehouseComponent,
    RequestProductWarehouseComponent,
    ProductOriginWarehouseComponent,
    ListRequestComponent,
    AttendRequestComponent,
    ItAttendRequestComponent,
    ItRequestComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    GlobalModule
  ],
})
export class ClientModule { }
