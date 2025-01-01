import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NatureComponent } from './nature/nature.component';
import { RomanticComponent } from './romantic/romantic.component';
import { SadComponent } from './sad/sad.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { SharedService } from './services/shared.service';
import { RegistrationService } from './services/registration.service';
import { LoginService } from './services/login.service';
import { ReadPoetryComponent } from './read-poetry/read-poetry.component';
import { SubmitPoemComponent } from './submit-poem/submit-poem.component';
import { AllPoemsComponent } from './all-poems/all-poems.component';
import { HttpService } from './services/http.service';
import { PoetryService } from './services/poetry.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NatureComponent,
    RomanticComponent,
    SadComponent,
    MiscellaneousComponent,
    ReadPoetryComponent,
    SubmitPoemComponent,
    AllPoemsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [SharedService,PoetryService,RegistrationService,LoginService,{
    provide:HTTP_INTERCEPTORS,useClass:HttpService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
