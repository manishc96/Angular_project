import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import{IproductData} from '../productdata'
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})



export class userService{
    public userEndpoint:string='../../../../assets/productdetails.json';
    constructor(private http:HttpClient){}
    User():Observable<IproductData[]>{
        return this.http.get<IproductData[]>(this.userEndpoint);
    }
}
