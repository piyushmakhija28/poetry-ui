import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ApiResponseDto } from '../dto/api-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  constructor(private apiService:ApiService) { }

  get():Observable<ApiResponseDto>{
      return this.apiService.get('http://localhost:8080/api/v1/authorities');
  }

  getById(id:bigint):Observable<ApiResponseDto>{
    return this.apiService.get('http://localhost:8080/api/v1/authorities/'+id);
  }

  add(authority:string):Observable<ApiResponseDto>{
    return this.apiService.post('http://localhost:8080/api/v1/authorities/'+authority);
  }

  update(id:bigint,authority:string):Observable<ApiResponseDto>{
    return this.apiService.putWithoutBody('http://localhost:8080/api/v1/authorities/'+id+'/'+authority);
  }

  delete(id:bigint):Observable<ApiResponseDto>{
    return this.apiService.delete('http://localhost:8080/api/v1/authorities/'+id);
  }
}
