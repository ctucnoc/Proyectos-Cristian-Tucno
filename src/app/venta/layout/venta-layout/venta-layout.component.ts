import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venta-layout',
  templateUrl: './venta-layout.component.html',
  styleUrls: ['./venta-layout.component.css']
})
export class VentaLayoutComponent implements OnInit {

  sideBarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
