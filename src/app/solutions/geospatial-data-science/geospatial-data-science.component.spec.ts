import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeospatialDataScienceComponent } from './geospatial-data-science.component';

describe('GeospatialDataScienceComponent', () => {
  let component: GeospatialDataScienceComponent;
  let fixture: ComponentFixture<GeospatialDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeospatialDataScienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeospatialDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
