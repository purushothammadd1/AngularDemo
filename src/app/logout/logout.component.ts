import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private service:EmpService,private router:Router){
    this.service.setUserLogout();
    this.router.navigate(['login']);

  }
  ngOnInit() {
   
  }

}
