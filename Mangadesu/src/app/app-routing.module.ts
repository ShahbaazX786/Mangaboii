import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { RulesComponent } from './components/rules/rules.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'rules',component:RulesComponent},
  {path:'search',component:SearchComponent},
  {path:'list',component:ListComponent},//I dont think this component is of any use.
  {path:'**',component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
