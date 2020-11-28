import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsProfileComponent } from './restaurants-profile.component';

describe('RestaurantsProfileComponent', () => {
  let component: RestaurantsProfileComponent;
  let fixture: ComponentFixture<RestaurantsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
