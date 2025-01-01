import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { PoetryDto } from '../dto/poetry-dto';
import { PoetryService } from '../services/poetry.service';

@Component({
  selector: 'app-romantic',
  templateUrl: './romantic.component.html',
  styleUrls: ['./romantic.component.css']
})
export class RomanticComponent {

  email: string = '';

  poetries: PoetryDto[] = [];

  constructor(public sharedService: SharedService, private poetryService: PoetryService) { }

  ngOnInit(): void {
    this.poetryService.romantic().subscribe(data => {
      this.poetries = data.data;
    });
  }

  subscribe() {
    throw new Error('Method not implemented.');
  }

}
