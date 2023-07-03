import { Component ,OnInit} from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  clientes:any =[];
 
  constructor(private clienteServicio:ClienteService){}

  ngOnInit(): void {
      this.clienteServicio.getAll().subscribe(
        e => this.clientes=e
      )
  }

  delete(clientes:Cliente):void{
    this.clienteServicio.delete(clientes.id).subscribe(
      res=> this.clienteServicio.getAll().subscribe(
        Response=> this.clientes=Response
      )
    )
  }
  

}
