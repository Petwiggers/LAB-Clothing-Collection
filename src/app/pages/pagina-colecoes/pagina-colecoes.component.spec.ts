import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaColecoesComponent } from './pagina-colecoes.component';

describe('PaginaColecoesComponent', () => {
  let component: PaginaColecoesComponent;
  let fixture: ComponentFixture<PaginaColecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaColecoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
