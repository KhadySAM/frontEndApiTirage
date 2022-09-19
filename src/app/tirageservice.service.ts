import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tirageclass } from './tirageclass';

@Injectable({
  providedIn: 'root'
})
export class TirageserviceService {

  constructor(private http:HttpClient) { }


  getTirageretourlist():Observable<object>{
    return this.http.get("http://localhost:8080/Tirage/postTirerParIdTirage/$idTirage")
  }

  CreateTirage(tirage:Tirageclass,libelle:string,nbre:number){
    return this.http.post(`http://localhost:8080/Tirage/createTirage/${libelle}/${nbre}`, tirage)
  }
}
