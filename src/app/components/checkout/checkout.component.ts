import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  customer:Customer = new Customer;
  constructor(private backendservice:BackendserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  CustomerInfo(){
    this.backendservice.addcustomer(this.customer).subscribe(customer=>{
      console.log("saved admin is:",JSON.stringify(customer));
      this.router.navigate(['pay']);
    },
    error=>{
      console.log("Error is:",error);
      })
  }

}
