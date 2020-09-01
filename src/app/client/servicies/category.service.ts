import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BCategory } from '../models/bcategory';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<BCategory[]> {
    return this.httpClient.get<BCategory[]>(environment.url_servidor_backend + '/category/list', cabecera);
  }
  public add(category: BCategory): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/category/add', category, cabecera);
  }

  public update(category: BCategory): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/category/update', category, cabecera);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/category/delete?id=' + id, cabecera);
  }
  public search(palabra_clave:string): Observable<BCategory[]> {
    return this.httpClient.get<BCategory[]>(environment.url_servidor_backend + '/category/search_category?q='+palabra_clave, cabecera);
  }

}
