import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { DetListTir } from './det-list-tir';

@Injectable({
  providedIn: 'root'
})
export class DetListTirService {

  constructor(private http:HttpClient) { }



  nPostT="http://localhost:8080/Tirage/nbrePostTirer"
  getNbrePostTir(id:number):Observable<Object>{
    return this.http.get(`${this.nPostT}/${id}`);
  }

  urlPT="http://localhost:8080/Tirage/tirageParList"
  getDetListTir(idnp:number) : Observable<Object>
  {
    return this.http.get(`${this.urlPT}/${idnp}`);
  }

  url="http://localhost:8080/Listpost/nbrePostT"
  getListeParTirage(id:number):Observable<Object>{
    return this.http.get(`${this.url}/${id}`);
  }
 
}
