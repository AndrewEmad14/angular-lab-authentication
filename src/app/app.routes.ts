import { Routes } from '@angular/router';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { Register } from './register/register';
import { Home } from './home/home';

export const routes: Routes = [
  
  {path:'',component:Home},
  {path:'home',component:Home},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'**',component:NotFound},
  

];
