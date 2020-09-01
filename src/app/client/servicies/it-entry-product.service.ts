import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BITEntreProduct } from '../models/bitentre-product';
import { environment } from './../../../environments/environment';
const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ItEntryProductService {

  constructor(private httpClient:HttpClient) { }

  public findByProductName(word_key:string,warehoise_id:number):Observable<BITEntreProduct[]>{ 
    return this.httpClient.get<BITEntreProduct[]>(environment.url_servidor_backend+'/itentry_product/findByProductName?word_key='+word_key+'&warehouse_id='+warehoise_id,cabecera);
  }
}
