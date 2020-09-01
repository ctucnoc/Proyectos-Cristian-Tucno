import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPublicComponent } from './layout/layout-public/layout-public.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';



@NgModule({
  declarations: [ 
    LayoutPublicComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  providers:[
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ]
})
export class CoreModule { }
