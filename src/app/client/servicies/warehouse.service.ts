import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BWarehouse } from '../models/bwarehouse';
import { environment } from './../../../environments/environment';


const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private hhtpClient: HttpClient) { }
  
  public add(warehouse: BWarehouse): Observable<any> {
    return this.hhtpClient.post<any>(environment.url_servidor_backend + '/warehouse/add', warehouse, cabecera);
  }
  public search(palabra_clave: string): Observable<BWarehouse[]> {
    return this.hhtpClient.get<BWarehouse[]>(environment.url_servidor_backend + '/warehouse/search?q=' + palabra_clave, cabecera);
  }
  public update(warehouse: BWarehouse): Observable<any> {
    return this.hhtpClient.put<any>(environment.url_servidor_backend + '/warehouse/update',warehouse, cabecera);
  }
  public delete(warehouse: BWarehouse): Observable<any> {
    return this.hhtpClient.put<any>(environment.url_servidor_backend + '/warehouse/delete',warehouse, cabecera);
  }
}
