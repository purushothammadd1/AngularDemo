import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemployees',
  templateUrl: './showemployees.component.html',
  styleUrls: ['./showemployees.component.css']
})
export class ShowemployeesComponent implements OnInit {
  employee:any;
  // empId:any;
  // empName:any;
  // salary:any;
  // gender:any;
  // doj:any;
  // emailId:any;
  // password:any;

  constructor(){
      this.employee = [
        {empId:101, empName:"Harsha", salary:4545.45, gender:'Male',   country:'IND', doj:'11-24-2018', emailId:'harsha@gmail.com', password:'123'}, 
        {empId:102, empName:"Pasha",  salary:5454.54, gender:'Male',   country:'IND', doj:'10-25-2017', emailId:'pasha@gmail.com',  password:'123'}, 
        {empId:103, empName:"Indira", salary:5656.56, gender:'Female', country:'IND', doj:'09-26-2016', emailId:'indira@gmail.com', password:'123'}, 
        {empId:104, empName:"Venkat", salary:6565.65, gender:'Male',   country:'IND', doj:'08-27-2015', emailId:'venkat@gmail.com', password:'123'}, 
        {empId:105, empName:"Gopi",   salary:6767.67, gender:'Male',   country:'IND', doj:'07-28-2014', emailId:'gopi@gmail.com',   password:'123'}
      ];
    

  }
  ngOnInit() {
    
  }

}
