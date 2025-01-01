import { Component, OnInit } from '@angular/core';
import { AuthorityService } from '../services/authority.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authority-list',
  templateUrl: './authority-list.component.html',
  styleUrls: ['./authority-list.component.css']
})
export class AuthorityListComponent implements OnInit {

  editAuthorityModal: any;

  addAuthorityModal: any;

  authority: string = '';

  items: any[] = [];

  constructor(private authorityService: AuthorityService, private router: Router, private toasterService: ToastrService) {

  }

  ngOnInit(): void {
    const editModalElement = document.getElementById('editAuthorityModal');
    const addModalElement = document.getElementById('addAuthorityModal');
    this.editAuthorityModal = new (window as any).bootstrap.Modal(editModalElement);
    this.addAuthorityModal = new (window as any).bootstrap.Modal(addModalElement);
    this.get();
  }

  selectedItem: any = {}; // To hold the item being edited

  private get() {
    this.authorityService.get().subscribe(data => {
      if (data.success) {
        this.items = data.data;
        this.toasterService.success(data.message,'Success');
      }
    });
  }

  editItem(id: bigint) {
    this.authorityService.getById(id).subscribe(data => {
      if (data.success) {
        this.toasterService.success(data.message,'Success');
        this.selectedItem = data.data; // Clone the item to avoid directly mutating the original
        if (this.editAuthorityModal) {
          this.editAuthorityModal.show();
        }
      }
    });
  }

  updateItem() {
    this.authorityService.update(this.selectedItem.id, this.selectedItem.name).subscribe(data => {
      if (data.success) {
        this.toasterService.success(data.message,'Success');
        if (this.editAuthorityModal) {
          this.editAuthorityModal.hide(); // Hide the modal after updating
        }
        this.get();
      }
    });
  }

  deleteItem(id: bigint) {
    this.authorityService.delete(id).subscribe(data => {
      if (data.success) {
        this.toasterService.success(data.message,'Success');
        this.get();
      }
    });
  }

  openAddModal() {
    this.authority = ''; // Reset new item name before opening modal
    if (this.addAuthorityModal) {
      this.addAuthorityModal.show();
    }
  }

  addItem() {
    this.authorityService.add(this.authority).subscribe(data => {
      if (data.success) {
        this.toasterService.success(data.message,'Success');
        const modalElement = document.getElementById('addAuthorityModal');
        if (this.addAuthorityModal) {
          this.addAuthorityModal.hide(); // Hide the modal after adding
        }
        this.get();
      }
    });
  }
}
