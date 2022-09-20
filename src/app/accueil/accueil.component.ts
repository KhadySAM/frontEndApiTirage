import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListpostService } from '../listpost.service';


import { ListtirerService } from '../listtirer.service';
import { Tiragetotal } from '../tiragetotal';
import { TiragetotalService } from '../tiragetotal.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  p: number=1;
  nbrestirage: any;
  listtirers: any;
  id: number=0
  detTirs: any;


  constructor(private service : ListtirerService, private services : TiragetotalService, private services1 : ListpostService,  private router:Router) { }

  ngOnInit(): void {
 
    this.service.getListtire().subscribe( data =>{
      this.listtirers = data;
      console.log(data)
      console.log(this.listtirers.length);
    })
  
  this.services.getTiragetoltal().subscribe( data =>{
    this.nbrestirage = data;
    console.log(data)
  })

  this.services1.getDetTirList().subscribe(data =>{
    this.detTirs = data;
    console.log(data)
  }) 

  }

  goToDetailTirage(idnp:number){
    console.log(idnp);
    return this.router.navigate(['/detail-liste', idnp])
  }


}
