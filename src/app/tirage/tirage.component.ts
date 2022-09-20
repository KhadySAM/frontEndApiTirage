import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tirageclass } from '../tirageclass';
import { TirageserviceService } from '../tirageservice.service';
import * as xlsx from 'xlsx';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getLocaleCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  
  //les var d'import
  libelleliste:String='';
  fichier:any;
  formulaireImporter! : FormGroup;
  libelle!: any;
  tirage: Tirageclass = new Tirageclass();
  nombre: any;
  constructor(private tirageService: TirageserviceService, /*private formBuilder: FormGroup,*/ private http:HttpClient) { }

    ngOnInit(): void {

    }

    televerser(event : any){
      this.fichier = event.target["files"][0];
    }
    public importerList() {
      console.log(this.libelleliste)
      const url = 'http://localhost:8080/postulant/import';
      let formData = new FormData();
      formData.append('fichier',this.fichier);
      console.log(this.fichier)
       this.http.post(`${url}/${this.libelleliste}`,formData).subscribe({next: data=>{
        alert("fichier importer avec success")
        this.libelleliste = ''
        
       }
      //  , error: (e) =>{

      //   alert("Veuillez verifier les differents champs")
      //  }
        })
    }

  SaveTirage(){
    this.tirageService.CreateTirage(this.tirage,this.libelle,this.nombre).subscribe(data =>{
      console.log(data);
    })
  }
  OnSubmit(){
    console.log(this.tirage)
    this.SaveTirage();
  }

}
