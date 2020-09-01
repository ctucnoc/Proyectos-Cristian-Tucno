import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { CompanyComponent } from './pages/company/company.component';
import { GuardAccessGuard as guard } from '../security/guards/guard-access.guard';


const routes: Routes = [
  { 
    path:'',component:GlobalLayoutComponent,canActivate:[guard],
    children:[
      { path: 'provider-client', component: ProviderComponent },
      { path: 'company', component: CompanyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
