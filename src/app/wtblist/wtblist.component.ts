import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wtblist',
  templateUrl: './wtblist.component.html',
  styleUrls: ['./wtblist.component.css']
})
export class WTBListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    product=[
      {'id':1,'fname':'Dunk Low Black White','lname':'','img':'../../assets/s1.PNG','graph':'../../assets/g1.PNG','vent':'46 ventes','perc':'36.48%'},
      {'id':2,'fname':'Jordan 4','lname':'Military Black','img':'../../assets/s2.PNG','graph':'../../assets/g1.PNG','vent':'42 ventes','perc':'36.48%'},
      {'id':3,'fname':'Nike Dunk Low','lname':'Next Nature','img':'../../assets/s3.PNG','graph':'../../assets/g1.PNG','vent':'35 ventes','perc':'36.48%'},
      {'id':4,'fname':'Nike Air Max 1 Travis','lname':'Scott Saturn Gold','img':'../../assets/s4.PNG','graph':'../../assets/g2.PNG','vent':'15 ventes','perc':'36.48%'},
      {'id':5,'fname':'Dunk Low Black White','lname':'','img':'../../assets/s5.PNG','graph':'../../assets/g2.PNG','vent':'12 ventes','perc':'36.48%'},
      {'id':6,'fname':'Dunk Low Black White','lname':'','img':'../../assets/s6.PNG','graph':'../../assets/g1.PNG','vent':'5 ventes','perc':'36.48%'},
      {'id':7,'fname':'Dunk Low Black White','lname':'','img':'../../assets/s7.PNG','graph':'../../assets/g2.PNG','vent':'8 ventes','perc':'36.48%'},
      {'id':8,'fname':'Dunk Low Black White','lname':'','img':'../../assets/s8.PNG','graph':'../../assets/g1.PNG','vent':'5 ventes','perc':'36.48%'},
      {'id':9,'fname':'Dunk Low Black White','lname':'','img':'../../assets/s9.PNG','graph':'../../assets/g1.PNG','vent':'5 ventes','perc':'36.48%'}
  
    ]
  
}
