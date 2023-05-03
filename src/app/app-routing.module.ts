import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { GetempbyidComponent } from './getempbyid/getempbyid.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"showemp",  canActivate:[AuthGuard],  component:ShowemployeesComponent},
  {path:"products", canActivate:[AuthGuard],component:ProductsComponent},
  {path:"empbyid",  canActivate:[AuthGuard], component:GetempbyidComponent},
  {path:"cart",     canActivate:[AuthGuard], component:CartComponent},
  {path:"logout",   canActivate:[AuthGuard], component:LogoutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
