import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BMultiCompany } from '../models/bmulti-company';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class MultiCompanyService {

  constructor(private httpCliente: HttpClient) { }

  public search(multi_company_name: string): Observable<BMultiCompany[]> {
    return this.httpCliente.get<BMultiCompany[]>(environment.url_servidor_backend + '/company/search?q=' + multi_company_name, cabecera);
  }

  public add(bMulti_Company: BMultiCompany): Observable<any> {
    return this.httpCliente.post<any>(environment.url_servidor_backend + '/company/add', bMulti_Company, cabecera);
  }
  public update(bMulti_Company: BMultiCompany): Observable<any> {
    return this.httpCliente.put<any>(environment.url_servidor_backend + '/company/update', bMulti_Company, cabecera);
  }
  public delete(bMulti_Company: BMultiCompany): Observable<any> {
    return this.httpCliente.put<any>(environment.url_servidor_backend + '/company/delete', bMulti_Company, cabecera);
  }

}
