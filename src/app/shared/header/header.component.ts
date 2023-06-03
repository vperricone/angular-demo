import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public infoService:InfoService, private router:Router) {

  }
  
  ngOnInit(): void {
    
  }

  buscar(txt:string) {
    if (txt.length < 1) {
      return;
    }
    this.router.navigate(['/search', txt]);
  }
}
