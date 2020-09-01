import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaLayoutComponent } from './layout/venta-layout/venta-layout.component';
import { VentaComponent } from './pages/venta/venta.component';


const routes: Routes = [
  {
    path:'',component:VentaLayoutComponent,
    children:[
      //{path:'',component:LoginComponent},
      {path:'',component:VentaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
