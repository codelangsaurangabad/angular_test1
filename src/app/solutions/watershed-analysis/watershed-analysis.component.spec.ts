import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatershedAnalysisComponent } from './watershed-analysis.component';

describe('WatershedAnalysisComponent', () => {
  let component: WatershedAnalysisComponent;
  let fixture: ComponentFixture<WatershedAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatershedAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatershedAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
