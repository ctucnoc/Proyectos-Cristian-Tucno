import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalRoutingModule } from './global-routing.module';
import { ListProviderComponent } from './components/list-provider/list-provider.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { CompanyComponent } from './pages/company/company.component';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PruebaComponent } from './components/prueba/prueba.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MyTreeComponent } from './components/my-tree/my-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { AddCompanyComponent } from './components/add-company/add-company.component';


@NgModule({
  declarations: [
    AddProviderComponent, 
    ListProviderComponent, 
    ProviderComponent, 
    CompanyComponent, 
    GlobalLayoutComponent, ListCompanyComponent, PruebaComponent, MyTreeComponent, MyDashboardComponent, AddCompanyComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ]
})
export class GlobalModule { }
