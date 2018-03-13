import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCKS_RECETAS } from './mocks.recetas';

@Injectable()
export class RecetasService {

  recetas : Receta[];

  constructor() { 
    console.log('RecetasService constructor');
  }


  getAll():Receta[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCKS_RECETAS.stockrecetas); 
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero);
       receta.imagen=el.imagen;
       receta.isGlutenFree=el.isGlutenFree;
       receta.likes=el.likes;

       receta.descripcion=el.descripcion;
       el.ingredientes.forEach( ing => {
          receta.addIngrediente(ing);
       });

       this.recetas.push(receta);
    });

    return this.recetas;
  }


  /**
   * Crear nueva Receta
   * @param receta :Receta nueva
   */
  crear(receta: Receta):void{

    console.log("RecetasService crear %o ",receta);
this.recetas.unshift(receta);

  }
}