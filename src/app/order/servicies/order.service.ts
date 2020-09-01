import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BOrder } from '../models/border';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<BOrder[]> {
    return this.httpClient.get<BOrder[]>(environment.url_servidor_backend+ '/order/list', cabecera);
  }
}
