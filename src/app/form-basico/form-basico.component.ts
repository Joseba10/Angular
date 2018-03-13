import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {

  //Atributo FormGroup para usar en el html
formulario:FormGroup;
fruta:string;
  constructor(private fb : FormBuilder) {

    //Crear Formulario
    this.fruta="Banana";
this.formulario=this.fb.group({

  //Nombre es un Control que es parecido a un input
  //HTML -> <form novalidate[formGroup]='formulario'>
  //Value y validaciones
  nombre:['Walter White',[Validators.required,Validators.minLength(3)]],


});


   }

  ngOnInit() {
  }

  //Html -> <form (ngSubmit)="enviar($event)">
  enviar(){

console.log("Enviar Formulario nombre %s",this.formulario.controls.nombre.value);

  }
}
