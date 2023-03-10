import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'creatuser', component: CreatUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'show-solutions/:questionid', component: SolutionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
