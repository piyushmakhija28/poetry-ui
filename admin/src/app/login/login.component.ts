import { Component } from '@angular/core';
import { LoginForm } from '../form/login-form';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: LoginForm = {
    username: '',
    password: ''
  }

  constructor(private router: Router,private authenticationService:AuthenticationService,private toasterService:ToastrService) { }

  login() {
    console.log(this.loginForm);
    this.authenticationService.login(this.loginForm).subscribe(data=>{
      if(data.success){
        this.toasterService.success(data.message,'Success');
        localStorage.setItem('token',data.data.accessToken);
        localStorage.setItem('name',data.data.firstName+" "+data.data.lastName);
        localStorage.setItem('photo',data.data.photo);
        this.router.navigateByUrl('/dashboard');
      }else{
        this.toasterService.error(data.message);
      }
    },(error:HttpErrorResponse)=>{
      this.toasterService.error(error.error.message,'Error');
    });
  }

}
