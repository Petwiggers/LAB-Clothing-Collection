import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDashboardComponent } from './tabela-dashboard.component';

describe('TabelaDashboardComponent', () => {
  let component: TabelaDashboardComponent;
  let fixture: ComponentFixture<TabelaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
