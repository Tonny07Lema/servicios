import { Component,OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-curso',
  templateUrl: './actualizar-curso.component.html',
  styleUrls: ['./actualizar-curso.component.css']
})
export class ActualizarCursoComponent implements OnInit{
  cursos:any =[];
  constructor(private cursoService:CursoService,private router:Router,private acttivateRoute:ActivatedRoute) {}

  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.acttivateRoute.params.subscribe(
      e => {
        let id=e['id'];
        if(id){
          this.cursoService.get(id).subscribe(
            es => {this.cursos=es 
            console.log(es)}
        
          );
          
        }
      }
    )
  }
  update():void{
    this.cursoService.update(this.cursos).subscribe(
      res => this.router.navigate(['/curso'])
    )
  }
}
