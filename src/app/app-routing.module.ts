import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { IconsComponent } from './Components/icons/icons.component';

const routes: Routes = [
  { path:'', redirectTo:"/login", pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'resetPassword/:token', component: ResetPasswordComponent},
  {path: 'forgot-email', component:ForgotEmailComponent},
  {path: 'dashboard', component:DashboardComponent,

  children:[
    { path:'', redirectTo:"/dashboard/getallnotes", pathMatch:'full' },
    { path:'getallnotes',component:GetallnotesComponent}    
  
   ]},
   { path:'icons',component:IconsComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
