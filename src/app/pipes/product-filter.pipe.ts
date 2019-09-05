import {Pipe,PipeTransform} from '@angular/core';
import{IproductData} from '../shared/model/productdata';

@Pipe({
name:'ProductFilter',
})
export class ProductFilterpipe implements PipeTransform{
    transform(val:IproductData[],arg:string){
if(!val|| !arg ){
    return val;
}
return val.filter(val=>val.product.toLowerCase().indexOf(arg.toLocaleLowerCase())!==-1);
    }

}