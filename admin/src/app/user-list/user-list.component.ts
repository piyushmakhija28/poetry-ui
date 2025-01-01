import { Component, OnInit } from '@angular/core';
import { UserForm } from '../form/user-form';
import { UserDto } from '../dto/user-dto';
import { UserService } from '../services/user.service';
import { AuthorityDto } from '../dto/authority-dto';
import { AuthorityService } from '../services/authority.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserDto[] = [];

  roles: AuthorityDto[] = [];

  userRoles: AuthorityDto[] = [];

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

  selectedUser: any = {}; // To hold the selected user for editing

  selectedRoleId: Set<bigint> = new Set();

  userForm: UserForm = {
    firstName: '',
    lastName: '',
    email: '',
    role: 1,
    mobileNumber: '',
    username: '',
    password: ''
  }; // To hold new user data for adding

  addModal: any;

  editModal: any;

  viewRolesModal: any;

  constructor(private userService: UserService, private authorityService: AuthorityService, private router: Router,private toasterService: ToastrService) { }

  ngOnInit(): void {
    const addModalElement = document.getElementById('addModal');
    const editModalElement = document.getElementById('editModal');
    const viewModalElement = document.getElementById('viewRolesModal');
    this.addModal = new (window as any).bootstrap.Modal(addModalElement);
    this.editModal = new (window as any).bootstrap.Modal(editModalElement);
    this.viewRolesModal = new (window as any).bootstrap.Modal(viewModalElement);
    this.getAllUsers();
    // Fetch all available roles
    this.getAllRoles();
  }

  private getAllRoles() {
    this.authorityService.get().subscribe(data => {
      if (data.success) {
        this.roles = data.data;
      }
    });
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      if (data.success) {
        this.users = data.data;
      }
    });
  }

  openAddModal() {
    this.resetUserForm();
    if (this.addModal) {
      this.addModal.show();
    }
  }

  openEditModal(id: bigint) {
    this.userService.get(id).subscribe(data => {
      if (data.success) {
        this.user = data.data;
        this.userForm.firstName = this.user.firstName;
        this.userForm.lastName = this.user.lastName;
        this.userForm.mobileNumber = this.user.mobileNumber;
        this.userForm.role = this.user.role;
        if (this.editModal) {
          this.editModal.show();
        }
      }
    });
  }

  deleteUser(id: bigint) {
    this.userService.delete(id).subscribe(data => {
      if (data.success) {
        this.getAllUsers();
      }
    });
  }

  updateUser() {
    this.userService.update(this.user.id, this.userForm).subscribe(data => {
      if (data.success) {
        this.user = {
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
        this.editModal.hide();
        this.getAllUsers();
      }
    });
  }

  addUser() {
    this.userService.add(this.userForm).subscribe(data => {
      if (data.success) {
        this.resetUserForm();
        this.addModal.hide();
        this.getAllUsers();
      }
    });
  }


  private resetUserForm() {
    this.userForm = {
      firstName: '',
      lastName: '',
      email: '',
      role: 1,
      mobileNumber: '',
      username: '',
      password: ''
    };
  }

  viewRoles(id: bigint) {
    this.selectedUser = { id: id };
    this.selectedRoleId.clear();
    this.userService.getUserAuthorities(id).subscribe(data => {
      if (data.success) {
        this.userRoles = data.data;
        if (this.viewRolesModal) {
          this.viewRolesModal.show();
        }
      }
    });
  }

  selectRoles(id: bigint, event: any) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.selectedRoleId.add(id);
      if (this.viewRolesModal) {
        console.log('Selected Role IDs:', this.selectedRoleId);
        this.viewRolesModal.show();
      }
    } else {
      this.selectedRoleId.delete(id);
      if (this.viewRolesModal) {
        console.log('Selected Role IDs:', this.selectedRoleId);
        this.viewRolesModal.show();
      }
    }
  }

  doSelectionOfUserRole(id: bigint) {
    const userRoleIndex = this.userRoles.map(userRole => userRole.id).indexOf(id);
    if (userRoleIndex == -1) {
      this.selectedRoleId.delete(id);
      return false;
    }
    this.selectedRoleId.add(id);
    return true;
  }

  saveRoles() {
    console.log(this.selectedRoleId);
    this.userService.saveUserAuthorities(this.selectedUser.id, Array.from(this.selectedRoleId)).subscribe(data => {
      if (data.success) {
        if (this.viewRolesModal) {
          this.selectedRoleId.clear();
          this.viewRolesModal.hide();
        }
      }
    });
  }

}
