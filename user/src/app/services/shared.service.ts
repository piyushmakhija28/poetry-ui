import { inject, Injectable } from '@angular/core';
import { PoetryService } from './poetry.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isLoggedIn: boolean = false;

  user: string = '';

  userProfilePhotoUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s';

  // private poetryService:PoetryService = inject(PoetryService);

  private httpService:HttpService = inject(HttpService);

  constructor(){}

  setLoggedInValue() {
    if (localStorage.hasOwnProperty('token')) {
      this.isLoggedIn = true;
    }
  }

  setUserName() {
    if (localStorage.hasOwnProperty('name')) {
      this.user = localStorage.getItem('name')?.toString() || '';
    }
  }

  setPhoto() {
    if (localStorage.hasOwnProperty('photo')) {
      this.userProfilePhotoUrl = localStorage.getItem('photo')?.toString() || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s';
    }
  }

  likePoetry(id: number) {
    console.log('Liked poetry with ID:', id);
  }

  dislikePoetry(id: number) {
    console.log('Disliked poetry with ID:', id);
  }

  commentOnPoetry(id: number) {
    console.log('Commented on poetry with ID:', id);
  }

  sharePoetry(id: number) {
    console.log('Shared poetry with ID:', id);
  }

  readPoetry(id: number) {
    return this.httpService.get('http://localhost:8080/api/v1/poetries/'+id);
  }

}
