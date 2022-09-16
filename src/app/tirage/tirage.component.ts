import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tirageclass } from '../tirageclass';
import { TirageserviceService } from '../tirageservice.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  libelle!: any;
  tirage: Tirageclass = new Tirageclass();
  //liste!:Import;
  nombre: any;

  constructor(private tirageService: TirageserviceService) { }

  ngOnInit(): void {
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
