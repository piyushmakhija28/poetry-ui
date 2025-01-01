import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { PoetryDto } from '../dto/poetry-dto';

@Component({
  selector: 'app-read-poetry',
  templateUrl: './read-poetry.component.html',
  styleUrls: ['./read-poetry.component.css']
})
export class ReadPoetryComponent implements OnInit {

  @Input("id") id: number = 0;

  poetry: PoetryDto = {
    id: 0,
    category: '',
    description: '',
    imageUrl: '',
    poetryLikesCount: 0,
    tags: '',
    title: ''
  }

  constructor(private activeRoute: ActivatedRoute, public sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.sharedService.readPoetry(this.id).subscribe(data=>{
      this.poetry = data.data;
    });
  }

}
