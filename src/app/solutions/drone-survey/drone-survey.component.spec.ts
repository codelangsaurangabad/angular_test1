import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneSurveyComponent } from './drone-survey.component';

describe('DroneSurveyComponent', () => {
  let component: DroneSurveyComponent;
  let fixture: ComponentFixture<DroneSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
