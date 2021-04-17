import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../components/checkout/Customer.model';
import { User } from '../components/login/user.model';
import { Pay } from '../components/pay/Pay.models';
import { Food } from '../components/register/food.model';


@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
  delete(id: Number):Observable<any>{
    return this.http.delete('http://localhost:8080/food/'+id);
  }

  constructor(private http:HttpClient) { }

  saveFood(food:Food):Observable<any>{
    return this.http.post("http://localhost:8080/addfood",food)
  }
  updatefood(food:Food):Observable<any>{
    return this.http.put("http://localhost:8080/updatefoods",food)
  }
  listoffood():Observable<any>{
    return this.http.get("http://localhost:8080/listoffood")
  }
  newuser(user:User):Observable<any>{
    debugger
    return this.http.post("http://localhost:8080/adduser",user)
    
  }
  login(user:User):Observable<any>{
    return this.http.post("http://localhost:8080/login", user,{responseType: 'text'})
  }
  getfoodbyid(id:Number):Observable<any>{
    debugger
return this.http.get("http://localhost:8080/food/" +id)
  }
addcustomer(customer:Customer):Observable<any>{
  return this.http.post("http://localhost:8080/addcustomer", customer)
}
addpay(pay:Pay):Observable<any>{
  return this.http.post("http://localhost:8080/addpay", pay)
}

}
