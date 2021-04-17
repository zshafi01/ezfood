import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { Food } from '../register/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];
  
  constructor(private backendService:BackendserviceService) { }

  ngOnInit(): void {
    this.backendService
    .listoffood()
    .subscribe(
      (foodscoming)=>{
        // debugger
        this.foods=foodscoming as Food[]
      },
      (error)=>{
        console.log(error);
        
      },
      ()=>{console.log('finished');
      }
    )
  }

}
