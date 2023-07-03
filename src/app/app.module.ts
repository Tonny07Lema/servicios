import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ClienteComponent } from './registro/cliente/cliente.component';
import { ActualizarClienteComponent } from './registro/actualizar-cliente/actualizar-cliente.component';
import { CursoComponent } from './curso/curso.component';
import { RegistrarCursoComponent } from './curso/registrar-curso/registrar-curso.component';
import { ActualizarCursoComponent } from './curso/actualizar-curso/actualizar-curso.component';
import { RegistrarInscripcionComponent } from './inscripcion/registrar-inscripcion/registrar-inscripcion.component';
import { ActualizarInscripcionComponent } from './inscripcion/actualizar-inscripcion/actualizar-inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    MenuComponent,
    InscripcionComponent,
    ClienteComponent,
    ActualizarClienteComponent,
    CursoComponent,
    RegistrarCursoComponent,
    ActualizarCursoComponent,
    RegistrarInscripcionComponent,
    ActualizarInscripcionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
