import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConsultantComponent } from './profile-consultant.component';

describe('ProfileConsultantComponent', () => {
  let component: ProfileConsultantComponent;
  let fixture: ComponentFixture<ProfileConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
