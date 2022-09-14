import { Component, OnInit } from '@angular/core';
import { DetListTir } from '../det-list-tir';
import { DetListTirService } from '../det-list-tir.service';


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
  Ntirage:number=0

  constructor(private service: DetListTirService ) { }

  ngOnInit(): void {
    this.service.getDetListTir(this.id).subscribe(data=>{
      console.log(data);
      this.detListTirs=data;
      for (const n of this.detListTirs) {
        this.Ntirage +=1;
      }
    })

    
  }

}
