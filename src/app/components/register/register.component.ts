import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { Food } from './food.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newfood: Food = new Food;

  constructor(private backendService:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSelectFile(event:Event){
    debugger
    let ev=(event.target as HTMLInputElement);
    if (ev.files && ev.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(ev.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // this.newfood.image = ev.files[0].re;
      }
  }
}

  addfood(){
    debugger
    this.newfood.image = this.newfood.image.replace("C:\\fakepath\\", "assets/image/");
    this.backendService.saveFood(this.newfood).subscribe(food=>{
      console.log("saved food is:",JSON.stringify(food));
      this.router.navigate(['listoffoods']);
      
    },
    error=>{
      console.log("Error is:",error);
    })
  }

}
