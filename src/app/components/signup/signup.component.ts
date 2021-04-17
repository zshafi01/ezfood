import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from 'src/app/services/backendservice.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: User= new User;
  constructor(private backendService:BackendserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  signupuser(){
    this.user.role="user"
  this.backendService.newuser(this.user).subscribe(user=>{
    console.log("saved food is:",JSON.stringify(user));
    this.router.navigate(['login']);
    
  },
  error=>{
    console.log("Error is:",error);
  })
}
}