import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../servicies/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['NUMERO DE ORDEN', 'CONDICIÓN', 'TIPO DE ENTREGA', 'CLIENTE', 'SELECCIONE'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.onList();
  }

  onList() {
    this.orderService.list().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onUpdate(row) {
    window.localStorage.setItem('ORDER_ID', JSON.stringify(row.order_id));
    this.router.navigate(['company/order/detail']);
  }

  onDelete(row) { }

}
