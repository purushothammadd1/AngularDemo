import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit{
  person:any;

  constructor(){
    this.person={
      id:101,
      Name:'Purushotham',
      salary:4532.45,
      address:{streetno: 45,City:'Hyd',state:'Telangana'},
      hobbies:['eating','sleeping','listening music','cricket']

    };
  }
  ngOnInit()  {
    
  }
  

}
