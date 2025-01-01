import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiResponseDto } from '../dto/api-response-dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apiService:ApiService) { }

  getTotalUsersCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/users');
  }

  getActiveUsersCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/users/active');
  }

  getInActiveUsersCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/users/inactive');
  }

  getDeletedUsersCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/users/deleted');
  }

  getLoggedInUsersCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/users/loggedin');
  }

  getTotalPoemsCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/poems');
  }

  getApprovedPoemsCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/poems/approved');
  }

  getRejectedPoemsCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/poems/rejected');
  }

  getAwaitingPoemsCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/poems/awaiting');
  }

  getDeletedPoemsCount(){
    return this.apiService.get('http://localhost:8080/api/v1/dashboard/count/poems/deleted');
  }
}
