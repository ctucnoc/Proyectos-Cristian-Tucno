import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SecurityLayoutComponent } from './security_layout/security-layout/security-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginHelpComponent } from './components/login-help/login-help/login-help.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutPrivateComponent } from './security_layout/layout-private/layout-private.component';
import { UserComponent } from './pages/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { WarehouseCompanyComponent } from './pages/warehouse-company/warehouse-company.component';
import { ListWarehouseCompanyComponent } from './components/list-warehouse-company/list-warehouse-company.component';
import { SearchWarehouseComponent } from './components/search-warehouse/search-warehouse.component';
import { UserCompanyComponent } from './pages/user-company/user-company.component';
import { ListUserCompanyComponent } from './components/list-user-company/list-user-company.component';
import { SearchUserComponent } from './components/search-user/search-user.component';

@NgModule({
  declarations: [
    LoginComponent, 
    SecurityLayoutComponent, 
    LoginFormComponent, 
    LoginHelpComponent, 
    LayoutPrivateComponent,
    UserComponent,
    AddUserComponent,
    ListUserComponent,
    WarehouseCompanyComponent,
    ListWarehouseCompanyComponent,
    SearchWarehouseComponent,
    UserCompanyComponent,
    ListUserCompanyComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class SecurityModule { }
