import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { BITOrder } from '../models/bitorder';
import { environment } from './../../../environments/environment';
const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class ITOrderService {

  constructor(private httpClient: HttpClient) { }

  public list(order_id:number): Observable<BITOrder[]> {
    return this.httpClient.get<BITOrder[]>(environment.url_servidor_backend + '/order/detail/list?order_id='+order_id, cabecera);
  }
}
