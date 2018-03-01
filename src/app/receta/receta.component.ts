import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //Atributos



  fotogluten: string;
  fotoglutenfree: string;
  receta: Receta;
  show: boolean;
  icono: string;


  constructor() {

    this.fotogluten = 'assets/img/gluten.png';
    this.fotoglutenfree = 'assets/img/glutenfree.png';
    this.show = false;
    this.icono = 'glyphicon-chevron-down';
    this.receta = new Receta('Marmitako');
    this.receta.addIngrediente('patatas');
    this.receta.addIngrediente('bonito');
    this.receta.addIngrediente('pimiento verde');
    this.receta.addIngrediente('pimiento choricero');

    console.log("RecetaComponent constructor");
  }

  ngOnInit() {


    console.log("RecetaComponent ngOnInit");


  }
  sumarLike() {
    console.log("Clickar likes");
    this.receta.likes++;
  }

  showingredientes() {
    console.log("Click show ingredientes");
    this.show = !this.show;
    this.icono = (this.show) ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';

  }


}
