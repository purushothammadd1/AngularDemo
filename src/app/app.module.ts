import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ExpPipe } from './exp.pipe';
import { SalPipe } from './sal.pipe';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenderPipe } from './gender.pipe';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { GetempbyidComponent } from './getempbyid/getempbyid.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    LoginComponent,
    ShowemployeesComponent,
    ExpPipe,
    SalPipe,
    RegisterComponent,
    NavbarComponent,
    GenderPipe,
    ProductsComponent,
    HeaderComponent,
    LogoutComponent,
    GetempbyidComponent,
    CartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
