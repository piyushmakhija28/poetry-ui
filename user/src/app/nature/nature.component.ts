import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { PoetryDto } from '../dto/poetry-dto';
import { PoetryService } from '../services/poetry.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent {

  email: string = '';
  
  poetries : PoetryDto [] = [];

  constructor(public sharedService:SharedService,private poetryService:PoetryService){}

  ngOnInit(): void {
    this.poetryService.nature().subscribe(data=>{
      this.poetries = data.data;
    });
  }
  subscribe() {
    throw new Error('Method not implemented.');
  }

}
