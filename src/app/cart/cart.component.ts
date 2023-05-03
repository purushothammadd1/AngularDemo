import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  // receivedProducts: any;
  products: any;
  loginStatus: any;
  cartItems: any;

  constructor(private service: EmpService){
    this.cartItems = [];
    //this.cartItems = this.service.cartItems;
    // this. products = this.service.cartItems;
    // this.receivedProducts = localStorage.getItem('cartProducts');
    // this.products = JSON.parse(this.receivedProducts );
    // console.log(this.products);
  }
  ngOnInit() {
    this.service.getLoginStatus().subscribe((loginStatusData: any) =>{
      this.loginStatus =loginStatusData;
    });
    this.service.getProductStatus().subscribe((productData: any) =>{
      this.cartItems.push(productData);
    }); 
    
  }
}
