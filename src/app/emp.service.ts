import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  isUserLogged: boolean ;
  
//Implementing Dependency Injection for HttpClient using constructor
  constructor(private http:HttpClient) { 
    this.isUserLogged =false;
  }
  //Login success
  setUserLoggedIn(){
    this.isUserLogged =true;
  }

  getUserLoggedStatus():boolean{
    return this.isUserLogged;
  }
  setUserLogout(){
    this.isUserLogged=false;
  }

  getAllCountries():any{
    return this.http.get('https://restcountries.com/v3.1/a11');
  }
}
