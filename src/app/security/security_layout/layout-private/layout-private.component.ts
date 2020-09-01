import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-private',
  templateUrl: './layout-private.component.html',
  styleUrls: ['./layout-private.component.css']
})
export class LayoutPrivateComponent implements OnInit {

  sideBarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
