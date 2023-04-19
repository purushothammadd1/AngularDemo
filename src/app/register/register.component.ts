import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  employees: any;
  countries:any;

  //implementing Dependency Injection for Empservice using constructor

  
  constructor(private service:EmpService) {
    this.employees = [
      {empId:101, empName:"Harsha", salary:4545.45, gender:'Male',   country:'IND', doj:'11-24-2018', emailId:'harsha@gmail.com', password:'123'}, 
      {empId:102, empName:"Pasha",  salary:5454.54, gender:'Male',   country:'IND', doj:'10-25-2017', emailId:'pasha@gmail.com',  password:'123'}, 
      {empId:103, empName:"Indira", salary:5656.56, gender:'Female', country:'IND', doj:'09-26-2016', emailId:'indira@gmail.com', password:'123'}, 
      {empId:104, empName:"Venkat", salary:6565.65, gender:'Male',   country:'IND', doj:'08-27-2015', emailId:'venkat@gmail.com', password:'123'}, 
      {empId:105, empName:"Gopi",   salary:6767.67, gender:'Male',   country:'IND', doj:'07-28-2014', emailId:'gopi@gmail.com',   password:'123'}
    ];
  }
  
  ngOnInit(){
    this.service.getAllCountries().subscribe((data: any) =>{
      this.countries=data;
      console.log(data);
    });
  }

  employeeRegistration(regFrom: any) {
    console.log(regFrom);
    this.employees.push(regFrom);
    console.log(this.employees);
  }

  // name:any;
  // gender:any;
  // salary:any;
  // doj:any;
  // countryList:any;
  // mobnum:any;
  // emailid:any;
  // password:any;
  // employees:any;
  // service: any;

  // constructor(){
  //   this.employees=[
  //     {empId:101,empName:'Purushotham',salary:3445.45,gender:'Male',country:'CAD',doj:'10-24-2022',emailId:'purushotham@gmail.com',password:123},
  //     {empId:102,empName:'rajesh',salary:5445.45,gender:'Male',country:'UK',doj:'10-3-2018',emailId:'rajesh@gmail.com',password:123},
  //     {empId:103,empName:'saiteja',salary:6445.45,gender:'Male',country:'INDIA',doj:'10-8-2020',emailId:'saiteja@gmail.com',password:123},
  //     {empId:104,empName:'Harish',salary:2445.45,gender:'Male',country:'USA',doj:'02-11-2023',emailId:'Harish@gmail.com',password:123},
  //     {empId:105,empName:'Saipavan',salary:6745.45,gender:'Male',country:'AUS',doj:'08-2-2022',emailId:'saipavan@gmail.com',password:123},
  //   ];

  // }
  
  // printDetails(){
  //   alert('Registation Success')
  //   console.log(this.name);
  //   console.log(this.mobnum);
  //   console.log(this.employees);
  // }

  // ngOnInit(){
  //  this.service.getAllCountries().subscribe((data :any)=>{
  //    console.log(data);
  //    this.countryList=data;
  //    console.log(this.countryList);
  //  })
  // }

}
