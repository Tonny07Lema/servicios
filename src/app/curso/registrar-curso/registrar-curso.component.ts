import { Component,OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-curso',
  templateUrl: './registrar-curso.component.html',
  styleUrls: ['./registrar-curso.component.css']
})
export class RegistrarCursoComponent implements OnInit{
  cursos:Curso = new Curso();

  constructor(private cursoService:CursoService,private router:Router) {}

  ngOnInit():void{
  }

  crearCurso(){
    this.cursoService.create(this.cursos).subscribe(
      data => {
        alert("Se creo Un Curso")
      })
  }
}
