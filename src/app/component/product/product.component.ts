import { Component, OnInit,ElementRef,Input } from '@angular/core';
import {userService} from '../../shared/model/services/user.services';
import {IproductData} from '../../shared/model/productdata';
import{} from '../../pipes/product-filter.pipe';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public userdata:IproductData[];
public SearchProduct:any;
public isshow:boolean=false;
public title:number;
  constructor(private userservice: userService,private el:ElementRef ) {
    
  }
  imgFunct(){
this.isshow=!this.isshow;

  }
  

  ngOnInit() {
    
    this.userservice.User().subscribe(data =>{
    this.userdata=data;
    console.log(data);

    }
      );
    

    }
  }


