import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BEntryProduct } from '../models/bentry-product';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EntryProductService {

  constructor(private httpClient: HttpClient) { }

  public add(bEntry_Product: BEntryProduct): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/entry-product/add', bEntry_Product, cabecera);
  }

}
