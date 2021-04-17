import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { Food } from '../register/food.model';

@Component({
  selector: 'app-listoffoods',
  templateUrl: './listoffoods.component.html',
  styleUrls: ['./listoffoods.component.css']
})
export class ListoffoodsComponent implements OnInit {

  isDeleted=true;

  foods:Food[]=[];
  
  constructor(private backendService:BackendserviceService) { }

  ngOnInit(): void {
    this.backendService
    .listoffood()
    .subscribe(
      (foodscoming)=>{
          this.foods=foodscoming as Food[]
      },
      (error)=>{
        console.log(error);
        
      },
      ()=>{console.log('finished');
      }
    )
  }


  deletefood(id:Number){
    console.log(id, "to be deleted");

    this.backendService.delete(id).subscribe(()=>{
      console.log("successfuly deleted");
      this.isDeleted=true;
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
    },
    (error)=>{
      console.log("Error happende");
      
    })
    

  }


}
