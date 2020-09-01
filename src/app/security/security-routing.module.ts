import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityLayoutComponent } from './security_layout/security-layout/security-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutPrivateComponent } from './security_layout/layout-private/layout-private.component';
import { UserComponent } from './pages/user/user.component';
import { GuardAccessGuard as guard} from './guards/guard-access.guard';
import { WarehouseCompanyComponent } from './pages/warehouse-company/warehouse-company.component';
import { UserCompanyComponent } from './pages/user-company/user-company.component';


const routes: Routes = [
  {
    path:'',component:SecurityLayoutComponent,
    children:[
      //{path:'',component:LoginComponent},
      {path:'login',component:LoginComponent},
      {path:'', redirectTo:'login'}
    ]
  },
  {
    path:'security',component:LayoutPrivateComponent,canActivate:[guard],
    children:[
      {path:'user',component:UserComponent},
      { path: 'company/warehouse', component: WarehouseCompanyComponent },
      { path: 'user-company', component: UserCompanyComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
