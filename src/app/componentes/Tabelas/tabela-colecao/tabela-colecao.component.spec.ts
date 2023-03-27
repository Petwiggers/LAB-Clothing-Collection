import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaColecaoComponent } from './tabela-colecao.component';

describe('TabelaColecaoComponent', () => {
  let component: TabelaColecaoComponent;
  let fixture: ComponentFixture<TabelaColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaColecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
