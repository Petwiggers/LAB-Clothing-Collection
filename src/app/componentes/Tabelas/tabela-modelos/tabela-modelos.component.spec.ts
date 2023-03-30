import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaModelosComponent } from './tabela-modelos.component';

describe('TabelaModelosComponent', () => {
  let component: TabelaModelosComponent;
  let fixture: ComponentFixture<TabelaModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
