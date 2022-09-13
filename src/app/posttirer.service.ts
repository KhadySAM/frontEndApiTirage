import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posttirer } from './posttirer';

@Injectable({
  providedIn: 'root'
})
export class PosttirerService {

  constructor(private http:HttpClient) { }
  getPosttirer () : Observable<object>
  {
    return this.http.get("http://localhost:8080/Posttirer/afficherpostulanttire")
  }
  
}
