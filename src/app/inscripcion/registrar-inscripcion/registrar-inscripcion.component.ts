import { Component,OnInit } from '@angular/core';
import { inscripcion } from '../inscripcion';
import { InscripcionService } from '../inscripcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-inscripcion',
  templateUrl: './registrar-inscripcion.component.html',
  styleUrls: ['./registrar-inscripcion.component.css']
})
export class RegistrarInscripcionComponent implements OnInit{
  inscripciones:inscripcion = new inscripcion();

  constructor(private inscripcionService:InscripcionService,private router:Router) {}

  ngOnInit():void{
  }

  crearInscripcion(){
    this.inscripcionService.create(this.inscripciones).subscribe(
      data => {
        alert("Se Inscribio")
      })
  }
}
