import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEditarModelosComponent } from './pagina-editar-modelos.component';

describe('PaginaEditarModelosComponent', () => {
  let component: PaginaEditarModelosComponent;
  let fixture: ComponentFixture<PaginaEditarModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEditarModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEditarModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
