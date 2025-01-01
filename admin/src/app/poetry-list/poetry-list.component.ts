import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../services/poetry.service';
import { PoetryDto } from '../dto/poetry-dto';

@Component({
  selector: 'app-poetry-list',
  templateUrl: './poetry-list.component.html',
  styleUrls: ['./poetry-list.component.css']
})
export class PoetryListComponent implements OnInit {

  poetries: PoetryDto[] = [];

  constructor(private poetryService: PoetryService) { }

  ngOnInit(): void {
    this.poetryService.get().subscribe(data=>{
      this.poetries.push(data.data);
    });
  }

  reject(id: bigint) {
    this.poetryService.reject(id).subscribe(data=>{
      this.poetries.push(data.data);
    });
  }
  approve(id: bigint) {
    this.poetryService.approve(id).subscribe(data=>{
      this.poetries.push(data.data);
    });
  }
  delete(id: bigint) {
    this.poetryService.delete(id).subscribe(data=>{
      this.poetries.push(data.data);
    });
  }

}
