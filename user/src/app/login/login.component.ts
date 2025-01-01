import { Component } from '@angular/core';
import { LoginForm } from '../form/login-form';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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

  constructor(private authenticationService: AuthenticationService, private toastrService: ToastrService, private router: Router) { }

  login() {
    this.authenticationService.login(this.loginForm).subscribe(data => {
      if (data.success) {
        this.toastrService.success(data.message, 'Success');
        localStorage.setItem('token', data.data.accessToken);
        localStorage.setItem('name', data.data.firstName + " " + data.data.lastName);
        if (data.data.photo) {
          localStorage.setItem('photo', data.data.photo);
        }
        this.router.navigateByUrl('/all-poems');
      } else {
        this.toastrService.error(data.message);
      }
    }, (error: HttpErrorResponse) => {
      this.toastrService.error(error.error.message, 'Error');
    });
  }

}
