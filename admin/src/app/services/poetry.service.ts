import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  constructor(private apiService:ApiService) { }

  get(){
    return this.apiService.get('http://localhost:8080/api/v1/poetries')
  }

  approve(id:bigint){
    return this.apiService.putWithoutBody('http://localhost:8080/api/v1/poetries/approve/'+id)
  }

  reject(id:bigint){
    return this.apiService.putWithoutBody('http://localhost:8080/api/v1/poetries/reject/'+id)
  }

  delete(id:bigint){
    return this.apiService.delete('http://localhost:8080/api/v1/poetries'+id)
  }
}
