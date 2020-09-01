import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderLayoutComponent } from './layout/order-layout/order-layout.component';
import { OrderComponent } from './pages/order/order.component';
import { ITOrderComponent } from './pages/itorder/itorder.component';
import { GuardAccessGuard as guard} from '../security/guards/guard-access.guard';


const routes: Routes = [
  {
    path:'',component:OrderLayoutComponent,canActivate:[guard],
    children:[
      { path:'order',component:OrderComponent},
      { path:'order/detail',component:ITOrderComponent},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
