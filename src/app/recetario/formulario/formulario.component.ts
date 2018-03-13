import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';


/*************************************
 * nmp install --save-dev jquery     *
 *************************************/
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

formulario: FormGroup; //Tiene los objetos, formbuilder se encarga del formulario
ingredientes : FormArray;

  constructor(private fb: FormBuilder,public recetasService : RecetasService) {
    console.log("FormularioComponent constructor");
    this.crearformulario();
  
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
   }

  ngOnInit() {
    
    console.log("FormularioComponent ngOnInit");
  }

  
  crearformulario():void{

    console.log("FormularioComponent crearformulario");
    this.formulario= this.fb.group({

      //FormControl(input) => ['value',[Validaciones]]

      nombre:['',[Validators.required,Validators.minLength(2)]],
      cocinero:['',[Validators.minLength(5)]],
      descripcion:['',[Validators.required,Validators.minLength(100)]],
      imagen:['assets/imgs/receta_default.jpg',[Validators.required]],
      gluten:["true",Validators.required],
      ingredientes : this.fb.array([ this.createIngredienteFormGroup() ])
    });

  }

  Sumitar():void{
    console.log("FormularioComponent onSubmit");
//TODO  Recoger datos del formulario

let receta = this.mapearFormularioReceta(this.formulario);



this.formulario.reset({

gluten: "true",
imagen:"assets/imgs/receta_default.jpg"


});
this.ingredientes.controls.splice(1); //Dejar que meta solo un ingrediente




//$("#modalReceta").modal('hide');
$("#btn-close").click();

  }

  mapearFormularioReceta(form : FormGroup):Receta{

    let receta=new Receta(form.value.nombre);

    receta.cocinero= form.value.cocinero;
    receta.descripcion= form.value.descripcion;
    receta.isGlutenFree= (form.value.gluten=="true")?false:true;
    receta.imagen= form.value.imagen;
    
    this.recetasService.crear(receta);

      //recuperar los ingredientes
      form.value.ingredientes.map(element => {
        receta.addIngrediente( element.nombre );
      });

return receta;
 
  }

  estilosInput(control: FormControl):string{
const CLASS_ERROR="form-group has-error";
const CLASS_SUCCESS="form-group has-success";


if(control.dirty){
  
  if(control.valid){


    return (control.valid)?CLASS_SUCCESS:CLASS_ERROR;
  }
  else{

    return "form-group";
  }
                      //Le pone un color al input del elemento nombre que esta en el formulario
  }


}




/* Otra forma de hacerlo



crearformulario():void{

    console.log("FormularioComponent crearformulario");
    this.formulario= this.fb.group({

      //FormControl(input) => ['value',[Validaciones]]
      nombre:['',[Validators.required,Validators.minLength(2)]],
      cocinero:'',
      descripcion:['',[Validators.required,Validators.minLength(100)]],
        imagen:['assets/imgs/receta_default.jpg',[Validators.required]],
      gluten:["true",Validators.required]
    });

  }

  Sumitar():void{
    console.log("FormularioComponent onSubmit");
//TODO  Recoger datos del formulario

let nombre=this.formulario.value.nombre;
let receta=new Receta(nombre);

let cocinero=this.formulario.value.cocinero;
let descripcion=this.formulario.value.descripcion;
let imagen=this.formulario.value.imagen;
let gluten=this.formulario.value.gluten;

receta.nombre= nombre;
receta.cocinero= cocinero;
receta.descripcion= descripcion;
receta.isGlutenFree= gluten;
receta.imagen= imagen;

this.recetasService.crear(receta);
  */
 
/** 
   * Creamos un FormGroup para los Ingredientes
   * */  
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  /** 
   * Evento para crear un nuevo Ingrediente
  */
 clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
}

clickEliminarIngrediente( index ){

  if(this.ingredientes.length==1){

    console.log('FormularioComponent clickEliminarIngrediente');    
  }
  else{
    console.log('FormularioComponent clickEliminarIngrediente');    
    this.ingredientes.removeAt(index);

  }


}
}