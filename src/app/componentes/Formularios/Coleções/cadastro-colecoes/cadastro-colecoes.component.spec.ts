import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroColecoesComponent } from './cadastro-colecoes.component';

describe('CadastroColecoesComponent', () => {
  let component: CadastroColecoesComponent;
  let fixture: ComponentFixture<CadastroColecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroColecoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
