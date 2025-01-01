import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastralMappingComponent } from './cadastral-mapping.component';

describe('CadastralMappingComponent', () => {
  let component: CadastralMappingComponent;
  let fixture: ComponentFixture<CadastralMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastralMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastralMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
