import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  constructor(private Routes: Routes) { }

  ngOnInit(): void {
  }
  onGetProducts(){
    
  }

}
