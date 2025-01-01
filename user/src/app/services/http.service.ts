import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponseDto } from '../dto/api-response-dto';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor {

  //private sharedService:SharedService = inject(SharedService);

  constructor(private http: HttpClient,private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error.error);
        if (error.status === 403) {
          // this.sharedService.isLoggedIn=false;
          // this.sharedService.user='';
          // this.sharedService.userProfilePhotoUrl='';
          localStorage.clear();
          this.router.navigateByUrl('/login');
        }
        // Handle other status codes here if necessary
        return throwError(error);
      })
    );
  }

  // GET method
  get(url: string): Observable<ApiResponseDto> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (localStorage.getItem('token')) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    const httpOptions = {
      headers: headers
    };
    return this.http.get<ApiResponseDto>(url, httpOptions);
  }

  // POST method
  post(url: string, item?: any): Observable<ApiResponseDto> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (localStorage.getItem('token')) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    const httpOptions = {
      headers: headers
    };
    return this.http.post<ApiResponseDto>(url, JSON.stringify(item), httpOptions);
  }

  // PUT method
  put(url: string, item: any): Observable<ApiResponseDto> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (localStorage.getItem('token')) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    const httpOptions = {
      headers: headers
    };
    return this.http.put<ApiResponseDto>(url, JSON.stringify(item), httpOptions);
  }

  // PUT method
  putWithoutBody(url: string): Observable<ApiResponseDto> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (localStorage.getItem('token')) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    const httpOptions = {
      headers: headers
    };
    return this.http.put<ApiResponseDto>(url, null, httpOptions);
  }

  // DELETE method
  delete(url: string): Observable<ApiResponseDto> {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (localStorage.getItem('token')) {
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    const httpOptions = {
      headers: headers
    };
    return this.http.delete<ApiResponseDto>(url, httpOptions);
  }
}
