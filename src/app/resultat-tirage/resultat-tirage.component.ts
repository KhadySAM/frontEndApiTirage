import { Component, OnInit } from '@angular/core';

import { Posttirer } from '../posttirer';

import { PosttirerService } from '../posttirer.service';

@Component({
  selector: 'app-resultat-tirage',
  templateUrl: './resultat-tirage.component.html',
  styleUrls: ['./resultat-tirage.component.css']
})
export class ResultatTirageComponent implements OnInit {


  posttirers: any;
  constructor(private service: PosttirerService) { }

  ngOnInit(): void {

    this.service.getPosttirer().subscribe( data =>{
      this.posttirers = data;
    })

 
}
}