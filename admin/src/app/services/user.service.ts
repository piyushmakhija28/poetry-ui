import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserForm } from '../form/user-form';
import { Observable } from 'rxjs';
import { ApiResponseDto } from '../dto/api-response-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService:ApiService) { }

  add(userForm:UserForm):Observable<ApiResponseDto>{
    return this.apiService.post('http://localhost:8080/api/v1/users',userForm);
  }

  update(id:bigint,userForm:UserForm):Observable<ApiResponseDto>{
    return this.apiService.put('http://localhost:8080/api/v1/users/'+id,userForm);
  }

  get(id:bigint):Observable<ApiResponseDto>{
    return this.apiService.get('http://localhost:8080/api/v1/users/'+id);
  }

  delete(id:bigint):Observable<ApiResponseDto>{
    return this.apiService.delete('http://localhost:8080/api/v1/users/'+id);
  }

  getAllUsers():Observable<ApiResponseDto>{
    return this.apiService.get('http://localhost:8080/api/v1/users');
  }

  getUserAuthorities(id:bigint):Observable<ApiResponseDto>{
    return this.apiService.get('http://localhost:8080/api/v1/users/authorities/'+id);
  }

  saveUserAuthorities(id:bigint,authorityIds:bigint[]):Observable<ApiResponseDto>{
    return this.apiService.put('http://localhost:8080/api/v1/users/authorities/'+id,authorityIds);
  }
}
