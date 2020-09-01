import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  constructor(private navService: NavService) { }
  @ViewChild('sideNav') sideNav: ElementRef;
  navItems: NavItem[] = [
    {
      displayName: 'Clasificación Producto',
      iconName: 'supervised_user_circle',
      route: 'client',
      children: [
        { displayName: 'Categoria', iconName: 'computer', route: 'client/category' },
        { displayName: 'Producto', iconName: 'computer', route: 'client/product' },
        { displayName: 'Almacén', iconName: 'computer', route: 'client/warehouse' },
        { displayName: 'Entrada Producto', iconName: 'computer', route: 'client/entry-product' },
        { displayName: 'Solicitar Producto', iconName: 'computer', route: 'client/request-product' },
        { displayName: 'Atender Solicitud', iconName: 'computer', route: 'client/attend-request' }
      ]
    },
    {
      displayName: 'Apoyo a IT',
      iconName: 'supervised_user_circle',
      route: 'security',
      children: [
        { displayName: 'Almacén x Empresa', iconName: 'computer', route: 'security/company/warehouse' },
        { displayName: 'Usuario x empresa', iconName: 'computer', route: 'security/user-company' },
        { displayName: 'Usuario', iconName: 'computer', route: 'security/user' },
      ]
    },
    {
      displayName: 'Global',
      iconName: 'supervised_user_circle',
      route: 'global',
      children: [
        { displayName: 'Proveedor/Cliente', iconName: 'computer', route: 'global/provider-client' },
        { displayName: 'Empresa', iconName: 'computer', route: 'global/company' }
      ]
    },
    {
      displayName: 'Empresa',
      iconName: 'supervised_user_circle',
      route: 'company',
      children: [
        { displayName: 'Orden', iconName: 'computer', route: 'company/order' }
      ]
    },
    {
      displayName: 'Venta',
      iconName: 'supervised_user_circle',
      route: 'sale',
      children: [
        { displayName: 'Realizar Venta', iconName: 'computer', route: 'sale' }
      ]
    },
  ];
  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }

}
