import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { AuthGuard } from './authguard/auth';

const routes: Routes = [{
path:'Home',
component:HomeComponent,
canActivate:[AuthGuard]

},
{
  path:'Product',
  component:ProductComponent,
  canActivate:[AuthGuard]
},
{
  path:'productdetails/:id',
  component:ProductdetailsComponent
},
{
  path:'login',
  component:LoginFormComponent,
},
{
  path:'Registation',
  component:RegistrationFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
