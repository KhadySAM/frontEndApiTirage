import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListtirerService {

  constructor(private http:HttpClient) { }
  getListtire () : Observable<object>
  {
    return this.http.get("http://localhost:8080/Tirage/listeTirer")
  }
  
  getListpost() : Observable<object>
  {
    return this.http.get("http://localhost:8080/Tirage/nbreTirageListe")
  }

  urtir = "http://localhost:8080/Tirage/nbr"
  getNbretiragesurlist (id:number) : Observable<object>
  {
    return this.http.get(`${this.urtir}/${id}`)
  }

}
