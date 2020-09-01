import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';
import { environment } from './../../../environments/environment';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProductImgService {

  constructor(private httpClient: HttpClient) { }

  public uploadFile(multipartFile: File, id: string): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', multipartFile);
    formData.append('id', id);
    return this.httpClient.post<any>(environment.url_servidor_backend + '/file/upload', formData);
  }

  public find(id: string): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(environment.url_servidor_backend + '/file/find?id=' + id, cabecera);
  }

  public update(id: number): Observable<any> {
    return this.httpClient.put<any>(environment.url_servidor_backend + '/file/update?id=' + id, cabecera);
  }
}
