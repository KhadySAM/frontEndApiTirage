import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Listpost } from './listpost';

@Injectable({
  providedIn: 'root'
})
export class ListpostService {


  constructor(private http:HttpClient) { }
  getListpost () : Observable<object>
  {
    return this.http.get("http://localhost:8080/Listpost/Afficher")
  }
  getnombre (libelle: string) : Observable<object>
  {
    return this.http.get(`http://localhost:8080/Tirage/affichernbtirage/${libelle}`)
  }
}
