import { Component } from '@angular/core';
import { RegistrationForm } from '../form/registration-form';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: RegistrationForm = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    role: 1,
    username: '',
    password: ''
  };

  constructor(private toasterService: ToastrService, private registrationService: RegistrationService) { }

  register() {
    this.registrationService.register(this.registrationForm).subscribe(data => {
      if (data.success) {
        this.toasterService.success(data.message, 'Success');
      } else {
        this.toasterService.error(data.message, 'Error');
      }
    });
  }

}
