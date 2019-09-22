import{Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Ilogin} from '../../model/login';
import{map,debounceTime} from 'rxjs/operators';
import { Observable,BehaviorSubject } from 'rxjs';
import { IRegister } from '../Registration';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class UserRegisterServices{
    private loginEndPoint:string='http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    private RegistrationEndpoint='http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync'

    public header:HttpHeaders;
private loggedIn:BehaviorSubject<Ilogin>;
public currentUser:Observable<Ilogin>

    constructor(private http:HttpClient,private router:Router){
        this.loggedIn=new BehaviorSubject<Ilogin>(JSON.parse(localStorage.getItem('currentUser')))
        this.currentUser=this.loggedIn.asObservable();
        this.header=new HttpHeaders({'Content-Type':'application/json'})
    }
    get userLoggedIn():Ilogin{
        return this.loggedIn.value;

    }
    userLogin(Item:Ilogin):Observable<Ilogin>{
        return this.http.post<Ilogin>(this.loginEndPoint,JSON.stringify(Item),{headers:this.header})
        .pipe(map(Item=>{
            if(Item && Item.UserIdentity){
            localStorage.setItem('currentUser',JSON.stringify(Item));
            this.loggedIn.next(Item);
            return Item;
        };
        return Item;
    }))
    }
    userRegistration(item1:IRegister):Observable<IRegister>{
        return this.http.post<IRegister>(this.RegistrationEndpoint,JSON.stringify(item1),{headers:this.header})
            }
    userLogout(){
         localStorage.removeItem('currentUser');
         this.loggedIn.next(null);
         this.router.navigateByUrl('/login')

     }
}