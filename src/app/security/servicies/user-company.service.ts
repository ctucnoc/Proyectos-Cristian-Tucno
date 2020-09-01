import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BUserMultiCompany } from '../models/buser-multi-company';
import { environment } from 'src/environments/environment';
const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserCompanyService {

  constructor(private httpClient: HttpClient) { }

  public list(q: number): Observable<BUserMultiCompany[]> {
    return this.httpClient.get<BUserMultiCompany[]>(environment.url_servidor_backend + '/user-company/list?q=' + q, cabecera);
  }
  public add(user_Multi_Company: BUserMultiCompany): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/user-company/add', user_Multi_Company, cabecera);
  }

  public delete(user_Multi_Company: BUserMultiCompany): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/user-company/update', user_Multi_Company, cabecera);
  }
}
