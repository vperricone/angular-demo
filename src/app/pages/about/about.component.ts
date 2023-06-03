import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team.interface';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(public infoService:InfoService) {

  }

  ngOnInit(): void {
    
  }
}
