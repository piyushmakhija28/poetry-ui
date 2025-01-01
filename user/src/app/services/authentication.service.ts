import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LoginForm } from '../form/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpService) { }

  login(loginForm: LoginForm) {
    return this.httpService.post('http://localhost:8080/api/v1/user/login', loginForm);
  }

  logout() {
    return this.httpService.putWithoutBody('http://localhost:8080/api/v1/logout');
  }
}
