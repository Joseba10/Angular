import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
import { RecetasService } from '../providers/recetas.service';



@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {


  recetas : Receta[]; //Array<Receta>
  recetaSelec : Receta;

  constructor( private recetasService : RecetasService ) { 
    console.log('RecetarioComponent constructor');
  }

  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');
    this.recetas = this.recetasService.getAll();

    this.recetaSelec = this.recetas[0] || new Receta('Anonimo');

  }

  seleccionarReceta( receta : Receta ){
    console.log('RecetarioComponent seleccionarReceta');
    this.recetaSelec = receta;
}


}
