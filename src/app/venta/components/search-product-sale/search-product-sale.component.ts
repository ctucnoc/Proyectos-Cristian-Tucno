import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-product-sale',
  templateUrl: './search-product-sale.component.html',
  styleUrls: ['./search-product-sale.component.css']
})
export class SearchProductSaleComponent implements OnInit {

  constructor(
    private dialoRef:MatDialogRef<SearchProductSaleComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialoRef.close();
  }

}
