import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPublicoComponent } from './components/footer/footer-publico/footer-publico.component';
import { FooterprivadoComponent } from './components/footer/footerprivado/footerprivado.component';
import { HeaderPublicComponent } from './components/header/header-public/header-public.component';
import { HeaderPrivateComponent } from './components/header/header-private/header-private.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item/menu-list-item.component';
import { MaterialModule } from '../material.module';
import { DialogConfirmationComponent } from './components/dialog/dialog-confirmation/dialog-confirmation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConverCharToStringPipe } from './pipes/conver-char-to-string.pipe';


@NgModule({
  declarations: [
    FooterPublicoComponent, 
    FooterprivadoComponent, 
    HeaderPublicComponent, 
    HeaderPrivateComponent,
    MenuListItemComponent,
    DialogConfirmationComponent,
    SidebarComponent,
    ConverCharToStringPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,

  ],
  exports: [
    FooterPublicoComponent, 
    FooterprivadoComponent, 
    HeaderPublicComponent, 
    HeaderPrivateComponent,
    SidebarComponent,
    ConverCharToStringPipe
  ],
  entryComponents: [
    DialogConfirmationComponent// <--- Aquí
  ],
  providers:[
  ]
})
export class SharedModule { }
