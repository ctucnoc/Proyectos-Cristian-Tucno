import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { UserJWT } from '../models/user-jwt';
import { MultiCompany } from '../models/multi-company';
import { environment } from './../../../environments/environment';


const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user: UserLogin): Observable<UserJWT> {
    return this.httpClient.post<UserJWT>(environment.url_servidor_backend + '/auth/login', user, cabecera);
  }

  public findCompanyUser(login: string): Observable<MultiCompany[]> {
    return this.httpClient.get<MultiCompany[]>(environment.url_servidor_backend + '/auth/findCompanyUser?login='+login, cabecera);
  }
}
