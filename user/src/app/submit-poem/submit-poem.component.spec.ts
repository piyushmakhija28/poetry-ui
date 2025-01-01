import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPoemComponent } from './submit-poem.component';

describe('SubmitPoemComponent', () => {
  let component: SubmitPoemComponent;
  let fixture: ComponentFixture<SubmitPoemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPoemComponent]
    });
    fixture = TestBed.createComponent(SubmitPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
