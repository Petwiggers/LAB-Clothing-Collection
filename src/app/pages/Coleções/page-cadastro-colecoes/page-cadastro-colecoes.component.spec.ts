import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastroColecoesComponent } from './page-cadastro-colecoes.component';

describe('PageCadastroColecoesComponent', () => {
  let component: PageCadastroColecoesComponent;
  let fixture: ComponentFixture<PageCadastroColecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCadastroColecoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCadastroColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
