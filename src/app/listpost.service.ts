import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Listpost } from './listpost';

@Injectable({
  providedIn: 'root'
})
export class ListpostService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/Posttirer/postTirerParTirage"
  getPosttirerParTirage(id:number){
    return this.http.get(`${this.url}/${id}`)
  }

  urlt="http://localhost:8080/Listpost/Afficher"
  
  getListpost() : Observable<object>
  {
    return this.http.get("http://localhost:8080/Listpost/Afficher")
  }
}
