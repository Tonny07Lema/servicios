import { Component,OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{
  cursos:any =[];

  constructor(private cursoService:CursoService){}

  ngOnInit(): void {
    this.cursoService.getAll().subscribe(
      e => this.cursos=e
    )
  }
  delete(cursos:Curso):void{
    this.cursoService.delete(cursos.id).subscribe(
      res=> this.cursoService.getAll().subscribe(
        Response=> this.cursos=Response
      )
    )
  }
}
