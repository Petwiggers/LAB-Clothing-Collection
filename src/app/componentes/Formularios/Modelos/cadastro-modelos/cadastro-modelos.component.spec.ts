import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroModelosComponent } from './cadastro-modelos.component';

describe('CadastroModelosComponent', () => {
  let component: CadastroModelosComponent;
  let fixture: ComponentFixture<CadastroModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
