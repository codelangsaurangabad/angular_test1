import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDeskComponent } from './director-desk.component';

describe('DirectorDeskComponent', () => {
  let component: DirectorDeskComponent;
  let fixture: ComponentFixture<DirectorDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorDeskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
