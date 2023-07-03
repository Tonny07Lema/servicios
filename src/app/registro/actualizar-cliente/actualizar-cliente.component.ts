import { Component,OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit{
  clientes:any =[];
  constructor(private clienteServise:ClienteService,private router:Router,private acttivateRoute:ActivatedRoute) {}

  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.acttivateRoute.params.subscribe(
      e => {
        let id=e['id'];
        if(id){
          this.clienteServise.get(id).subscribe(
            es => {this.clientes=es 
            console.log(es)}
          );
        }
      }
    )
  }
  update():void{
    this.clienteServise.update(this.clientes).subscribe(
      res => this.router.navigate(['/cliente'])
    )
  }

}
