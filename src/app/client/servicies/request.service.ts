import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BRequest } from '../models/brequest';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) }
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  public search(date_start: Date, date_end: Date): Observable<BRequest[]> {
    return this.httpClient.get<BRequest[]>(environment.url_servidor_backend + '/request/search?date_start=' + date_start + '&date_end=' + date_end, cabecera);
  }

  public add(bRequest: BRequest): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/request/add', bRequest, cabecera);
  }
  public listAttend(warehouse_origin: number): Observable<BRequest[]> {
    return this.httpClient.get<BRequest[]>(environment.url_servidor_backend + '/request/listAttend?warehouse_origin=' + warehouse_origin, cabecera);
  }
  public findByRequestId(id: number): Observable<BRequest> {
    return this.httpClient.get<BRequest>(environment.url_servidor_backend + '/request/findByRequestId?id=' + id, cabecera);
  }

  public update(id: number): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/request/update?id=' + id, cabecera);
  }
}
