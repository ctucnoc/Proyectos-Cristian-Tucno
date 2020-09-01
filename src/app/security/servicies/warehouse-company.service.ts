import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BWarehouseCompany } from '../../client/models/bwarehouse-company';
import { environment } from '../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class WarehouseCompanyService {

  constructor(private httpClient: HttpClient) { }

  public list(q: Number): Observable<BWarehouseCompany[]> {
    return this.httpClient.get<BWarehouseCompany[]>(environment.url_servidor_backend + '/wareahouse/company/list?q=' + q, cabecera);
  }

  public delete(bWarehouse_Company: BWarehouseCompany): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/wareahouse/company/delete', bWarehouse_Company, cabecera);
  }
  public add(bWarehouse_Company: BWarehouseCompany): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/wareahouse/company/add', bWarehouse_Company, cabecera);
  }
  public listCompanyWarehouse(warehouse_type:string):Observable<BWarehouseCompany[]>{
    return this.httpClient.get<BWarehouseCompany[]>(environment.url_servidor_backend + '/wareahouse/company/list/warehouse?warehouse_type='+warehouse_type,cabecera);
  }
}
