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
    return this.http.get(`${this.nPostT}/1`);
  }

  urlPT="http://localhost:8080/Tirage/tirageParList"
  getDetListTir(id:number) : Observable<Object>
  {
    return this.http.get(`${this.urlPT}/1`);
  }
 
}
