import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeAnalysisComponent } from './crime-analysis.component';

describe('CrimeAnalysisComponent', () => {
  let component: CrimeAnalysisComponent;
  let fixture: ComponentFixture<CrimeAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
