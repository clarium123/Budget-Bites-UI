import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealWeekCardComponent } from './meal-week-card.component';

describe('MealWeekCardComponent', () => {
  let component: MealWeekCardComponent;
  let fixture: ComponentFixture<MealWeekCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealWeekCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealWeekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
