import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerConsultantComponent } from './owner-consultant.component';

describe('OwnerConsultantComponent', () => {
  let component: OwnerConsultantComponent;
  let fixture: ComponentFixture<OwnerConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
