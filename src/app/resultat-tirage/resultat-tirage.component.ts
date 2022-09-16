import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posttirer } from '../posttirer';

import { PosttirerService } from '../posttirer.service';

@Component({
  selector: 'app-resultat-tirage',
  templateUrl: './resultat-tirage.component.html',
  styleUrls: ['./resultat-tirage.component.css']
})
export class ResultatTirageComponent implements OnInit {

  posttirers: any;
  p: number=1;
  id: number=0
  constructor(private service: PosttirerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.service.getPosttirerParTirage(this.id).subscribe( data =>{
      this.posttirers = data;
    })

  }

}
