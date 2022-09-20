import { Component, OnInit } from '@angular/core';
import { Postulant } from '../postulant';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.component.html',
  styleUrls: ['./postulant.component.css']
})
export class PostulantComponent implements OnInit {
  
  lesPosts: any;
  pg: number=1;

  constructor(private service:PostulantService) { }

  ngOnInit(): void {

    this.service.getPostulant().subscribe( data =>{
      this.lesPosts = data;
      console.log(data);
    })
  }

}
