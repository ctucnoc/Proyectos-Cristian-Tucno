import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BProduct } from '../models/bproduct';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public search(product_name: string): Observable<BProduct[]> {
    return this.httpClient.get<BProduct[]>(environment.url_servidor_backend + '/product/search?q=' + product_name, cabecera);
  }
  public add(product: BProduct): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/product/add', product, cabecera);
  }

  public update(product: BProduct): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/product/update', product, cabecera);
  }

  public searchQuery(q: string): Observable<BProduct[]> {
    return this.httpClient.get<BProduct[]>(environment.url_servidor_backend + '/product/search_query?q=' + q, cabecera);
  }
}
