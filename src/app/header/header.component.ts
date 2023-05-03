import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus: any;
  cartItems: any;
  constructor(private service:EmpService){
    this.cartItems=this.service.cartItems;
  }
  ngOnInit() {
   this.service.getLoginStatus().subscribe((loginStatusData: any) =>{
     this.loginStatus=loginStatusData;
   });
  }

}
