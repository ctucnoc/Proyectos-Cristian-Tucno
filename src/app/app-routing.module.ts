import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALLROUTES } from './core/routes/allRoutes';
import { LayoutPublicComponent } from './core/layout/layout-public/layout-public.component';

const routes: Routes = [
  { path: '', component: LayoutPublicComponent, children: ALLROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
