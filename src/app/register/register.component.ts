import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  // employees: any;
  countries:any;
  departments:any;
  emp:any;

  //implementing Dependency Injection for Empservice using constructor

  
  constructor(private service:EmpService) {
    this.emp = {empId:'', empName:'', salary:'', gender:'', country:'', doj:'', emailId:'', password:'', Department: {deptId:''}};

  
    // this.employees = [
    //   {empId:101, empName:"Harsha", salary:4545.45, gender:'Male',   country:'IND', doj:'11-24-2018', emailId:'harsha@gmail.com', password:'123'}, 
    //   {empId:102, empName:"Pasha",  salary:5454.54, gender:'Male',   country:'IND', doj:'10-25-2017', emailId:'pasha@gmail.com',  password:'123'}, 
    //   {empId:103, empName:"Indira", salary:5656.56, gender:'Female', country:'IND', doj:'09-26-2016', emailId:'indira@gmail.com', password:'123'}, 
    //   {empId:104, empName:"Venkat", salary:6565.65, gender:'Male',   country:'IND', doj:'08-27-2015', emailId:'venkat@gmail.com', password:'123'}, 
    //   {empId:105, empName:"Gopi",   salary:6767.67, gender:'Male',   country:'IND', doj:'07-28-2014', emailId:'gopi@gmail.com',   password:'123'}
    // ];
  }
  
  ngOnInit(){
    this.service.getAllCountries().subscribe((data: any) =>{
      this.countries=data;
      console.log(data);
    });
    this.service.getDepartments().subscribe((deptData: any) => {
      this.departments = deptData;
      console.log(deptData);
    });
  }

  employeeRegistration(regFrom: any) {
    console.log(regFrom);

    this.emp.empId = regFrom.empId;
    this.emp.empName = regFrom.empName;
    this.emp.salary = regFrom.salary;
    this.emp.gender = regFrom.gender;
    this.emp.doj = regFrom.doj;
    this.emp.country = regFrom.country;
    this.emp.emailId = regFrom.emailId;
    this.emp.password = regFrom.password;
    this.emp.Department.deptId = regFrom.deptId;
    // this.employees.push(regFrom);
    // console.log(this.employees);
    this.service.registerEmployee(this.emp).subscribe((data: any) => {
      console.log(data);
      alert('Sucessfully Registered..');
    });
  }
}