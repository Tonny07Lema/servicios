import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInscripcionComponent } from './actualizar-inscripcion.component';

describe('ActualizarInscripcionComponent', () => {
  let component: ActualizarInscripcionComponent;
  let fixture: ComponentFixture<ActualizarInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarInscripcionComponent]
    });
    fixture = TestBed.createComponent(ActualizarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
