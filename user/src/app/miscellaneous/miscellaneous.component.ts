import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { PoetryDto } from '../dto/poetry-dto';
import { PoetryService } from '../services/poetry.service';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {

  email: string = '';

  poetries : PoetryDto [] = [];

  constructor(public sharedService:SharedService,private poetryService:PoetryService){}

  ngOnInit(): void {
    this.poetryService.mis().subscribe(data=>{
      this.poetries = data.data;
    });
  }

  subscribe() {
    throw new Error('Method not implemented.');
  }

}
