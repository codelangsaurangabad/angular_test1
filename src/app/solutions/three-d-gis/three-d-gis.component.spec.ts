import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDGisComponent } from './three-d-gis.component';

describe('ThreeDGisComponent', () => {
  let component: ThreeDGisComponent;
  let fixture: ComponentFixture<ThreeDGisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDGisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
