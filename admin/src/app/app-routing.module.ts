import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorityListComponent } from './authority-list/authority-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PoetryListComponent } from './poetry-list/poetry-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: AppComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'authorities',
    component: AuthorityListComponent
  }, {
    path: 'users',
    component: UserListComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'changePassword',
    component: ChangePasswordComponent
  }, {
    path: 'poetries',
    component: PoetryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
