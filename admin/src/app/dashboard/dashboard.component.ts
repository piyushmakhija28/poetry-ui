import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  totalUsersCount = 0;
  activeUsersCount = 0;
  inActiveUsersCount = 0;
  deletedUsersCount = 0;
  loggedInUsersCount = 0;
  totalPoemsCount = 0;
  approvedPoemsCount = 0;
  rejectedPoemsCount = 0;
  leftForApprovalOrRejectionPoemsCount = 0;
  deletedPoemsCount = 0;
  fullName:string='';

  constructor(private dashboardService:DashboardService){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeUserRegistrationsChart();
      this.initializePoemSubmissionsChart();
    }, 500); // 500ms delay to wait for the data to be loaded
    this.fullName = localStorage.getItem('name') as string;
    console.log(this.fullName);
    this.dashboardService.getTotalUsersCount().subscribe(data=>{
      this.totalUsersCount = data.data;
    });
    this.dashboardService.getActiveUsersCount().subscribe(data=>{
      this.activeUsersCount = data.data;
    });
    this.dashboardService.getInActiveUsersCount().subscribe(data=>{
      this.inActiveUsersCount = data.data;
    });
    this.dashboardService.getDeletedUsersCount().subscribe(data=>{
      this.deletedUsersCount = data.data;
    });
    this.dashboardService.getLoggedInUsersCount().subscribe(data=>{
      this.loggedInUsersCount = data.data;
    });
    this.dashboardService.getTotalPoemsCount().subscribe(data=>{
      this.totalPoemsCount = data.data;
    });
    this.dashboardService.getApprovedPoemsCount().subscribe(data=>{
      this.approvedPoemsCount = data.data;
    });
    this.dashboardService.getRejectedPoemsCount().subscribe(data=>{
      this.rejectedPoemsCount = data.data;
    });
    this.dashboardService.getAwaitingPoemsCount().subscribe(data=>{
      this.leftForApprovalOrRejectionPoemsCount = data.data;
    });
    this.dashboardService.getDeletedPoemsCount().subscribe(data=>{
      this.deletedPoemsCount = data.data;
    });
  }

  initializeUserRegistrationsChart() {
    const canvas = document.getElementById('userRegistrationsChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'User Registrations',
            data: [10, 20, 15, 30, 40, 50, 45, 30, 20, 25, 35, 40], // Example data, replace with your actual data
            backgroundColor: '#4CAF50',
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }

  initializePoemSubmissionsChart() {
    const canvas = document.getElementById('poemSubmissionsChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Poem Submissions',
            data: [5, 10, 8, 12, 20, 15, 10, 15, 20, 25, 30, 35], // Example data, replace with your actual data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: true,
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }

  logout() {

  }

}
