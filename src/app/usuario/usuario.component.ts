import { Component, OnInit } from '@angular/core';
import { Usuario, Sexo } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})


export class UsuarioComponent implements OnInit {

usuario:Usuario;

constructor(){

this.usuario= new Usuario('Walter');
this.usuario.apellido="White";
this.usuario.email="Walter_White@gmail.com";
this.usuario.sexo= Sexo.Indeterminado;
}

  ngOnInit() {
  }

}
