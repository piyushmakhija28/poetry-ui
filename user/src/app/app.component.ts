import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDropdownVisible: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService,public sharedService:SharedService) { 
    
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  logout() {
    this.authenticationService.logout().subscribe(data => {
      localStorage.clear();
      this.sharedService.isLoggedIn = false;
      this.router.navigateByUrl('/login');
    },(error)=>{
      localStorage.clear();
      this.sharedService.isLoggedIn=false;
      this.router.navigateByUrl('/login');
    });
  }
}
