import { Component, OnInit, ViewChild } from '@angular/core';
import { MatNavList } from '@angular/material/list';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isMenuOpened: boolean = false;
  isMenuOpened1: boolean = false;
  isMenuOpened2: boolean = false;
 
  constructor(){

  }
 
  toggleMenu():void{
    this.isMenuOpened = !this.isMenuOpened;
  }
  toggleMenu1():void{
    this.isMenuOpened1 = !this.isMenuOpened1;
  }
  toggleMenu2():void{
    this.isMenuOpened2 = !this.isMenuOpened2;
  }

  ngOnInit(): void {
  }

}
