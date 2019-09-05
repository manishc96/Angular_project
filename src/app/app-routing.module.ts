import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';


const routes: Routes = [{
path:'Home',
component:HomeComponent


},
{
  path:'Product',
  component:ProductComponent
},
{
  path:'productdetails/:id',
  component:ProductdetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
