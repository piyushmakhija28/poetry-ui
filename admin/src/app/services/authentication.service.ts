import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiResponseDto } from '../dto/api-response-dto';
import { Observable } from 'rxjs';
import { LoginForm } from '../form/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService:ApiService) { }

  login(loginForm:LoginForm):Observable<ApiResponseDto>{
    return this.apiService.post('http://localhost:8080/api/v1/login',loginForm);
  }

  logout():Observable<ApiResponseDto>{
    return this.apiService.putWithoutBody('http://localhost:8080/api/v1/logout');
  }
}
