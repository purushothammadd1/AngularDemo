import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id:number ;
  name:String;
  salary: number;

  address:any;
  hobbies:any;

  constructor(){
    this.id=101;
    this.name="purushotham";
    this.salary=3434.45;

    this.address={streetno:8, city:"Jangaon",state:"Telangana"};
    this.hobbies=["Eating","Sleeping","cricket","Music"];

  }
  ngOnInit(){

  }

  }
  
