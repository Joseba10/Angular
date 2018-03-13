import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Coche } from '../../model/coche';
import { CochesService } from '../../providers/coches.service';

@Component({
  selector: 'app-concesionarioformulario',
  templateUrl: './concesionarioformulario.component.html',
  styleUrls: ['./concesionarioformulario.component.scss']
})
export class ConcesionarioformularioComponent implements OnInit {
  coche: Coche;
  formulario:FormGroup;


  constructor(private fb: FormBuilder, private cochesService : CochesService) { 

    console.log('FormComponent constructor');
    this.createForm(); 
  }

  ngOnInit() {
  
    console.log('FormComponent ngOnInit');
  
  }
  createForm(){
    console.log('FormComponent createForm');
    this.formulario = this.fb.group({
      marca : ['', [Validators.required,Validators.minLength(4)] ],
      modelo : ['',[Validators.required,Validators.minLength(2)] ],
      version:  '',
      foto: 'assets/imgs/coche_default.jpg',
      puertas :  0,
      caballos : 0,
      consumo :  5
    });
}

onSubmit(event){
  console.log('FormComponent onSubmit formulario %o' , this.formulario.value );

  //Crear Coche a partir del formulario
  this.coche = this.mapperFormToCoche(this.formulario);

  //limpiar formulario
  this.formulario.reset();


  console.log('Llamar Servicio para crear Coche');
  this.cochesService.put(this.coche);


}

private mapperFormToCoche( form : FormGroup ):Coche{
  let coche = new Coche( 
    form.value.marca ,
    form.value.modelo,
    form.value.puertas,
    form.value.foto,
    form.value.version
  );
  coche.caballos = form.value.caballos;
  coche.consumo = form.value.consumo;
  return coche;
}

}
