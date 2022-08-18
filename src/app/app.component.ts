import { Component, importProvidersFrom, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatDrawer) 
  navlist!: MatDrawer;
  constructor(private observer: BreakpointObserver){

  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.navlist.mode = 'over';
        this.navlist.close();
      }else{
        this.navlist.mode = 'side';
        this.navlist.open();
      }
    })
  }
  

}
