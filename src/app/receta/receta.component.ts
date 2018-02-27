import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //Atributos

  nombre: string;
  foto: string;
  descripcion: string;
  likes: number;
  isGlutenFree: boolean;
  fotogluten: string;
  fotoglutenfree: string;
  cocinero: string;
  ingredientes: string[];
  show: boolean;
  icono:string;
  

  constructor() {

    this.nombre = 'Bocata de Calamares';
    this.foto = 'http://lh5.ggpht.com/-1N4EcwLVQDQ/USe6SNuxumI/AAAAAAAAAS8/F7Fv0YpTNF4/s1600/IMG_20130209_230101.jpg';
    this.descripcion = 'El bocadillo de calamares es una especialidad culinaria muy frecuente en España, o bien calamares rebozados en harina y fritos en aceite que suele ser de oliva, o bien la versión más sofisticada que es todo lo anterior más una salsa de tomate picante y mayonesa con ajo similar a la de las patatas bravas.1​ Se suele servir caliente, recién hecho. Este tipo de bocadillo (la versión sencilla sin salsa) es muy popular en Madrid y puede encontrarse en la mayoría de los bares de la capital española, siendo muy típico de la Plaza Mayor de Madrid y uno de los olores característicos de dicha plaza. En Zaragoza es tradicional la versión sofisticada del bocadillo de calamares, con la salsa picante (tomate, mayonesa y ajo), y se le denomina bocadillo de calamares bravos';
    this.likes = 2;
    this.isGlutenFree = false;
    this.fotogluten = 'assets/img/gluten.png';
    this.fotoglutenfree = 'assets/img/glutenfree.png';
    this.cocinero = "Karlos Arguiñano";
    this.ingredientes=['Calamares','Limon','Salsa AliOli','Pan'];
    this.show=false;


    console.log("RecetaComponent constructor");
  }

  ngOnInit() {


    console.log("RecetaComponent ngOnInit");


  }
  sumarLike() {

    this.likes++;
  }

  mostrar(){
    this.show=true;

  }


}
