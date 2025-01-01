import { Component } from '@angular/core';
import { UserDto } from '../dto/user-dto';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private toasterService: ToastrService) { }

  user: UserDto = {
    id: 0n,
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    mobileNumber: '',
    role: 1,
    emailVerified: false,
    mobileVerified: false,
    twoFactorAuthenticationEnabled: false,
    active: false,
    deleted: false
  };

  updateProfile() {
    throw new Error('Method not implemented.');
  }
  uploadProfilePic($event: Event) {
    throw new Error('Method not implemented.');
  }

}
