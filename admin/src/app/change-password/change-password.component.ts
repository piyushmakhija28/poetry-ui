import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor() { }

  changePassword() {
    // Handle the password change logic, potentially via API
    console.log('Changing password for', this.passwordData);

    // You can add the service call to change password here
  }

}
