import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  emailId:any;
  password:any;
  employees:any;
  

  constructor(private router:Router,private service:EmpService){

    // this.employees=[
    //   {empId:101,empName:'harsha',salary:3445.45,gender:'Male',country:'CAD',doj:'10-24-2022',emailId:'harsha@gmail.com',password:123},
    //   {empId:102,empName:'pasha',salary:5445.45,gender:'Male',country:'UK',doj:'10-3-2018',emailId:'pasha@gmail.com',password:123},
    //   {empId:103,empName:'indira',salary:6445.45,gender:'Male',country:'INDIA',doj:'10-8-2020',emailId:'indira@gmail.com',password:123},
    //   {empId:104,empName:'gopi',salary:2445.45,gender:'Male',country:'USA',doj:'02-11-2023',emailId:'gopi@gmail.com',password:123},
    //   {empId:105,empName:'robin',salary:6745.45,gender:'Male',country:'AUS',doj:'08-2-2022',emailId:'robin@gmail.com',password:123},
    //   {empId:105,empName:'purush',salary:6745.45,gender:'Male',country:'AUS',doj:'08-2-2022',emailId:'purush@gmail.com',password:"Purush@123"}
    // ];

  }
  
  ngOnInit() {
    
  }
  LoginSubmit(){
    if (this.emailId == 'HR' && this.password == 'HR') {
      alert('Welcome to Login Page')

      console.log("EmailId : " + this.emailId);
      console.log("Password: " + this.password);

      this.router.navigate(['products']);

    } else {
      alert('Invalid Credentials');
    }
  }
  async login(loginForm: any) {
    console.log(loginForm);

    //if (loginForm.value.emailId === 'HR' && loginForm.value.password === 'HR') {

    if (loginForm.emailId === 'HR' && loginForm.password === 'HR') {
      alert('Welcome to HR Home Page');
      // console.log("EmailId : " + loginForm.emailId);
      // console.log("Password: " + loginForm.password);
      this.service.setUserLoggedIn();
      this.router.navigate(['showemp']);
    } else {
      await this.service.getEmployee(loginForm).then((empData: any) => {
        this.employees=empData;
        console.log(empData);
      });

      if (this.employees != null){
        this.service.setUserLoggedIn();
        this.router.navigate(['products']);
      }else{
        alert('Invalid Credentials');
        this.router.navigate(['login']);
      }
      //  this.employees.forEach((emp:any) => {
      //   if (loginForm.emailId === emp.emailId && loginForm.password === emp.password) {
      //     alert('Welcome to Employee Home Page');
          // console.log("EmailId : " + loginForm.emailId);
          // console.log("Password: " + loginForm.password); 
      //     this.service.setUserLoggedIn();
      //     this.router.navigate(['products']);
      //   }
      // });      
    }
  }
}