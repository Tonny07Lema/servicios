import { Component,OnInit } from '@angular/core';
import { Cliente } from './cliente/cliente';
import { ClienteService } from './cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  clientes:Cliente = new Cliente();
  constructor(private clienteServise:ClienteService,private router:Router) {}

  ngOnInit():void{
  }

  crearUsuario(){
    this.clienteServise.create(this.clientes).subscribe(
      data => {
        alert("Se creo Un Cliente")
      }, error => alert("Su cedula no existe, Primero registrece en una de nuestras farmacias"))
  }

}
