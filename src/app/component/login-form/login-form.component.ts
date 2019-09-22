import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import{UserRegisterServices} from '../../shared/model/services/login.services';
import{Ilogin} from '../../shared/model/login'
import { Router } from '@angular/router';
import { UserRegx } from 'src/app/shared/model/user.regex';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
    public Login:FormGroup;
public ValidateError:string;
public submitted:boolean=false;

  constructor(private fb:FormBuilder,private userService:UserRegisterServices,private router:Router) { }

  ngOnInit() {
    this.Login =this.fb.group({
      'UserLogin':this.fb.group({
'UserName':['',[Validators.required,UserRegx.Username]],
'Password': ['',[Validators.required,UserRegx.Password]]
      })
    })
  }
Save(data:Ilogin){
  this.submitted=true;
  if(!this.Login.valid){return;}
  console.log(data);
  this.userService.userLogin(data).subscribe(data=>{
    if(data.UserIdentity){
      alert('login succesful');
    this.router.navigateByUrl('/Home');
    
    
    console.log(data);}
    else{
      console.log(data.Error)
this.ValidateError=data.Error;

    }})
}
}

  


