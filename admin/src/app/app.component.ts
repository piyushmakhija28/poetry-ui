import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoginPage: boolean = false;

  fullName:string=''

  photo:string=''

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService, private toasterService: ToastrService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update `isLoginPage` based on the current route
        this.isLoginPage = this.router.url === '/login';
      }
    });
  }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('name') as string;
    this.photo = localStorage.getItem('photo') as string;
  }

  logout() {
    this.authenticationService.logout().subscribe(data => {
      this.toasterService.success('Logout Successful.', 'Success');
      this.router.navigateByUrl('/login');
      localStorage.removeItem('token');
    });
  }


}
