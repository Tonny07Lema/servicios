import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCursoComponent } from './actualizar-curso.component';

describe('ActualizarCursoComponent', () => {
  let component: ActualizarCursoComponent;
  let fixture: ComponentFixture<ActualizarCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCursoComponent]
    });
    fixture = TestBed.createComponent(ActualizarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
