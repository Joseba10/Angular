import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({ name: 'filterRecetas' })
export class RecetasFilter implements PipeTransform {

  transform(recetas: Receta[], searchText: string, isGlutenFree: boolean): Receta[] {

    //si no hay recetas retorna vacio
    if (!recetas) return [];

    let recetasFilterArray: Receta[] = []; //La variable ahora tiene el array de Receta

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      recetas.forEach(it => { //Coges las recetas y miras si tienen gluten
        if (it.isGlutenFree) {
          recetasFilterArray.push(it); //Metes en el array solo las que tienen gluten
        }
      });
    } else {
      recetasFilterArray = recetas; //Si no muestra todas
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase(); //Pasas el texto a minuscula
      let receta = '';
      return recetasFilterArray.filter(it => {
        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();
        return receta.includes(searchText);
      });
    }
  }

}