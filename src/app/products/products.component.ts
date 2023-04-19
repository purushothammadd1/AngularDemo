import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any;
  constructor(){
    this.products=[
      {id:1001,name:"Nokia",price:14999.00,description:"No Cost EMI Applicable",imgsrc:"assets/images/10001.jpg"},
      {id:1002,name:"Samsung",price:24999.00,description:"No Cost EMI Applicable",imgsrc:"assets/images/10002.jpg"},
      {id:1003,name:"Iphone",price:84999.00,description:"No Cost EMI Applicable",imgsrc:"assets/images/10003.jpg"},
      {id:1004,name:"RealMe",price:22499.00,description:"No Cost EMI Applicable",imgsrc:"assets/images/10004.jpg"},
      {id:1005,name:"Oneplus",price:54999.00,description:"No Cost EMI Applicable",imgsrc:"assets/images/10005.jpg"},
      {id:1006,name:"Nothing",price:64999.00,description:"No Cost EMI Applicable",imgsrc:"assets/images/10006.jpg"},
    ];
  }

  ngOnInit() {
   
  }

}
