import { Component, OnInit } from '@angular/core';
import { ITOrderService } from '../../servicies/itorder.service';
import { BITOrder } from '../../models/bitorder';
import { BClient } from '../../models/bclient';

@Component({
  selector: 'app-list-it-order',
  templateUrl: './list-it-order.component.html',
  styleUrls: ['./list-it-order.component.css']
})
export class ListItOrderComponent implements OnInit {

  bClient:BClient;
  listData: BITOrder[];
  displayedColumns: string[] = ['PRODUCTO', 'PRECIO', 'CANTIDAD', 'SUB TOTAL'];
  constructor(private itorderService: ITOrderService) { }

  ngOnInit(): void {
    this.onListItOrder(JSON.parse(window.localStorage.getItem('ORDER_ID')));
  }

  onListItOrder(order_id: number) {
    this.itorderService.list(order_id).subscribe(data => {
      this.listData = data;
      this.bClient=this.listData[0].bOrder.bClient;
    });
  }

}
