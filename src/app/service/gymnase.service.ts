import { environment } from './../../environments/environment';
import { GymnasesAngular } from './../interface/gymnases';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable({
  providedIn: 'root'
})
export class GymnaseService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getGymnases():Observable<GymnasesAngular[]> {
    return this.http.get<GymnasesAngular[]>(this.apiServerUrl + '/all'); 
  }
  public addGymnase(newGymnase: GymnasesAngular):Observable<GymnasesAngular>{
    return this.http.post<GymnasesAngular>(this.apiServerUrl + '/add', newGymnase);
  }
  public updateGymnase(gymnase: GymnasesAngular):Observable<GymnasesAngular>{
    return this.http.put<GymnasesAngular>(this.apiServerUrl + '/update', gymnase);
  }
  public deteleGymnase(gymnaseId: number):Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/delete' + gymnaseId);
  }
}
