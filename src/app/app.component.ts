import { GymnasesAngular } from './interface/gymnases';
import { Component, OnInit } from '@angular/core';
import { GymnaseService } from './service/gymnase.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(){}

  ngOnInit(){
    
  }

  
}
