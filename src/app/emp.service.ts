import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  [x: string]: any;
  
  isUserLogged: boolean ;
  loginStatus:Subject<any>;

   //cart items added in the service
   cartItems:any;
   productToBeAdded:Subject<any>;
  
//Implementing Dependency Injection for HttpClient using constructor
  constructor(private http:HttpClient) { 
    this.isUserLogged =false;
    this.loginStatus=new Subject();

    this.cartItems = [];
    this.productToBeAdded = new Subject();
  }

  getLoginStatus():any{
    return this.loginStatus.asObservable();
  }
  getUserLoggedIn(){
    return this.loginStatus.asObservable();
  }
  //Login success
  setUserLoggedIn(){
    this.isUserLogged =true;
    this.loginStatus.next(true);
  }

  getUserLoggedStatus():boolean{
    return this.isUserLogged;
  }
  setUserLogout(){
    this.isUserLogged=false;
    this.loginStatus.next(false);
  }
  //add to cart service
  addToCart(product: any) {
    this.cartItems.push(product);
    this.productToBeAdded.next(product);
  }

  getProductStatus(): any {
    return this.productToBeAdded.asObservable();
  }
 
//api's 
  getAllCountries(){
    return this.http.get('https://restcountries.com/v2/all');
  }

  getAllEmployees(){
    return this.http.get('/getAllEmployees');
  }
  getEmpById(empId: any): any {
    return this.http.get('/getEmployeeById/' + empId);
  }
  getEmployee(loginForm: any): any {
    return this.http.get('/login/' + loginForm.emailId + "/" + loginForm.password).toPromise();
}
  deleteEmployee(empId: any): any {
    return this.http.delete('/deleteEmployee/' + empId)
}
registerEmployee(emp: any) {
  return this.http.post('/registerEmployee', emp);
}
updateEmployee(emp: any){
  return this.http.put('/updateEmployee',emp);
}
getDepartments(){
  return this.http.get('/getAllDepartments');
}

}
