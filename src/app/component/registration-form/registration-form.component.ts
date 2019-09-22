import { Component, OnInit } from '@angular/core';
import{Validators,FormBuilder, FormGroup} from '@angular/forms';
import {IRegister} from '../../shared/model/Registration'
import {UserRegisterServices} from '../../shared/model/services/login.services';
import { Router } from '@angular/router';
import {UserRegx} from '../../shared/model/user.regex'


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public Register:FormGroup;
public submitted:boolean=false;
  constructor(private fb:FormBuilder,private Registration:UserRegisterServices,private router:Router) { 

}
  

  ngOnInit() {
    this.Register=this.fb.group({
      FirstName:['',[Validators.required,Validators.minLength(5)]],
      LastName:['',[Validators.required,Validators.minLength(5)]],
      MobileNo:['',[Validators.required,Validators.minLength(10)]],
      EmailId:['',[Validators.required,Validators.minLength(5),UserRegx.Email]],
      Address:['',[Validators.required]],
     UserLogin:this.fb.group({
       UserName:['',[Validators.required,UserRegx.Username]],
       Password:['',[Validators.required,UserRegx.Password]]
     })
      
    
  })

}
Save(data:IRegister){
  this.submitted=true;
  if(!this.Register.valid)
  {return;}
  console.log(data);
  
  this.Registration.userRegistration(data).subscribe(data=>{
    
      this.router.navigateByUrl('/login');
   
    
    
    console.log(data)
   
  })
}
}