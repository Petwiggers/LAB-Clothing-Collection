import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoMedioComponent } from './orcamento-medio.component';

describe('OrcamentoMedioComponent', () => {
  let component: OrcamentoMedioComponent;
  let fixture: ComponentFixture<OrcamentoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcamentoMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcamentoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
