import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousComponent } from './miscellaneous.component';

describe('MiscellaneousComponent', () => {
  let component: MiscellaneousComponent;
  let fixture: ComponentFixture<MiscellaneousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscellaneousComponent]
    });
    fixture = TestBed.createComponent(MiscellaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
