import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarColecoesComponent } from './editar-colecoes.component';

describe('EditarColecoesComponent', () => {
  let component: EditarColecoesComponent;
  let fixture: ComponentFixture<EditarColecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarColecoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
