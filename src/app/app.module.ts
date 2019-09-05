import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProductComponent } from './component/product/product.component';
import{HttpClientModule} from '@angular/common/http';
import { ProductFilterpipe } from './pipes/product-filter.pipe';
import{ProductdetailsComponent} from './component/productdetails/productdetails.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProductComponent,ProductFilterpipe,ProductdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
