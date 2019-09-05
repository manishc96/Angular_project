import { Component, OnInit } from '@angular/core';
import{userService} from '../../shared/model/services/user.services';
import{IproductData} from '../../shared/model/productdata';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public userproductdetails:IproductData[];
  public productid:number;
  public model:IproductData[];

  constructor(private userdetailsdata:userService,private route:ActivatedRoute) { 
   
  }

  ngOnInit() {
    
  this.route.params.subscribe(data=>{this.productid=data["id"]});
  this.userdetailsdata.User().subscribe(data=>{
    this.model=data.filter(val=>val.productId==this.productid);
    return this.model;
  });
     
  
  }

}
