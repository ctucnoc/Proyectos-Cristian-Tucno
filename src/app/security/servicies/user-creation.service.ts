import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreation } from '../models/user-creation';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserCreationService {

  constructor(private httpClient: HttpClient) { }

  public list(word_key: string): Observable<UserCreation[]> {
    return this.httpClient.get<UserCreation[]>(environment.url_servidor_backend + '/user/list?word_key=' + word_key, cabecera);
  }
  public add(userCreation: UserCreation): Observable<any> {
    return this.httpClient.post<any>(environment.url_servidor_backend + '/user/add', userCreation, cabecera);
  }

  public update(userCreation: UserCreation): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/user/update', userCreation, cabecera);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/user/delete?id=' + id, cabecera);
  }

  public exits(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.url_servidor_backend + '/user/exits?id=' + id, cabecera);
  }
}
