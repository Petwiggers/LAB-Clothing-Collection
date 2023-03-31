import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCadastroModelosComponent } from './pagina-cadastro-modelos.component';

describe('PaginaCadastroModelosComponent', () => {
  let component: PaginaCadastroModelosComponent;
  let fixture: ComponentFixture<PaginaCadastroModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCadastroModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCadastroModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
