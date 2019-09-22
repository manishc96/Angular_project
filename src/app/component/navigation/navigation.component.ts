import { Component, OnInit } from '@angular/core';
import { UserRegisterServices } from 'src/app/shared/model/services/login.services';
import { Ilogin } from 'src/app/shared/model/login';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

 public currentUser:Ilogin;
  constructor(private userRegisterServices: UserRegisterServices) { }

  ngOnInit() {
    this.userRegisterServices.currentUser.subscribe((x=>{
      this.currentUser=x;
    }));
  }
Logout(){
this.userRegisterServices.userLogout();
}
}
