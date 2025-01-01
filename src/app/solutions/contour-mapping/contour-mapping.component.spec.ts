import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContourMappingComponent } from './contour-mapping.component';

describe('ContourMappingComponent', () => {
  let component: ContourMappingComponent;
  let fixture: ComponentFixture<ContourMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContourMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContourMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
