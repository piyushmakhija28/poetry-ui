import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityListComponent } from './authority-list.component';

describe('AuthorityListComponent', () => {
  let component: AuthorityListComponent;
  let fixture: ComponentFixture<AuthorityListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorityListComponent]
    });
    fixture = TestBed.createComponent(AuthorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
