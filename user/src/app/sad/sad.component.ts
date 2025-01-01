import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { PoetryDto } from '../dto/poetry-dto';
import { PoetryService } from '../services/poetry.service';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.css']
})
export class SadComponent {

  email: string = '';

  poetries : PoetryDto [] = [];

  constructor(public sharedService:SharedService,private poetryService:PoetryService){}

  ngOnInit(): void {
    this.poetryService.sad().subscribe(data=>{
      this.poetries = data.data;
    });
  }

  subscribe(){

  }

}
