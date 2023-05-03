import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-getempbyid',
  templateUrl: './getempbyid.component.html',
  styleUrls: ['./getempbyid.component.css']
})
export class GetempbyidComponent implements OnInit{
  
// employees:any;
  emp: any;
  constructor(private service:EmpService ){
    // this.employees=[
    //   {empId:101,empName:'harsha',salary:3445.45,gender:'Male',country:'CAD',doj:'10-24-2022',emailId:'harsha@gmail.com',password:123},
    //   {empId:102,empName:'pasha',salary:5445.45,gender:'Male',country:'UK',doj:'10-3-2018',emailId:'pasha@gmail.com',password:123},
    //   {empId:103,empName:'indira',salary:6445.45,gender:'Male',country:'INDIA',doj:'10-8-2020',emailId:'indira@gmail.com',password:123},
    //   {empId:104,empName:'gopi',salary:2445.45,gender:'Male',country:'USA',doj:'02-11-2023',emailId:'gopi@gmail.com',password:123},
    //   {empId:105,empName:'robin',salary:6745.45,gender:'Male',country:'AUS',doj:'08-2-2022',emailId:'robin@gmail.com',password:123},
    //   {empId:105,empName:'purush',salary:6745.45,gender:'Male',country:'AUS',doj:'08-2-2022',emailId:'purush@gmail.com',password:"Purush@123"}
    // ];
  }

  ngOnInit(){
    
   
  }
   getEmpById(empForm: any) {

    this.service.getEmpById(empForm.empId).subscribe((empData: any) => {
      this.emp = empData;
      console.log(empData);
    });



    // this.employees.forEach((employee: any) => {
    //   if(employee.empId === empForm.empId){
    //     this.emp=employee;
    //   }
      
    

  }
  

}
