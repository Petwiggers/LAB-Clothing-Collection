import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModelosComponent } from './editar-modelos.component';

describe('EditarModelosComponent', () => {
  let component: EditarModelosComponent;
  let fixture: ComponentFixture<EditarModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
