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

 // tiragetotal!: number;
  nbretirage: any;
  listtirers: any;
  tiragesurliste: any;
  nbr: any
  id: number=0


  constructor(private service : ListtirerService, private services : TiragetotalService, private services1 : ListpostService,  private router:Router) { }

  ngOnInit(): void {
  //  this.idt= this.route.snapshot.params['idt'];

    this.service.getListtire().subscribe( data =>{
      this.listtirers = data;
      console.log(data)
      console.log(this.listtirers.length);
    })
  
  this.services.getTiragetoltal().subscribe( data =>{
    this.nbretirage = data;
    console.log(data)
  })

  this.services1.getListpost()
  .subscribe( (data) =>{
    console.log(data);
    this.nbr = data
  })

  this.service.getNbretiragesurlist(this.id).subscribe( data =>{
    this.tiragesurliste = data;
    console.log(data)
  })

 // this.id= this.route.snapshot.params['id'];
 

  }

  goToDetailTirage(idnp:number){
    console.log(idnp);
    return this.router.navigate(['/detail-liste', idnp])
  }


}
