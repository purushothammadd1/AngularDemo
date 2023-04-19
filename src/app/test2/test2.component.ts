import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  person: any;

  constructor() {
    this.person = {
      id: 101,
      name: 'Harsha',
      salary: 4545.45,
      address:{streetNo: 101, city:'Hyd', state:'Telengana'},
      hobbies:['Eating', 'Sleeping', 'Cricket', 'TV', 'Music']
    };
  }

  ngOnInit() {
  }
  buttonSubmit(){
    alert('Button clicked!');
    console.log(this.person);
  }


}
