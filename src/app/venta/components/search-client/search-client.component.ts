import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<SearchClientComponent>
  ) { }

  ngOnInit(): void {
  }

}
