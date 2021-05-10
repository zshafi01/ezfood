import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConformationComponent } from './components/conformation/conformation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ListoffoodsComponent } from './components/listoffoods/listoffoods.component';
import { LoginComponent } from './components/login/login.component';
import { PayComponent } from './components/pay/pay.component';
import { RegisterComponent } from './components/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdatefoodComponent } from './components/updatefood/updatefood.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path:'home', component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registerfood', component: RegisterComponent },
  { path: 'listoffoods', component: ListoffoodsComponent },
  { path: 'updatefood/:id', component: UpdatefoodComponent },
  { path: 'checkout', component:CheckoutComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'pay', component:PayComponent},
  { path: 'conformation', component:ConformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
