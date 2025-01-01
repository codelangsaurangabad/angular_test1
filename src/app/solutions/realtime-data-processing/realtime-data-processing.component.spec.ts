import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDataProcessingComponent } from './realtime-data-processing.component';

describe('RealtimeDataProcessingComponent', () => {
  let component: RealtimeDataProcessingComponent;
  let fixture: ComponentFixture<RealtimeDataProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeDataProcessingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeDataProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
