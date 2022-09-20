import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetListTir } from '../det-list-tir';
import { DetListTirService } from '../det-list-tir.service';
import { ListtirerService } from '../listtirer.service';


@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.css']
})
export class DetailListeComponent implements OnInit {
  detListTirs: any;
  id:number=0
  Kadi:any
  np:number=0
  idnp:number=0
  //Ntirage:number=0
  tirage:any
  Ntirage: number=0
  nbTir:any

  constructor(private service: DetListTirService, private services: ListtirerService, private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {

    this.idnp = this.route.snapshot.params['idnp']
    console.log(this.id)
    this.service.getListeParTirage(this.id).subscribe(data=>{
      console.log(data);
      this.tirage=data;
    })


  
// ici
    this.service.getDetListTir(this.idnp).subscribe(data=>{
      console.log(data);
      this.detListTirs=data;
    })


    
  }

  goToResultatTirage(id:number){
    console.log(id);
    return this.router.navigate(['resultat-tirage', id])
  }
  

}
