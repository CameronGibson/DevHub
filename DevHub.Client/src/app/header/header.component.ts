import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  color: string = "#FF9800";
  isCollapsed: boolean = false;  

  constructor() {

   }

   toggleSideNav() : void {
     this.isCollapsed = !this.isCollapsed;
   }

   

  ngOnInit(): void {   

  }

  
}
