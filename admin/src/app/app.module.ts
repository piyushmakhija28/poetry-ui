import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorityListComponent } from './authority-list/authority-list.component';
import { ApiService } from 'src/app/services/api.service';
import { AuthorityService } from './services/authority.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardService } from './services/dashboard.service';
import { PoetryListComponent } from './poetry-list/poetry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorityListComponent,
    UserListComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PoetryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiService, AuthorityService, UserService,{
    provide:HTTP_INTERCEPTORS,useClass:ApiService,multi:true
  },DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
