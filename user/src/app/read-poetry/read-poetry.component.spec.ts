import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPoetryComponent } from './read-poetry.component';

describe('ReadPoetryComponent', () => {
  let component: ReadPoetryComponent;
  let fixture: ComponentFixture<ReadPoetryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadPoetryComponent]
    });
    fixture = TestBed.createComponent(ReadPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
