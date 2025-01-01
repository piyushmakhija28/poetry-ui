import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureComponent } from './nature.component';

describe('NatureComponent', () => {
  let component: NatureComponent;
  let fixture: ComponentFixture<NatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NatureComponent]
    });
    fixture = TestBed.createComponent(NatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
