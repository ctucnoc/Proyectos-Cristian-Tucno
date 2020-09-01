import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  sideBarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
