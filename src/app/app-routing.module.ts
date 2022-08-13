import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { UpdateComponent } from './Components/update/update.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { CreatelabelComponent } from './Components/createlabel/createlabel.component';

const routes: Routes = [
  { path:'', redirectTo:"/login", pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'resetPassword/:token', component: ResetPasswordComponent},
  {path: 'forgot-email', component:ForgotEmailComponent},
 
  {path: 'dashboard', component:DashboardComponent,

  children:[
    { path:'', redirectTo:"/dashboard/getallnotes", pathMatch:'full' },
    { path:'getallnotes',component:GetallnotesComponent},
    { path:'archiveNotes',component:ArchivenotesComponent},  
    { path:'trash',component:TrashnotesComponent},
    // {path: 'labels',component:CreatelabelComponent},
    
  
   ]},
   { path:'icons',component:IconsComponent},
   { path:'update',component:UpdateComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
