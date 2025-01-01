import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineMappingAnalysisComponent } from './mine-mapping-analysis.component';

describe('MineMappingAnalysisComponent', () => {
  let component: MineMappingAnalysisComponent;
  let fixture: ComponentFixture<MineMappingAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineMappingAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineMappingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
