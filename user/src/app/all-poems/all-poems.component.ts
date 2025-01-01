import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { PoetryDto } from '../dto/poetry-dto';
import { PoetryService } from '../services/poetry.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-poems',
  templateUrl: './all-poems.component.html',
  styleUrls: ['./all-poems.component.css']
})
export class AllPoemsComponent implements OnInit {

  poetries: PoetryDto[] = [];

  public sharedService:SharedService = inject(SharedService);
  
  private poetryService: PoetryService = inject(PoetryService);

  constructor(private toastrService: ToastrService,private router:Router) { 
  }

  ngOnInit(): void {
    this.poetryService.get().subscribe(data=>{
      this.poetries = data.data;
      this.toastrService.success(data.message,'Success');
      this.sharedService.setLoggedInValue();
      this.sharedService.setPhoto();
      this.sharedService.setUserName();
    });
  }

}
