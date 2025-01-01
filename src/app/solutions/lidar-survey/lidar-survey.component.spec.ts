import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidarSurveyComponent } from './lidar-survey.component';

describe('LidarSurveyComponent', () => {
  let component: LidarSurveyComponent;
  let fixture: ComponentFixture<LidarSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LidarSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LidarSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
