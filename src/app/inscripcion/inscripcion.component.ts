import { Component,OnInit } from '@angular/core';
import { InscripcionService } from './inscripcion.service';
import { inscripcion } from './inscripcion';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit{
  inscripciones:any =[];
  constructor(private inscripcionService:InscripcionService){}
  
  ngOnInit(): void {
    this.inscripcionService.getAll().subscribe(
      e => this.inscripciones=e
    )
  }
  delete(inscripciones:inscripcion):void{
    this.inscripcionService.delete(inscripciones.id).subscribe(
      res=> this.inscripcionService.getAll().subscribe(
        Response=> this.inscripciones=Response
      )
    )
  }
}
