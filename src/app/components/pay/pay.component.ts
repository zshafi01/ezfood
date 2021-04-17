import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { Pay } from './Pay.models';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  pay: Pay = new Pay;
  constructor(private backendService: BackendserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  payment() {
    debugger
    this.backendService.addpay(this.pay).subscribe(pay => {
      console.log("save pay is", JSON.stringify(pay));

      this.router.navigate(['conformation']);
    },
      error => {
        console.log("Error is:", error);

      })
  }
}