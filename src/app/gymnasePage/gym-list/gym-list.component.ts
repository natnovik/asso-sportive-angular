import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GymnasesAngular } from 'src/app/interface/gymnases';
import { GymnaseService } from 'src/app/service/gymnase.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit {
  public listGymnases: GymnasesAngular[] = [];

  constructor(private gymnaseServiceVar: GymnaseService) { }

  ngOnInit(): void {
    this.getGymnases();
  }

  public getGymnases(): void {
    console.log("this is list Gymnases",this.listGymnases);
    this.gymnaseServiceVar.getGymnases().subscribe(
      (response: GymnasesAngular[]) => {
        this.listGymnases = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

}
