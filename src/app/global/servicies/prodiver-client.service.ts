import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BProviderClient } from '../models/bprovider-client';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProdiverClientService {

  constructor(private httpClient: HttpClient) { }

  public search(q: string): Observable<BProviderClient[]> {
    return this.httpClient.get<BProviderClient[]>(environment.url_servidor_backend + '/provider-client/search?q=' + q, cabecera);
  }
  public add(bProvider_Client: BProviderClient): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/provider-client/add', bProvider_Client, cabecera);
  }

  public delete(bProvider_Client: BProviderClient): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/provider-client/delete', bProvider_Client, cabecera);
  }
  public update(bProvider_Client: BProviderClient): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/provider-client/update', bProvider_Client, cabecera);
  }

  public list(): Observable<BProviderClient[]> {
    return this.httpClient.get<BProviderClient[]>(environment.url_servidor_backend + '/provider-client/list', cabecera);
  }

}
