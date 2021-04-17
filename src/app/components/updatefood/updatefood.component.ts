import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { Food } from '../register/food.model';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit {

  idtoupdate:Number=-1;
  newfood: Food = new Food;
  constructor(
    private backendservices:BackendserviceService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idtoupdate = Number(params.get('id'));
 
    });
    this.backendservices
    .getfoodbyid(this.idtoupdate)
    .subscribe((foodtoupdate)=>{
     this.newfood=foodtoupdate as Food
    });
    
  }

   updatefood(){
    this.backendservices.updatefood(this.newfood).subscribe(food=>{
      console.log("saved food is:",JSON.stringify(food));
      this.router.navigate(['listoffoods']);
      
    },
    error=>{
      console.log("Error is:",error);
    })
  }

}


