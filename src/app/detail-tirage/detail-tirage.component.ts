import { Component, OnInit } from '@angular/core';
import { Listpost } from '../listpost';

import { ListpostService } from '../listpost.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})
export class DetailTirageComponent implements OnInit {
 // listpost:  Listpost = new Listpost();
  listposts: any;
  nombre: any;
  nbre!: number;
  constructor( private service : ListpostService) { }

  ngOnInit(): void {
    this.service.getListpost().subscribe( data =>{
      this.listposts = data;

    } );
    
    
    this.service.getnombre(this.listposts).subscribe( data =>{

      this.nombre = data;

      this.nbre = this.nombre;
      
    })
    }
}
