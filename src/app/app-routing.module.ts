import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CursoComponent } from './curso/curso.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ClienteComponent } from './registro/cliente/cliente.component';
import { ActualizarClienteComponent } from './registro/actualizar-cliente/actualizar-cliente.component';
import { RegistrarCursoComponent } from './curso/registrar-curso/registrar-curso.component';
import { ActualizarCursoComponent } from './curso/actualizar-curso/actualizar-curso.component';
import { RegistrarInscripcionComponent } from './inscripcion/registrar-inscripcion/registrar-inscripcion.component';
import { ActualizarInscripcionComponent } from './inscripcion/actualizar-inscripcion/actualizar-inscripcion.component';

const routes: Routes = [
  { path: '',redirectTo:'registro', pathMatch:'full'},
  { path: 'registro',component:RegistroComponent},
  { path: 'curso', component: CursoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'actualizarC/:id', component: ActualizarClienteComponent },
  { path: 'cursoR', component: RegistrarCursoComponent },
  { path: 'actualizarCur/:id', component: ActualizarCursoComponent },
  { path: 'inscripcionR', component: RegistrarInscripcionComponent },
  { path: 'actualizarIns/:id', component: ActualizarInscripcionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
