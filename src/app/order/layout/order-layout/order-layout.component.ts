import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-layout',
  templateUrl: './order-layout.component.html',
  styleUrls: ['./order-layout.component.css']
})
export class OrderLayoutComponent implements OnInit {

  sideBarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
