import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCardComponent } from './travel-card.component';

describe('TravelCardComponent', () => {
  let component: TravelCardComponent;
  let fixture: ComponentFixture<TravelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
