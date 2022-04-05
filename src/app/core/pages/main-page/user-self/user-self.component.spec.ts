import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelfComponent } from './user-self.component';

describe('UserSelfComponent', () => {
  let component: UserSelfComponent;
  let fixture: ComponentFixture<UserSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSelfComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
