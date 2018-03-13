import { Component, OnInit,Input  } from '@angular/core';
import { Receta } from '../../model/receta';



@Component({
  selector: 'app-recetario-detalle',
  templateUrl: './recetario-detalle.component.html',
  styleUrls: ['./recetario-detalle.component.scss']
})
export class RecetarioDetalleComponent implements OnInit {

  @Input('receta') receta : Receta;

  constructor() { 
    console.log('RecetarioDetalleComponent constructor');
  }

  ngOnInit() {
    console.log('RecetarioDetalleComponent ngOnInit');
}
}
