import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { PoetryForm } from '../form/poetry-form';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  private httpService: HttpService = inject(HttpService);

  constructor() { }

  submitPoem(poetryForm: PoetryForm) {
    return this.httpService.post('http://localhost:8080/api/v1/poetries', poetryForm);
  }

  get() {
    return this.httpService.get('http://localhost:8080/api/v1/poetries');
  }

  getById(id:number) {
    return this.httpService.get('http://localhost:8080/api/v1/poetries/'+id);
  }

  nature() {
    return this.httpService.get('http://localhost:8080/api/v1/poetries/category/NATURE');
  }

  mis() {
    return this.httpService.get('http://localhost:8080/api/v1/poetries/category/MISC');
  }

  sad() {
    return this.httpService.get('http://localhost:8080/api/v1/poetries/category/SAD');
  }

  romantic() {
    return this.httpService.get('http://localhost:8080/api/v1/poetries/category/ROMANTIC');
  }
}
