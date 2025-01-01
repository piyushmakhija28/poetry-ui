import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RegistrationForm } from '../form/registration-form';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpService:HttpService) { }

  register(registrationForm:RegistrationForm){
    return this.httpService.post('http://localhost:8080/api/v1/register',registrationForm);
  }

}
