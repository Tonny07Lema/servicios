import { Component,OnInit } from '@angular/core';
import { InscripcionService } from '../inscripcion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-inscripcion',
  templateUrl: './actualizar-inscripcion.component.html',
  styleUrls: ['./actualizar-inscripcion.component.css']
})
export class ActualizarInscripcionComponent  implements OnInit{
  inscripciones:any =[];
  constructor(private inscripcionService:InscripcionService,private router:Router,private acttivateRoute:ActivatedRoute) {}

  ngOnInit():void{
    this.cargar();
  }
  cargar():void{
    this.acttivateRoute.params.subscribe(
      e => {
        let id=e['id'];
        if(id){
          this.inscripcionService.get(id).subscribe(
            es => {this.inscripciones=es 
            console.log(es)}
        
          );
          
        }
      }
    )
  }
  update():void{
    this.inscripcionService.update(this.inscripciones).subscribe(
      res => this.router.navigate(['/curso'])
    )
  }
}
