import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMappingComponent } from './cad-mapping.component';

describe('CadMappingComponent', () => {
  let component: CadMappingComponent;
  let fixture: ComponentFixture<CadMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
