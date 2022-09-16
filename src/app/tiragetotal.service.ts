import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tiragetotal } from './tiragetotal';

@Injectable({
  providedIn: 'root'
})
export class TiragetotalService {

  constructor(private http:HttpClient) { }

  getTiragetoltal() : Observable<object>
  {
    return this.http.get("http://localhost:8080/Tirage/nbreTirageTotal")
  }

}
