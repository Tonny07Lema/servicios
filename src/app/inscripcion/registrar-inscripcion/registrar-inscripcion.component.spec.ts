import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInscripcionComponent } from './registrar-inscripcion.component';

describe('RegistrarInscripcionComponent', () => {
  let component: RegistrarInscripcionComponent;
  let fixture: ComponentFixture<RegistrarInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarInscripcionComponent]
    });
    fixture = TestBed.createComponent(RegistrarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
