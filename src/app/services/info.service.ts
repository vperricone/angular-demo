import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';
import { Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info:InfoPage = {};
  team:Team = {};
  loaded = false;

  constructor(private http:HttpClient) { 
    this.loadInfo();
    this.loadTeam();
    console.log("service info loaded", this.team);

  }

  private loadInfo() {
    this.http.get("assets/data/data-page.json").subscribe((response:InfoPage) =>{
      this.loaded = true;
      this.info = response;
      console.log("info", response);
    });
  }

  private loadTeam() {
    this.http.get("https://angular-portafolio-d2eb5-default-rtdb.firebaseio.com/team.json").subscribe((response:any) =>{
      this.loaded = true;
      this.team.members = response;
      console.log("team", response);
    });   
  }
}
